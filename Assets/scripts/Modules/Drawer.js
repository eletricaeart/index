

function Drawer( props ) {
   let 
      template = ""
      ,
      profile = {
         user: "Rafael Ângelo Sammarco",
         phone: "(13) 9 9148 - 6078",
         pic: "./ea.jpg"
      }
      ,
      items = [
         {
            name: "Home",
            icon: "../Assets/imgs/icons/contacts.svg",
            link: "./home.html",
         },
         {
            name: "Clientes",
            icon: "../Assets/imgs/icons/contacts.svg",
            link: "./customers.html",
         },
         {
            name: "Orçamentos",
            icon: "../Assets/imgs/icons/contacts.svg",
            link: "./budgets.html",
         },
         {
            name: "Recibos",
            icon: "../Assets/imgs/icons/contacts.svg",
            link: "./receipts.html",
         },
         {
            name: "Serviços",
            icon: "../Assets/imgs/icons/contacts.svg",
            link: "./services.html",
         },
         {
            name: "Criar Orçamento",
            icon: "../Assets/imgs/icons/invoice.svg",
            link: "./print-page.html",
         },
         {
            name: "Suporte",
            icon: "../Assets/imgs/icons/contacts.svg",
            link: "./support.html",
         },
      ]
   ;

   template = `
      <drawer id="drawer" closed>
         <drawer-inside>
            <header>
               <user-profile>
                  <user-pic content>
                     <picture>
                        <img src="${ profile.pic }" alt="user pic">
                     </picture>
                  </user-pic>
                  <user-info>
                     <content>
                        <user-name>${ profile.user }</user-name>
                        <user-phone>${ profile.phone }</user-phone>
                     </content>
                  </user-info>
               </user-profile>
            </header>
            <content>
               <main-menu section>`
   ;
   items.forEach( item => { template += `
         <menu-item>
            <icon>
               <img src="${ item.icon }" alt="">
            </icon>
            <t>
               <a href="${ item.link }">${ item.name }</a>
            </t>
         </menu-item>
   ` } );
   template += `         
               </main-menu>
            </content>
            <footer>
               <p>Logout</p>
            </footer>
         </drawer-inside>
         <drawer-outside id="drawerOutside"></drawer-outside>
      </drawer>
   `;

   return( $( "drawer" ).outerHTML = template );

/* 
   return( $( "drawer" ).outerHTML = `
      <drawer id="drawer" closed>
         <drawer-inside>
            <header>
               <content>
                  <user-profile>
                     <user-pic>
                        <img src="${ profile.pic }" alt="user pic">
                     </user-pic>
                     <user-info>
                        <user-name>${ profile.user }</user-name>
                        <user-phone>${ profile.phone }</user-phone>
                     </user-info>
                  </user-profile>
               </content>
            </header>
            <content>
               <main-menu section>
                  ${
                     items.forEach( item => {
                        return( `
                           <menu-item>
                              <icon>
                                 <img src="${ item.icon }" alt="">
                              </icon>
                              <t><a href="${ item.link }">${ item.name }</a></t>
                           </menu-item>
                        ` )
                     } )
                  }
                  
               </main-menu>
            </content>
            <footer>
               <p>Logout</p>
            </footer>
         </drawer-inside>
         <drawer-outside id="drawerOutside"></drawer-outside>
      </drawer>
   ` ); */
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