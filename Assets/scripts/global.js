

'use strict';
/* [ properties ]
=================================== */
let 
   inputs = []
   ,
   users = []
   ,
   services = []
   ,
   receipts = []
   ,
   budgets = []
   ,
   intent = {}
;
/* -------------------------------- */

/* == [ global functions ]
== == == == == == == == == */
function UpdateDB( { ODBName, LSDBName, data } ) {
   if( localStorage.getItem( LSDBName ) ) {
      ODBName = [ 
         ...JSON.parse( localStorage.getItem( LSDBName ) )
      ];
   }
   if( data ) {
      ODBName.push( data );
      localStorage.setItem( LSDBName, JSON.stringify( ODBName ) );
   }
   _( `${ LSDBName } has been updated: \n${ localStorage.getItem( LSDBName ) }` );
}

// UpdateDB( { ODBName: budgets, LSDBName: "ea.budgets", data: { budgetID: 2, budgetName: "Orçamento 2" } } );

function Observer() {
   let 
      url = window.location.href
      ,
      data = { 
         actualPage: url
      }
   ;

   if( localStorage.getItem( "ea.intent" ) ) {
      data.backPage = JSON.parse( localStorage.getItem( "ea.intent" ) ).actualPage;
   } else {
      data.backPage = "";
   }

   localStorage.setItem( "ea.intent", JSON.stringify( {
      backPage: data.backPage,
      actualPage: data.actualPage
   } ) );

   // if( url.includes( "home" ) ) {
   //    _( "url includes home" );
   //    localStorage.setItem( "ea.intent", JSON.stringify( { 
   //       actualPage: url, backPage: "" 
   //    } ) );
   // } else {
   //    localStorage.setItem( "ea.intent", JSON.stringify( { 
   //       backPage: JSON.parse( localStorage.getItem( "ea.intent" ) ).actualPage,
   //       actualPage: url 
   //    } ) );
   // }

   _( "intent: \n", intent );
}


/* == [ events ] 
== == == == == == == == == */
window.addEventListener( "load", ev => {
   _( "global.js\n\n" );
   _( `Observer(): \n${ window.location.href }` );

   Observer();

} );