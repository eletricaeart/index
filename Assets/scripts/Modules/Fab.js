

function Fab( props = { text: "+" } ) {
   let 
      data = {}
   ;
 
   return( $( "fab" ).outerHTML = `
      <fab>
         <content>
            ${ props.text }
         </content>
      </fab>
   ` );  
}