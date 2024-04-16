// flat
// map
// flatmap
// important topics-----

// const fs = require('node:fs');
// const data = fs.readFileSync('./myReadme.txt',{encoding:'utf8'});
// console.log(data.toString());
// console.log(data);


// const fs = require('fs');
// fs.writeFileSync('./my.txt',"10 -th April 2024:day 7");  //new file bnade my.txt name see


// const fs = require('fs');
// console.log('start');
// const data =fs.readFileSync('./myReadme.txt',{encoding:'utf8'})
// console.log(data);
// console.log("end");


// fs.writeFileSync('./my.txt',"10 -th April 2024:day 7");  //new file bnade my.txt name see





// const fsPromises = require('fs/promises');
// console.log("start");
// const pr = fsPromises.readFile('./myReadme.txt',{encoding:'utf8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("END");


// call back in file system---

// const fs= require('fs');
//  fs.readFile('./myReadme.txt',{encoding:"utf8"},(err,data)=>{
//     console.log(data);
// });


//http://localhost:1400/

// const http=require('http');

// const app = http.createServer((req,res)=>{
    
//     // console.log('Request Recieved');
    
//     // console.log(object.keys(req));
//      console.log(req.url);
//      res.writeHead(200,{'content-type':'text/html',
//      })

    
//     res.end();

// });

// app.listen(1400,()=>{
    
//     console.log('...........started.............');

// });

const http = require('http');

const fs = require('fs');

const data = fs.readFileSync('./data.json','utf8');
const dataObj = JSON.parse(data);
console.log(data);
 const htmlTemplate =`
 <!DOCTYPE HTML>
 <html lang="en-US">
 <head>
 <style>

  .product-card{
    max-width:500px;
    margin:20px auto;
    border: 3px double brown;
    border-radius:8px;
    padding:16px;
  }
 </style>

</head>
<body> PRODUCTS_CARDS_</body>
</html>
 `
 const cardTemplate =`
 <div class ='product-card'>
 <h4>TITLE</h4>
 <p>INFO</p>
 </div>
 `
 const card1= cardTemplate.replace('TITLE','Xiaomi Note 11 Pro')
                            .replace('INFO','THIS  is a Chines Product'); 
 const card2= cardTemplate.replace('TITLE','Iphone 15 pro Max').replace('INFO','THIS A NOT BEST PRODUCT'); 

  const allCards =card1+card2

    //   console.log("\n: card1:",card1)
    //   console.log('\n:card2:',card2)
const page= htmlTemplate.replace('PRODUCTS_CARDS_',allCards);
const app = http.createServer((req , res)=>{
    console.log('Request recieved');
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html'
    })
    res.end(page);
})
app.listen(1400, ()=>{
     console.log('-----------Server Started----------------------');
}); 