

"use strict";
/* [ properties ]
=================================== */
const 
   appbar = `
      <!-- <content>
         <app-logo>
            <img src="./ea.jpg" alt="ea" />
         </app-logo>
         <app-title>
            <content>
               <tt>ELETRICA</tt>
               <tt>&</tt>
               <tt>ART</tt>
            </content>
         </app-title>
         <app-options></app-options>
      </content> -->
      <content>
         <appbar-menu-left>
            <content>
               <trigram id="openDrawer">
                  <bar id="topBar_left"></bar>
                  <bar id="centerBar_left"></bar>
                  <bar id="bottomBar_left"></bar>
               </trigram>
            </content>
         </appbar-menu-left>
         <appbar-logo>
            <ea-logo>
               <logo-icon>
                  <img src="./ea.jpg" alt="ea" />
               </logo-icon>
               <logo-title>
                  <content>
                     <tt>ELETRICA</tt>
                     <tt>&</tt>
                     <tt>ART</tt>
                  </content>
               </logo-title>
            </ea-logo>
         </appbar-logo>
         <appbar-menu-right>
            <content id="">
               <trigram id="trigram_right">
                  <bar id="topBar_right"></bar>
                  <bar id="centerBar_right"></bar>
                  <bar id="bottomBar_right"></bar>
               </trigram>
            </content>
         </appbar-menu-right>
      </content>
   `
;
/* -------------------------------- */

window.addEventListener( "load", () => {
   // $( "appbar" ).outerHTML = appbarTemplate;
   let script = document.createElement( "script" );
   script.innerHTML = `
      _( "append script" );
   `;
   document.body.append( script );
} );