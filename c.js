

_ = ( ...v ) => console.log( ...v );


async function f1( nmbr = 5, sNmbr = 2 ) {
   let res = new Promise( resolve => {
      setTimeout( () => resolve( nmbr * sNmbr ), 2000 );
   } );
   // _( "f1: \n", `n: ${ nmbr } * ${ sNmbr } = ${ res }` );
   return( res );
}

let vars = 0;

async function af1( c, l ) {
   try {
      let resulto = await f1( c, l );
      vars = await resulto;
      return( resulto );
   } catch( err ) {
      _( "af1() ===> erro: ", err );
   }
}

let res = async () => af1( 3, 6 ).then( data => _( "a res: data => ", data ) );
res();

( async () => {
   setTimeout( () => {
      _( "vars:: ", vars );
   }, 4000 );
} )();

/* "promise"; 
const createPromise = new Promise(
   (resolve, reject) => {
      setTimeout(function () {
         resolve(
            "the promise is resolved after 2 seconds");
      }, 2000);
   });

createPromise.then((promisedata) => {
   console.log("Promise is resolved successfully", promisedata);
}); */

"async"; 
async function promiseFun() {
   const 
      createPromise = new Promise( ( rs, rj ) => {
         setTimeout( () => {
            rs( "the promise resolved" );
         }, 2000 );
      } )
      ,
      waitPromise = await createPromise; 
   ;

   return( waitPromise );
}
promiseFun();

let asyncRes;
async function tomelee() {
   asyncRes = await promiseFun();
   return( asyncRes );
}
tomelee();

async function show() {
   let data = await tomelee();
   _( "data oi: ", await data );
}
show();

_( "asyncRes: ", asyncRes );