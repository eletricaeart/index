

function Drawer( props ) {
   $$( "drawer" ).forEach( tag => {
      return( tag.outerHTML = `
         <style>
            /* == [ drawer ] 
            == == == == == == == == == */
            drawer {
               display: none;
               flex-direction: row;
               width: 100%;
               height: 100dvh;
               position: fixed;
               top: 0;
               left: 0;
               z-index: 9;
               background: #0005;
               overflow-y: scroll;
            }
            drawer[opened] { display: flex; }
            drawer[closed] { display: none; }
            drawer-inside {
               display: flex;
               flex-direction: column;
               height: 100dvh;
               background: var( --card-lv3, #fff );
               box-shadow: #0005 0 0 5px;
               transition: all 5s cubic-bezier(0.68, -0.55, 0, 1.31);
            }
            drawer[opened] > drawer-inside {
               width: clamp( 100px, 95%, 350px );
            }
            drawer[closed] > drawer-inside {
               /* transition: all 5s cubic-bezier(0.68, -0.55, 0, 1.31); */
               width: 0;
            }
            drawer-outside {
               display: flex;
               flex: 2.5;
            }


            drawer-inside > header {
               display: flex;
               width: 100%;
               background: var( --drawer-head, #f5f5f5 );
               aspect-ratio: 16 / 9;
            }
            drawer-inside > content {
               background-color: var( --bg2 );
            }


            drawer main-menu {
               gap: .8em;
            }
            drawer menu-item {  
               display: flex;
               background: var( --bg );
               padding: 1em;
               border-radius: 9px;
               align-items: center;
               justify-content: flex-start;
               gap: 1rem;
               font-size: .9em;
            }
            drawer menu-item a {
               text-decoration: none;
               color: var( --menu-item-link, #555 );
            }

            drawer icon {
               display: grid;
               place-items: center;
               width: 36px;
               height: 36px;
               aspect-ratio: 1;
            }
            
            user-profile {
               display: flex;
               flex-direction: column;
               justify-content: flex-end;
               gap: 1em;
               width: 100%;
               height: 100%;
               aspect-ratio: 16 / 9;
            }
            user-profile > user-pic {
               display: flex;
               width: 60px;
               height: 60px;
               aspect-ratio: 1;
            }
            user-profile > user-pic > img {
               width: 100%;
               height: 100%;
               aspect-ratio: 1;
               border-radius: 100vw;
               box-shadow: var(--appbar-logo-shadow);
            }

            user-info {
               display: flex;
               flex-direction: column;
               gap: .2em;
            }
            user-name {
               display: flex;
               color: var( --user-name, #999 );
            }   
            user-phone {
               display: flex;
               font-size: .9em;
               color: var( --user-phone, #fc0 );
            }   
            
            drawer > drawer-inside > footer {
               display: flex;
               align-items: center;
               justify-content: center;
               background: var( --bg );
               font-size: .9em;
            }
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
   } );
}

// Drawer();


window.addEventListener( "load", () => {
   _( "openDrawer.js" );
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
} );