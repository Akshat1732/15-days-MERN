// console.log('start');

// setTimeout( ()=>{console.log('TimeOut...')},1000)

// console.log('end');

// setTimeout( ()=>{console.log('TimeOut.1..')},20000);

// console.log('start');

// setTimeout( ()=>{console.log('TimeOut.2..')},5000);

// console.log('intermediate');
// console.log('end');


// function createOrder(x,fn){
//     console.log(x);

//     setTimeout((=>{fn('Aksh123')},1000))
// }
// function makePayment(orderId){
//     console.log()
// }





// const pr = new Promise((resolve , reject)=>{

//     if(true){
//         // resolve();
//         setTimeout(()=>{resolve();
//         },1000)
//     }
//     else{
//         reject();
//     }
// });
// console.log(pr);


const pr = new Promise((resolve , reject)=>{
    setTimeout(()=>{reject("some items are out of stock");},100)
});

setTimeout(()=>{console.log('first timeout....');},0)
// console.log(pr);

pr.then((res)=>{
    console.log(res);
})
    .catch((err)=>{
        console.log(err);
    })
    