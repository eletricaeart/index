

const 
   buttonStyle = ``
   ,
   buttonTag = ``
;

function Button( props ) {
   $$( "button" ).forEach( tag => {
      return( tag.outerHTML = `
         <button>
            <style>
               ${ buttonStyle }
            </style>
            ${ buttonTag }
         </button>
      ` );
   } );
}

// Button();
