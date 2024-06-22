

function NavLink( props ) {
   const 
      navlinkStyle = `
         <style>
         p[navlink] {
            
         }
         p[navlink] > a {
            text-decoration: none;
         }
         </style>
      `
      /* ,
      navlinkTag = `
         <p>
            <a href"${ props.to }"
               target="${ props.target }" >
               ${ props }
            </a>
         </p>
      ` */
   ;

   $$( "navlink" ).forEach( nvl => {
      const 
         names = [ ...nvl.getAttributeNames() ]
         ,
         values = []
      ;

      names.forEach( n => {
         values.push( [ n, nvl.getAttribute( n ) ] );
      } );

      props = Object.fromEntries( values );
      props.children = nvl.innerText;

      _( "el.getAttributeNames(): ", props );

      return( nvl.outerHTML = `
         <p navlink>
            ${ navlinkStyle }
            <a href="${ props.to }"
               target="${ props.target }" >
               ${ props.children }
            </a>
         </p>
      ` );
   } );
}