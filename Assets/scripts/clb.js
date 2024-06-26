

"use strict";
/* == [ properties ]
== == == == == == == == == */
const 
   _ = ( ...v ) => console.log( ...v )
   ,
   table = v => console.table( v )
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
   ,
   toBrl = v => v.toLocaleString( "pt-br", { "style": "currency", "currency": "BRL" } )
   ,
   fix = v => v.toFixed( 2 )
;

HTMLElement.prototype.attribute = function( v ) {
   return( 
      this.getAttribute( v )
   );
}

HTMLElement.prototype.$attribute = function( v ) {
   return( 
      this.getAttribute( v )
   );
}
// _( "HTMLElement: ", submit_calcular.$a( "type" ) );

/* -------------------------------- */



/* == [ events ]
== == == == == == == == == */
window.addEventListener( "load", ev => {
	
   /* == [ navlink ] 
   == == == == == == == == == */
   $$( "navlink" ).forEach( nl => {  
      _( "oi" );
      nl.outerHTML = `
         <p>
            <a href="${ nl.getAttribute( "to" ) }"
               target="_blank" >
               ${ nl.innerText }
            </a>
         </p>
      `;
   } );
   
   /* == [ padding ] 
   == == == == == == == == == */
   $$( "[pd]" ).forEach( p => {
      p.style.padding = p.getAttribute( "pd" );
   } );
   
   /* == [ gap ] 
   == == == == == == == == == */
   $$( "[gap]" ).forEach( g => {
      g.style.gap = g.getAttribute( "gap" );
   } );
   
   /* == [ aspect ratio ] 
   == == == == == == == == == */
   $$( "[ratio]" ).forEach( ratio => {
      ratio.style.aspectRatio = ratio.getAttribute( "ratio" );
   } );

} );