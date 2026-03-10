/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Recursively gets all text content from a node and its children.
 *
 * @param node - The node to extract text from.
 * @returns The concatenated text content.
 */
function getTextContent( node ) {
	if ( node.is( '$text' ) ) {
		return node.data;
	}

	let text = '';

	for ( const child of node.getChildren() ) {
		text += getTextContent( child );
	}

	return text;
}

/**
 * Checks if a paragraph contains the search text by recursively checking all children.
 *
 * @param paragraph - The paragraph element to search in.
 * @param searchText - The text to search for.
 * @returns True if the search text is found, false otherwise.
 */
function paragraphContainsText( paragraph, searchText ) {
	const text = getTextContent( paragraph );

	return text.includes( searchText );
}

/**
 * Finds the character offset of search text within a paragraph by walking through all children.
 *
 * @param paragraph - The paragraph element to search in.
 * @param searchText - The text to find.
 * @returns The character offset where the text starts, or null if not found.
 */
function findTextOffsetInParagraph( paragraph, searchText ) {
	const paragraphText = getTextContent( paragraph );
	const textIndex = paragraphText.indexOf( searchText );

	if ( textIndex === -1 ) {
		return null;
	}

	let charOffset = 0;
	let paragraphOffset = 0;

	for ( const child of paragraph.getChildren() ) {
		const childText = getTextContent( child );
		const childTextLength = childText.length;

		if ( textIndex >= charOffset && textIndex < charOffset + childTextLength ) {
			if ( child.is( '$text' ) ) {
				return paragraphOffset + ( textIndex - charOffset );
			} else {
				const offsetInChild = textIndex - charOffset;
				let childCharOffset = 0;
				let childElementOffset = 0;

				for ( const grandChild of child.getChildren() ) {
					const grandChildLength = grandChild.data.length;

					if ( offsetInChild >= childCharOffset && offsetInChild < childCharOffset + grandChildLength ) {
						return paragraphOffset + childElementOffset + ( offsetInChild - childCharOffset );
					}

					childCharOffset += grandChildLength;
					childElementOffset += grandChildLength;
				}
			}
		}

		charOffset += childTextLength;
		paragraphOffset += childTextLength;
	}

	return null;
}

/**
 * Comment data configuration.
 */
export const COMMENTS_DATA = [
	{
		threadId: 'e06a106ec988085a374caad5c8b94e7bb',
		searchText: 'The most frequently reported issues were',
		commentContent: '<p>Can we add percentages for each category?</p>'
	},
	{
		threadId: 'f17b217fd9e196df4a85dbed6c4c5d8fc',
		startSearchText: 'Average CSAT score',
		endSearchText: '27%',
		commentContent: '<p>Can we add a short explanation here?</p>'
	},
	{
		threadId: 'a28c328ed0a307eb485ebbe7d9c05e9ad',
		searchText: 'More complex',
		commentContent: '<p>What are some typical examples of Tier 2 cases?</p>',
		exactMatch: true
	},
	{
		threadId: 'b39d439fe1b418fc596fccf8e0d16f0be',
		searchText: 'High-impact',
		commentContent: '<p>Could we add one sentence explaining what qualifies as "high-impact"?</p>',
		exactMatch: true,
		setActiveThreadToNull: true
	}
];

/**
 * Adds a comment to the editor based on the comment data.
 *
 * @param editor - The editor instance.
 * @param commentsRepo - The comments repository plugin.
 * @param root - The root element of the document.
 * @param commentData - The comment data object.
 * @param userId - The user ID.
 */
function addComment( editor, commentsRepo, root, commentData, userId ) {
	let startParagraph, endParagraph;

	if ( commentData.searchText ) {
		startParagraph = [ ...root.getChildren() ].find( p => {
			return paragraphContainsText( p, commentData.searchText );
		} );

		endParagraph = startParagraph;
	} else if ( commentData.startSearchText && commentData.endSearchText ) {
		startParagraph = [ ...root.getChildren() ].find( p => {
			return paragraphContainsText( p, commentData.startSearchText );
		} );

		endParagraph = [ ...root.getChildren() ].find( p => {
			return paragraphContainsText( p, commentData.endSearchText );
		} );
	}

	if ( !startParagraph || !endParagraph ) {
		return;
	}

	const markerId = `comment:${ commentData.threadId }`;

	editor.model.change( writer => {
		let startPos, endPos;

		if ( commentData.exactMatch && commentData.searchText ) {
			const startOffset = findTextOffsetInParagraph( startParagraph, commentData.searchText );
			if ( startOffset === null ) {
				return;
			}

			const endOffset = startOffset + commentData.searchText.length;

			startPos = writer.createPositionAt( startParagraph, startOffset );
			endPos = writer.createPositionAt( endParagraph, endOffset );
		} else if ( commentData.startSearchText && commentData.endSearchText ) {
			const startOffset = findTextOffsetInParagraph( startParagraph, commentData.startSearchText );
			const endOffset = findTextOffsetInParagraph( endParagraph, commentData.endSearchText );

			if ( startOffset === null || endOffset === null ) {
				return;
			}

			const endTextLength = commentData.endSearchText.length;

			startPos = writer.createPositionAt( startParagraph, startOffset );
			endPos = writer.createPositionAt( endParagraph, endOffset + endTextLength );
		} else {
			startPos = writer.createPositionAt( startParagraph, 0 );
			endPos = writer.createPositionAt( endParagraph, endParagraph.maxOffset );
		}

		const range = writer.createRange( startPos, endPos );

		writer.addMarker( markerId, {
			range,
			usingOperation: false,
			affectsData: false
		} );
	} );

	const thread = commentsRepo.getCommentThread( commentData.threadId );

	if ( !thread ) {
		commentsRepo.addCommentThread( {
			threadId: commentData.threadId,
			comments: []
		} );
	}

	const threadAfter = commentsRepo.getCommentThread( commentData.threadId );

	if ( threadAfter ) {
		threadAfter.addComment( {
			commentId: `${ commentData.threadId }-c1`,
			authorId: userId,
			content: commentData.commentContent,
			createdAt: new Date().toISOString()
		} );
	}

	if ( commentData.setActiveThreadToNull ) {
		commentsRepo.setActiveCommentThread( null );
	}
}

/**
 * Creates comments in the editor.
 *
 * @param editor - The editor instance.
 * @param USER_DATA - The user data object.
 */
export function createComments( editor, USER_DATA ) {
	const commentsRepo = editor.plugins.get( 'CommentsRepository' );
	const root = editor.model.document.getRoot();

	COMMENTS_DATA.forEach( commentData => {
		addComment( editor, commentsRepo, root, commentData, USER_DATA.id );
	} );
}
