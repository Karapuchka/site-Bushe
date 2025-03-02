const formLog = document.forms.formLog;

formLog.elements.btnLog.onclick = (e)=>{

    let valid = true;

    for (let i = 0; i < formLog.length; i++) {
        if(formLog[i].value == '' && formLog[i].name != 'btnLog'){
            formLog[i].style.borderBottom = '2px solid red';
            valid = false;    
        }      
    }

    if(!valid){
        e.preventDefault();
    }
}

formLog.onclick= (e)=>{
    if(e.target.style.borderBottom == '2px solid red') return e.target.style.borderBottom = '1px solid rgb(175, 175, 175)';
}