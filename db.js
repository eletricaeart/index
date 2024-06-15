

// User = {
//    id: "",
//    name: "",
//    cpf: 1,
//    rg: 1,
//    cellPhone: 1,
//    email: "",
//    address: {
//       street: "",
//       number: 1,
//       city: "",
//       district: "",
//       state: "",
//       CEP: 1,
//    }
// };

// Products = {
//    id: "",
//    qtd: 1,
//    description: "",
//    unityPrice: 1,
//    totalPrice: 1,
// };



const _ = ( ...v ) => console.log( ...v );

async function f1( c, l ) {
   try {
      let 
         res = await  c * l
         ,
         result = 0
      ;
      async () => {
         let v = await setTimeout( () => {
            result = 13;
         }, 1000 );
      }
      
      _( "f1() => res: ", res );
      return( res );
   }
   catch( err ) {
      _( { err } );
   }
}

async function f2( c, l ) {
   try {
      let res = await f1( c, l );
      _( "f2() => res: ", res );
      return( res );
   }
   catch( err ) {
      _( { err } );
   }
}

async function show( c, l ) {
   try {
      let data = await f2( c, l );
      _( "show ===> data: ", data );
      return( data );
   }
   catch( err ) {
      _( { err } );
   }
}

_( "oi" );
show( 3, 4 ).then( data => _( "show() => then() => data: ", data ) );
show( 3, 4 );