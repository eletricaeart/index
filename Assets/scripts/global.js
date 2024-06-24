

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



/* == [ events ] 
== == == == == == == == == */
window.addEventListener( "load", ev => {
   _( "global.js\n\n" );

   function Observer() {
      intent.actual = window.location.href;
      _( "intent: \n", intent );
   }
   Observer();

} );