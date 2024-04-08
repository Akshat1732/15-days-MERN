// let a= new String("hello");
// let b= "hello";
// if(a==b){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }
 
// output by console.log ----- 
// const obj={
//     name:'Akshat',
//     lastName:'gautam',
// }
// console.log(obj);

// output by document write----
// const obj={
//     name:'Akshat',
//     lastName:'gautam',
// }
// document.write(obj);

// for printing data on the document scree---
// const str = JSON.stringify(obj);
// document.write(str);

// const arr =[1,2,3,4];
// arr.push(20)
// -- array push used for inserting the Element in array 
// console.log(arr);
// const obj={
//         name:'Akshat',
//         lastName:'gautam',
//     }


// const arr =[1,2,34];

// console.log(Array.isArray(obj))
// console.log(Array.isArray(arr))
// const arr ='akshat';
// check = function() {
    
//     if(Array.isArray(arr)){
//         console.log("array");

//     }
//     else {
//         console.log("object");
//     }

// }
// check();

// function checkIfObject(x){
//     if(Array.isArray(x)){
//         console.log("not object");
//     }
//     else if(typeof(x)=="object"){
//         console.log("object");
//     }
//     else{
//         console.log("not object");
//     }
// }
// checkIfObject(1);

// const arr=['name',2,true];
// const obj ={
//     name:'ajay',
//     age:20,
// }
// for(let i=0;i<2;i++){
//     console.log(obj[i]);
// }
// for(let i in arr){
//     console.log(i);
// }
// for(let i in obj){
//     console.log(i);
// }


// window concept start---

// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(window.document);
// console.log(window);

// const res =document.getElementById('t1');
// res['innerText']="hello,worlds"
// console.log(res);

// const res = document.getElementsByTagName("div");
// res[0].innerHTML="<h3>Hello,World!</h3>"
// console.log(res);

// re=document.querySelectorAll('div>h3');
// console.log(res)
// const ne = document.getElementByIdment("ht1");
// ne.innerText="Dynamic Text";/
// console.log(ne);
// document.body.appendChild(ne);
const firstDiv = document.getElementsByTagName("h3");
firstDiv[0].removeChild("h3");
// divcopy and shallowcopy differencxe--


