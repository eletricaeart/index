

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
                        <t>Contatos</t>
                     </menu-item>
                     <menu-item>
                        <icon>
                           <img src="./Assets/imgs/icons/contacts.svg" alt="">
                        </icon>
                        <t>Cadastrar Usuário</t>
                     </menu-item>
                     <menu-item>
                        <icon>
                           <img src="./Assets/imgs/icons/invoice.svg" alt="">
                        </icon>
                        <t>Criar Orçamento</t>
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