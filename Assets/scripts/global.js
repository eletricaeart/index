

'use strict';
/* [ properties ]
=================================== */
let 
   inputs = []
   ,
   intent = {}
   ,
   users = []
   ,
   customers = []
   ,
   services = []
   ,
   receipts = []
   ,
   budgets = []
;

let 
   EraseLS = v => {
      localStorage.removeItem( "ea.users" );
      _( "\n\nea.users: \n", JSON.parse( localStorage.getItem( "ea.users" ) ) );
   }
   ,
   ShowUsers = () => _( "\n\nusers: \n", users )
   ,
   ShowLS = () => _( "\n\nea.users: \n", JSON.parse( localStorage.getItem( "ea.users" ) ) )
;
/* -------------------------------- */

/* == [ global functions ]
== == == == == == == == == */
// function UpdateDB( { DBName, LSName, data } ) {
//    if( localStorage.getItem( LSName ) ) {
//       _( `${ DBName } antes: \n`, DBName );
//       DBName = JSON.parse( localStorage.getItem( LSName ) );
//       _( `${ DBName } depois: \n`, DBName );
//    }
//    if( data ) {
//       DBName.push( data );
//       localStorage.setItem( LSName, JSON.stringify( DBName ) );
//       _( `${ LSName } has been updated: \n${ localStorage.getItem( LSName ) }` );
//    }
// }
function UpdateDB( DBName, LSName, data ) {
   let 
      newData = {}
      ,
      st = DBName
   ;

   if( localStorage.getItem( LSName ) ) {
      DBName = JSON.parse( localStorage.getItem( LSName ) );
      newData = DBName;
   }
   if( data ) {
      DBName.push( data );
      localStorage.setItem( LSName, JSON.stringify( DBName ) );
      newData = DBName;
   }

   _( `\n== == == == == == == == ==\ndb.${ st }: ` );
   table( JSON.parse( localStorage.getItem( LSName ) ) );
   return( DBName );
}

// UpdateDB( { DBName: budgets, LSName: "ea.budgets", data: { budgetID: 2, budgetName: "Orçamento 2" } } );

function Observer() {
   let 
      url = window.location.href
      ,
      data = { 
         actualPage: url
      }
   ;
   
   if( url.includes( "home" ) ) {
      backBtn.style.display = "none";
   } else {
      backBtn.style.display = "flex";
   }

   if( localStorage.getItem( "ea.intent" ) ) {
      data.backPage = JSON.parse( localStorage.getItem( "ea.intent" ) ).actualPage;
   } else {
      data.backPage = "";
   }

   localStorage.setItem( "ea.intent", JSON.stringify( {
      backPage: data.backPage,
      actualPage: data.actualPage
   } ) );

   _( "intent: \n", JSON.parse( localStorage.getItem( "ea.intent" ) ) );
}


/* == [ events ] 
== == == == == == == == == */
window.addEventListener( "load", ev => {
   _( "global.js\n\n" );
   _( `Observer(): \n${ window.location.href }` );
   // DrawerExe();
   // BackBtnExe();

   Observer();
   // UpdateDB( { DBName: db.users, LSName: "ea.users" } );
   users = UpdateDB( "users", "ea.users" );
   customers = UpdateDB( "customers", "ea.customers" );
   budgets = UpdateDB( "budgets", "ea.budgets" );
   receipts = UpdateDB( "receipts", "ea.receipts" );
   services = UpdateDB( "services", "ea.services" );
   // _( "users: ", console.table( users ) );
   // _( "customers: ", customers );
   // _( "budgets: ", budgets );
   // _( "receipts: ", receipts );
   // _( "services: ", services );


} );