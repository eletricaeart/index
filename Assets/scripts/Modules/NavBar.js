

function NavBar( 
   props = { 
      item1: { 
         name: "A" 
      }
      ,
      item2: { 
         name: "B" 
      }
      ,
      item3: { 
         name: "C" 
      }
      ,
      item4: { 
         name: "D" 
      }
      ,
   } 
) {
   $$( "navbar" ).forEach( tag => {
      return( tag.outerHTML = `
         <navbar>
            <style>
               navbar {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  width: 100%;
                  /* min-height: 48px; */
                  /* height: 58px; */
                  /* max-height: 78px; */
                  position: fixed;
                  bottom: 0;
                  left: 0;
                  background: #000;
               }
               navbar > content {
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  color: #fff;
               }
               navbar > content > menu-item {
                  display: flex;
                  aspect-ratio: 1;
               }
            </style>
            <content>
               <menu-item>${ props.item1.name }</menu-item>
               <menu-item>${ props.item2.name }</menu-item>
               <menu-item>${ props.item3.name }</menu-item>
               <menu-item>${ props.item4.name }</menu-item>
            </content>
         </navbar>
      ` );
   } );
}

// NavBar();