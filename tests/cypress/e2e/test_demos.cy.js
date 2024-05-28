describe( 'Test CKEditor 5 demo', () => {
  const demosNIMBuilt = [
    'ai-assistant',
    'headless',
    'internationalization',
    'markdown',
    'mobile',
    'paste-from-office-enhanced',
    'user-interface-balloon',
    'user-interface-balloon-block',
    'user-interface-bottom-toolbar',
    'user-interface-button-grouping',
    'user-interface-classic',
    'user-interface-inline'
  ];

  demosNIMBuilt.forEach( demo => {
    it( `Testing demo: ${ demo } (NIM built)`, () => {
      const URL = `http://localhost:9002/${ demo }.html`;

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

  const demosLegacyBuilt = [
    'feature-rich',
    'mathtype',
    'source-code-editing',
    'productivity-pack',
    'user-interface-document',
    'wproofreader',
  ];

  demosLegacyBuilt.forEach( demo => {
    it( `Testing demo: ${ demo } (webpack legacy built)`, () => {
      const URL = `http://localhost:9001/${ demo }/`;

      cy.visit( URL );

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
