// let figlet = require("figlet");
// figlet('Cheetah hi khde !',(err,data)=>{
//     console.log(data);
// })


// async await---


// console.log('start');
// async function getApi(){
//     console.log('api calling.....');
//     const pr= await fetch('https://api.github.com/users/deepak3440');
//     // console.log((pr));
//     console.log('making json')
//     const data = await pr.json();
//     console.log('::fetched data::');
// }
// getApi();
// console.log('end');



console.log('start');

async function callApi(){
  const pr=newPromise((res,rej)=>{
    console.log('promise started');
    setTimeout(()=>{
      console.log('timeout 1....')
    },1000);
  })
  console.log('promise completed');
  // pr= newPromise((res,rej)=>{
  //   console.log('promise 2..');
  //   setTimeout(()=>{
  //     console.log('timeout 2....')
  //   },1000);
  // });
  
}
callApi();