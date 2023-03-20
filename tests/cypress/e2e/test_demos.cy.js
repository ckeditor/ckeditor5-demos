describe( 'Test CKEditor 5 demo', () => {
  const defaultDemos = [ 
    'feature-rich',
    'headless',
    'internationalization',
    'markdown',
    'mobile',
    'source-code-editing',
    'user-interface-balloon',
    'user-interface-balloon-block',
    'user-interface-bottom-toolbar',
    'user-interface-button-grouping',
    'user-interface-classic',
    'user-interface-document',
    'user-interface-inline'
  ]

  defaultDemos.forEach( demo => {
    it( `Testing demo: ${ demo }`, () => {
      const URL = `http://localhost:9001/${ demo }/`;

      cy.visit( URL );

      if ( demo == 'mobile' ) {
        cy.get( 'iframe' ).then( $iframe => {
          const doc = $iframe.contents();
          
          // Check if the editor initialized properly.
          doc.get( '.ck-editor__editable' );
        } )
        
        return;
      }

      // Check if the editor initialized properly.
      cy.get( '.ck-editor__editable' );

      // Check if images loaded properly.
      if ( Cypress.$( 'img' ).length > 0 ) {
        cy.get( 'img' ).each( $img => {
          expect( $img[ 0 ].naturalWidth ).to.be.above( 0 );
        } );
      }
    } )
  } );
} )
