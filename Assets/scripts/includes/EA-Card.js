

let 
   eaCardStyle = `
      <style>
         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins:wght@500;700;800;900&display=swap');
            
         [section="dual"] {
            display: flex;
            flex-direction: row;
         }
         [section="dual"] > * {
            flex: 1;
         }
         
         ea-card {
            background: var( --card-lv1 );
            color: var( --appbar-title );
            /* width: 100%;
            padding: 2vw;
            padding: 1vw;
            aspect-ratio: 5 / 2.3;
            aspect-ratio: 3.8 / 1;
            overflow: hidden;
            font-size: 2vw; */
            font-size: 2.5vw;
   
            display: grid !important;
            grid-template-columns: .35fr .65fr;
            width: 100%;
            /* height: 36.3vw; */
            aspect-ratio: 3.8/1;
            padding: 1vw;
            inset: 0;
            color: #f5f5f5;
            filter: var( --appbar-filter-shadow );
         }
         ea-card * {
            font-family: "poppins" !important;
         }
         ea-card ea-logo {
            display: flex;
            height: 100%;
            aspect-ratio: 1;
         }
         ea-logo > content {
            align-items: center;
         }
         ea-card ea-logo img {
            width: 100%;
            aspect-ratio: 1;
            border-radius: 100vw;
            border: var( --card-lv3 ) solid .48em;
         }
   
         ea-card > description {
            display: flex;
            width: 100%;
            aspect-ratio: 1.78 / 1;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 2.25vw;
            /* text-wrap: nowrap; */
         } 
         ea-card > description h1 {
            margin: 0;
            padding-bottom: 0.5em;
         }
         ea-card > description t {
            display: block;
         }
      </style>
   `
   ,
   eaCardTemplate = `
      <ea-card section="dual">
         ${ eaCardStyle }
         <ea-logo>
            <content>
               <img src="./ea.jpg" alt="ea-logo" />
            </content>
         </ea-logo>
         <description section >
            <h1>ELÉTRICA & ART</h1>
            <t5>
               CPF/CNPJ 32.858.892/0001-52 - IM 67358/0001
            </t5>
            <t>
               Rua José Alves Maciel, 40 - Aviação <br />
               Praia Grande - São Paulo - SP - Cep 11702-440
            </t>
            <strong>
               Fone: ( 13 ) 99768-5853 <br />
               Whatsapp <br />
               E-mail: eletrica.art.ltda@gmail.com <br />
            </strong>
         </description>
      </ea-card>`
   ;
   
   function EACard( props ) {
      $$( "ea-card" ).forEach( tag => {
         return(
            tag.outerHTML = eaCardTemplate
         );
      } );
   }
   
   EACard();