let btnContact = document.getElementById('contact-btn');
let formContact = document.forms.contact;
btnContact.onclick = ()=>{

    let messError = 'Укажите:';
    let validErr = false;

    for (let i = 0; i < formContact.length - 1; i++) {
        if(formContact[i].value == ''){
            messError += ` ${formContact[i].data.mes},`
            validErr = true;
        }        
    }

    if(validErr){
        alert(`Заполнены не все поля. ${messError}`);
    } else {
       alert(`Заявка отправлена!`);
    }
}