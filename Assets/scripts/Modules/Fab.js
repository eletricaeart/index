

function Fab( props ) {
   let 
      data = {}
   ;
 
   return( $( "fab" ).outerHTML = `
      <fab>
         <content>
            `${ props.items.forEach( item => "" ) }`
         </content>
      </fab>
   ` );  
}