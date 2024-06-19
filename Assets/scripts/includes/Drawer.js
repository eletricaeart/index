

function Drawer( props ) {
   $$( "drawer" ).forEach( a => {
      return( a.outerHTML = `
         <drawer id="drawer">
            <drawer-inside>
               <header>
                  <content>
                     <app-logo>
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
                     </app-logo>
                  </content>
               </header>
               <content>
                  <main-menu section>
                     <menu-item>
                        <icon>
                           <img src="./Assets/imgs/icons/contacts.svg" alt="">
                        </icon>
                        <t><a href="./index.html">Home</a></t>
                     </menu-item>
                     <menu-item>
                        <icon>
                           <img src="./Assets/imgs/icons/contacts.svg" alt="">
                        </icon>
                        <t><a href="./cadastrar-usuario.html">Cadastrar Usuário</a></t>
                     </menu-item>
                     <menu-item>
                        <icon>
                           <img src="./Assets/imgs/icons/invoice.svg" alt="">
                        </icon>
                        <t><a href="./orcamento.html">Criar Orçamento</a></t>
                     </menu-item>
                  </main-menu>
               </content>
            </drawer-inside>
            <drawer-outside id="drawerOutside"></drawer-outside>
         </drawer>
      ` );
   } );
}
Drawer();


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