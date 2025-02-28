let listMenu = document.querySelector('.product-menu');
let listFoods = document.querySelector('.product-list__main');

listMenu.children[0].style.color = '#0E0E0E';

let titleProduct = document.querySelector('.js-product-title');

let allList = [];

for (let i = 0; i < listFoods.children.length; i++) {
    allList.push({
        'title': `${listFoods.children[i].children[1].children[0].innerText}`,
        'icon': `${listFoods.children[i].children[0].children[0].getAttribute('src')}`,
        'price': `${listFoods.children[i].children[1].children[1].children[0].innerText}`,
        'type': `${listFoods.children[i].dataset.type}`,
    });
}

function createItemFood(title, icon, price, type, win){
    let li = document.createElement('li');
    li.classList.add('product-list__main__item');
    li.setAttribute('data-type', type);

    let divImg = document.createElement('div');
    divImg.classList.add('product-list__main__item__img');

    let img = document.createElement('img');
    img.classList.add('product-list__main__item__img__icon');
    img.setAttribute('src', icon);

    let divInfo = document.createElement('div');
    divInfo.classList.add('product-list__main__item__info');

    let h4InfoTitle = document.createElement('h4');
    h4InfoTitle.classList.add('product-list__main__item__info__title');
    h4InfoTitle.innerText = title;

    let divInfoGroup = document.createElement('div');
    divInfoGroup.classList.add('product-list__main__item__info__group');

    let h4InfoPrice = document.createElement('h4');
    h4InfoPrice.classList.add('product-list__main__item__info__price');
    h4InfoPrice.innerText = price;

    let divInfoBtn = document.createElement('div');
    divInfoBtn.classList.add('product-list__main__item__info__btn');
    divInfoBtn.innerText = 'В корзину';

    divInfoGroup.appendChild(h4InfoPrice);
    divInfoGroup.appendChild(divInfoBtn);

    divInfo.appendChild(h4InfoTitle);
    divInfo.appendChild(divInfoGroup);

    divImg.appendChild(img);

    li.appendChild(divImg);
    li.appendChild(divInfo);

    win.appendChild(li);
}

listMenu.onclick = (e)=>{
    if(e.target.classList.contains('product-menu__item')){

        for (let i = 0; i < listMenu.children.length; i++) {
            if(listMenu.children[i].getAttribute('data-active') == 'true'){
                listMenu.children[i].setAttribute('data-active', 'false');
            };            
        };

        gsap.to(e.target, {'color': '#75787C'});
        e.target.setAttribute('data-active', 'true');

        switch (e.target.id) {
            case "js-btn-all":
                listFoods.innerHTML = '';
                
                for (let j = 0; j < allList.length; j++) {
                    createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                };

                break;

            case "js-btn-brekfast":

                listFoods.innerHTML = '';
                
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'breakfast'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }

                break;

            case "js-btn-drink":

                listFoods.innerHTML = '';
                
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'drink'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;

            case "js-btn-cake":

                listFoods.innerHTML = '';
                    
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'cake'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;

            case "js-btn-sweet":

                listFoods.innerHTML = '';
                        
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'sweet'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
            
                break;
        
            case "js-btn-eclair":

                listFoods.innerHTML = '';
                        
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'eclair'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;

            case "js-btn-puff":
    
                listFoods.innerHTML = '';
                            
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'puff-pastry'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;

            case "js-btn-bread":

                listFoods.innerHTML = '';
                            
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'bread'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;

            case "js-btn-sandwiches":

                listFoods.innerHTML = '';
                            
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'sandwich'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;
                
            case "js-btn-soup":

                listFoods.innerHTML = '';
                                
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'soup'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;            
            
            case "js-btn-hot-salad":

                listFoods.innerHTML = '';
                                    
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'pasta-adn-salat'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;           
            
            case "js-btn-clothes":

                listFoods.innerHTML = '';
                                    
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'clothes'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;

            case "js-btn-set":

                listFoods.innerHTML = '';
                                    
                for (let j = 0; j < allList.length; j++) {
                    if(allList[j].type == 'sets'){
                        createItemFood(allList[j].title, allList[j].icon, allList[j].price, allList[j].type, listFoods);              
                    }                    
                }
                
                break;
        };
    };
};

let filterBtnType = document.getElementById('filter-title');
let filterBtnSort = document.getElementById('filter-sort');

let currentList = [];

filterBtnSort.onclick = ()=>{
    
    if(filterBtnSort.dataset.sort == 'big'){
        currentList = [];

        for (let i = 0; i < listFoods.children.length; i++) {
            currentList.push({
                'title': `${listFoods.children[i].children[1].children[0].innerText}`,
                'icon': `${listFoods.children[i].children[0].children[0].getAttribute('src')}`,
                'price': `${listFoods.children[i].children[1].children[1].children[0].innerText}`,
                'type': `${listFoods.children[i].dataset.type}`,
            });
        }

        listFoods.innerHTML = '';

        if(filterBtnType.value == "price"){

            currentList.sort((a, b) => +`${b.price[0]}${b.price[1]}${b.price[2]}`- +`${a.price[0]}${a.price[1]}${a.price[2]}`);
            
            for (let j = 0; j < currentList.length; j++) {
                createItemFood(currentList[j].title, currentList[j].icon, currentList[j].price, currentList[j].type, listFoods);                   
            }

        } else {

            currentList.sort((a, b) => a.title.localeCompare(b.title));;
            
            for (let j = 0; j < currentList.length; j++) {
                createItemFood(currentList[j].title, currentList[j].icon, currentList[j].price, currentList[j].type, listFoods);                   
            }
        }

        filterBtnSort.dataset.sort = 'little';

    } else {
        currentList = [];
        for (let i = 0; i < listFoods.children.length; i++) {
            currentList.push({
                'title': `${listFoods.children[i].children[1].children[0].innerText}`,
                'icon': `${listFoods.children[i].children[0].children[0].getAttribute('src')}`,
                'price': `${listFoods.children[i].children[1].children[1].children[0].innerText}`,
                'type': `${listFoods.children[i].dataset.type}`,
            });
        }

        listFoods.innerHTML = '';

        if(filterBtnType.value == "price"){
        
            currentList.sort((a, b) => a.localeCompare(b));
            
            for (let j = 0; j < currentList.length; j++) {
                createItemFood(currentList[j].title, currentList[j].icon, currentList[j].price, currentList[j].type, listFoods);                      
            }
        } else {
            currentList.sort((a, b) => b.title.localeCompare(a.title));;
            
            for (let j = 0; j < currentList.length; j++) {
                createItemFood(currentList[j].title, currentList[j].icon, currentList[j].price, currentList[j].type, listFoods);                   
            }
        }

        filterBtnSort.dataset.sort = 'big';
    }
};