

function Button( props  ) {
   const 
      buttonStyle = `
         <style>
            button[ btn="${ props.tag }" ] {
               margin: ${ props.margin || "0" };
               padding: ${ props.bpd || "0" };
               background: ${ props.bg || "#27f" };
               border: ${ props.border || "transparent" };
               border-radius: ${ props.radius || ".55em" };
               color: ${ props.color || "#fff" };
               text-transform: uppercase;
               font-weight: bold;
               font-size: ${ props.size || "1em" };
            }
            button[ btn="${ props.tag }" ] > content {
               padding: ${ props.pd || "1.1em 2em" };
            }
         </style>
      `
   ;
   
   $$( `button[btn="${ props.tag }"` ).forEach( item => {
      /* item.addEventListener( "click", () => {
         _( "btn clicked" );
      } ); */
      item.setAttribute( "id", props.id || `btn_${ props.tag }` );
      return( item.outerHTML = `
         <button btn="${ props.tag }">
            ${ buttonStyle }
            <content>
               ${ item.innerText || "send" }
            </content>   
         </button>   
      ` );
   } );
}