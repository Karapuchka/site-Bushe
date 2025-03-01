let md = new MobileDetect(window.navigator.userAgent);

let burgerBtn = document.getElementById('js-burger-btns');
let menuBurger = document.querySelector('.menu-burger');

burgerBtn.onclick = ()=>{
    if(burgerBtn.dataset.active == 'false'){

        gsap.to(burgerBtn.children[0], {'rotate': '45', 'y': '4'});
        gsap.to(burgerBtn.children[1], {'rotate': '-45', 'y': '-4'});
        gsap.to(burgerBtn.children[2], {'opacity': '0', 'y': '-10'});

        burgerBtn.setAttribute('data-active', 'true');

        gsap.to(menuBurger, {'opacity': '1', 'display': 'flex'});

    } else {

        gsap.to(burgerBtn.children[0], {'rotate': '0', 'y': '0'});
        gsap.to(burgerBtn.children[1], {'rotate': '0', 'y': '0'});
        gsap.to(burgerBtn.children[2], {'opacity': '1', 'y': '0'});
        
        burgerBtn.setAttribute('data-active', 'false');

        gsap.to(menuBurger, {'opacity': '0', 'display': 'none'});
    }
};


let searchWindowD = document.getElementById('js-search-win-d');
let searchInputD = document.getElementById('js-search-input-d');

let searchWindowM = document.getElementById('js-search-win-m');
let searchInputM = document.getElementById('js-search-input-m');

let allFoodsListSearch = [];


if(md.mobile() != null){
    for (let i = 0; i < searchWindowD.children.length; i++) {
        allFoodsListSearch.push(searchWindowD.children[i].innerText)
    }
} else {

    for (let i = 0; i < searchWindowM.children.length; i++) {
        allFoodsListSearch.push(searchWindowM.children[i].innerText)
    }
}

function openWinSearch(input, win){
    input.addEventListener('input', ()=>{
        if(win.dataset.active == 'false'){
            gsap.to(win, {'opacity': '1', 'display': 'block'});
    
            win.setAttribute('data-active', 'true');
        }
    
        if(input.value == ''){
            gsap.to(win, {'opacity': '0', 'display': 'none'});
            
            win.setAttribute('data-active', 'false');
        }

        win.innerHTML = '';
        allFoodsListSearch.forEach(item => {
        if (item.toLowerCase().includes(input.value)) {
            const li = document.createElement('li');
            li.textContent = item;
            li.classList.add('search-list__item');
            win.appendChild(li);
        }
    });
    });       
};

openWinSearch(searchInputD, searchWindowD);
openWinSearch(searchInputM, searchWindowM);


let basketWindowD = document.getElementById('js-backet-win-d');
let basketBtnD = document.getElementById('js-backet-btn-d');

let basketWindowM = document.getElementById('js-backet-win-m');
let basketBtnM = document.getElementById('js-backet-btn-m');

function openWinBasket(win){    
    
    if(win.dataset.active == 'false'){
    
        win.setAttribute('data-active', 'true');

        gsap.to(win, {'opacity': '1', 'display': 'block'});

    } else {
        
        win.setAttribute('data-active', 'false');

        gsap.to(win, {'opacity': '0', 'display': 'none'});
    };
};
basketBtnM.onclick = ()=>openWinBasket(basketWindowM);
basketBtnD.onclick = ()=>openWinBasket(basketWindowD);

let linksFooter = document.querySelector('.footer__links');

linksFooter.onclick = (e)=>{
    if(e.target.classList.contains('footer__links__item')){
         window.location = "/404";
    }
}

function addFoodBasket(food, win){
    win.innerHTML = '';

    const p = document.createElement('p');
    p.classList.add('search-list__item__text');
    p.innerText = food;

    const div = document.createElement('div');
    div.classList.add('search-list__item__del');

    const li = document.createElement('li');
    li.classList.add('search-list__item');
    li.appendChild(p);
    li.appendChild(div);
    
    win.appendChild(li);
}

let btnsAddFoodInBasket = document.querySelectorAll('.product-list__main__item__info__btn');

if(md.mobile() != null){
    for (let i = 0; i < btnsAddFoodInBasket.length; i++) {
        btnsAddFoodInBasket[i].onclick = ()=>{
            
            addFoodBasket(btnsAddFoodInBasket[i].dataset.food, basketWindowM);
        }    
    }
} else {

    for (let i = 0; i < btnsAddFoodInBasket.length; i++) {
            btnsAddFoodInBasket[i].onclick = ()=>{
            addFoodBasket(btnsAddFoodInBasket[i].dataset.food, basketWindowD);
        }    
    }
}