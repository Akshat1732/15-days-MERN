const res = document.querySelector('div');
console.log(res);
res.remove();

const res= document.querySelector('div');
const c = document.querySelector('p:nth-of-type(2)');
res.removeChild(c);

// node and element properties ---

function getInfo(e){
    console.log("Btn Clicked");
    const d= document.querySelector("div");
    const el = document.createElement("");
    el.innerText="my name is Akshat Sharma";s
    d.append("My name is Akshat Sharma");
    
    console.log("Btn Clicked");
    e.target.style.backgroundColor='green';
    e.target.style.color='red';
    // e.target.style.position:'relative';

}