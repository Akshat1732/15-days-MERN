const firstNameChange = (e) =>{
    console.log('firstName');
    console.log(e)

}
const submitForm=(e)=>{
    console.log(e);
    e.preventDefault();

}
function submitForm(e){
    e.preventDefault();
    const t=e.target;
    for(let i=0;i<t.length;i++){
        const ty=t[i].type;
        const vl = t[i].value;
        console.log(ty,vl);
        if(ty=='checkbox'){
            console.log(t[i].checked)
        }
    }
    }

    function submitForm(e){
        e.preventDefault();
        const t=e.target;
        const res ={
            hobbies:[]
        };
        
        for(let i=0;i<t.length;i++){
            const ty=t[i].type;
            const vl = t[i].value;
            const nm = t[i].name;
            console.log(ty,vl);
            if(ty!='submit'){
                if(ty=='checkbox'&& t[i].checked){
                    res.hobbies.push(vl);
                }
                if(ty!='checkbox'){
                    
                    res[nm]= vl;
                }
                // console.log(t[i].checked)
            }
        }
        console.log(res);
        }