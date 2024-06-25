

function Fab( props = { text: "+" } ) {
   let 
      data = {}
   ;
 
   return( $( "fab" ).outerHTML = `
      <fab>
         <content>
            <t>${ props.text }</t>
         </content>
      </fab>
   ` );  
}