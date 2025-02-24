let md = new MobileDetect(window.navigator.userAgent);

if(md.mobile() != null){
        console.log(123);
        
}

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


let searchWindow = document.querySelector('.search-list');
let searchInput = document.querySelector('.setting__search__input');

searchInput.addEventListener('input', ()=>{
    if(searchWindow.dataset.active == 'false'){
        gsap.to(searchWindow, {'opacity': '1', 'display': 'block'});

        searchWindow.setAttribute('data-active', 'true');
    }

    if(searchInput.value == ''){
        gsap.to(searchWindow, {'opacity': '0', 'display': 'none'});
        
        searchWindow.setAttribute('data-active', 'false');
    }
});

let basketWindow = document.querySelector('.setting__basket');
let basketBtn = document.querySelector('.setting__icon__img');

basketBtn.onclick = ()=>{
    console.log(123123);
    
    
    if(basketWindow.dataset.active == 'false'){

        basketWindow.setAttribute('data-active', 'true');

        gsap.to(basketWindow, {'opacity': '1', 'display': 'flex'});

    } else {
        
        basketWindow.setAttribute('data-active', 'false');

        gsap.to(basketWindow, {'opacity': '0', 'display': 'none'});
    }
};