let arrowLink = document.getElementById('js-offer-link');
let arrow = document.getElementById('js-offer-link__arrow');

arrowLink.onpointerover = ()=>{
    gsap.to(arrow, {x: '5'});
    gsap.to(arrowLink, {'cursor': 'pointer'});
}

arrowLink.onpointerout = ()=>{
    gsap.to(arrow, {x: '0'});
}

arrowLink.onclick = ()=> {
    window.location = "/404"
}

let sliderBtnSale = document.getElementById('slider-btn-sale');
let sliderBtnNews = document.getElementById('slider-btn-news');
let sliderNews = document.getElementById('js-slider-news');
let sliderSale = document.getElementById('js-slider-salse');

sliderBtnSale.style.color = 'white';
sliderBtnSale.style.background = 'rgba(128, 130, 133, 0.8)';

sliderNews.style.display = 'none';

function setActiveSlider(activeItem, otherItem, activeSlider, otherSlider){
    if(otherItem.dataset.active != 'true'){
        otherItem.setAttribute('data-active', 'true');
        activeItem.setAttribute('data-active', 'false');

        gsap.to(activeItem, {'background': 'white', 'color': 'black'});
        gsap.to(otherItem, {'background': 'rgba(128, 130, 133, 0.8)', 'color': 'white'});

        gsap.to(activeSlider, {'opacity': '0', 'display': 'none'});
        gsap.to(otherSlider, {'opacity': '1', 'display': 'block'});
    }
}

sliderBtnSale.onclick = ()=> setActiveSlider(sliderBtnNews, sliderBtnSale, sliderNews, sliderSale);
sliderBtnNews.onclick = ()=> setActiveSlider(sliderBtnSale, sliderBtnNews, sliderSale, sliderNews);

let productLists = document.querySelectorAll('.projects__list__item__text');

for (let i = 0; i < productLists.length; i++) {
    productLists[i].onpointerover = ()=> gsap.to(productLists[i], {'background': 'rgba(211, 170, 108, 0.8)'})
    productLists[i].onpointerout = ()=> gsap.to(productLists[i], {'background': 'rgba(217, 217, 217, 0.7)'})
}

let btnContact = document.getElementById('contact-btn');
let formContact = document.forms.contact;
btnContact.onclick = async ()=>{

    let messError = 'Укажите:';
    let validErr = false;

    for (let i = 0; i < formContact.length - 2; i++) {
        if(formContact[i].value == ''){
            messError += ` ${formContact[i].data.mes},`
            validErr = true;
        }        
    }

    if(validErr){
        alert(`Заполнены не все поля. ${messError}`);
    } else {
       alert(`Письмо отправлено!`);
    }
}