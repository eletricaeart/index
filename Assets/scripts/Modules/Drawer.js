

function Drawer( props ) {
   return( $( "drawer" ).outerHTML = `
      <style>
      </style>
      <drawer id="drawer" closed>
         <drawer-inside>
            <header>
               <content>
                  <!--app-logo>
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
                        </lo-title>
                     </ea-logo>
                  </app-logo-->
                  <user-profile>
                     <user-pic>
                        <img src="./ea.jpg" alt="user pic">
                     </user-pic>
                     <user-info>
                        <user-name>Rafael Ângelo Sammarco</user-name>
                        <user-phone>(13) 9 9148 - 6078</user-phone>
                     </user-info>
                  </user-profile>
               </content>
            </header>
            <content>
               <main-menu section>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./home.html">Home</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./customers.html">Clientes</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./new-customer.html">Cadastrar Cliente</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./budgets.html">Orçamentos</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./new-budget.html">Criar Orçamento</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./receipts.html">Recibos</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./new-receipt.html">Criar Recibo</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./services.html">Serviços</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./new-service.html">Novo Serviço</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/invoice.svg" alt="">
                     </icon>
                     <t><a href="./print-page.html">Criar Orçamento</a></t>
                  </menu-item>
                  <menu-item>
                     <icon>
                        <img src="../Assets/imgs/icons/contacts.svg" alt="">
                     </icon>
                     <t><a href="./support.html">Suporte</a></t>
                  </menu-item>
               </main-menu>
            </content>
            <footer>
               <p>Logout</p>
            </footer>
         </drawer-inside>
         <drawer-outside id="drawerOutside"></drawer-outside>
      </drawer>
   ` );
}

// Drawer();

// function DrawerExe() {
//    openDrawer.addEventListener( "click", () => {
//       if( drawer.getAttribute( "opened" ) ) {
//          drawer.setAttribute( "closed", "" );
//          drawer.removeAttribute( "opened" );
//       } else {
//          drawer.setAttribute( "opened", "" );
//          drawer.removeAttribute( "closed" );
//       }
//    } );
//    drawerOutside.addEventListener( "click", () => {
//       drawer.removeAttribute( "opened" );
//       drawer.setAttribute( "closed", "" );
//    } );
// }

// function BackBtnExe() {
//    backBtn.addEventListener( "click", () => {
//       _( "backBtn pressed!" );
      
//       let href = JSON.parse( 
//          localStorage.getItem( "ea.intent" ) 
//       ).backPage;
      
//       window.location.href = href;
//    } );
// }

addEventListener( "load", () => {
   openDrawer.addEventListener( "click", () => {
      if( drawer.getAttribute( "opened" ) ) {
         drawer.setAttribute( "closed", "" );
         drawer.removeAttribute( "opened" );
      } else {
         drawer.setAttribute( "opened", "" );
         drawer.removeAttribute( "closed" );
      }
   } );
   drawerOutside.addEventListener( "click", () => {
      drawer.removeAttribute( "opened" );
      drawer.setAttribute( "closed", "" );
   } );

   backBtn.addEventListener( "click", () => {
      _( "backBtn pressed!" );
      
      let href = JSON.parse( 
         localStorage.getItem( "ea.intent" ) 
      ).backPage;
      
      window.location.href = href;
   } );
   
} );