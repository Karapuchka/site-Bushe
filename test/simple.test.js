import simpleSearch from "../app-modules/simple-search.js";

it('Проверка функции простого поиска', ()=>{

    let data = {
        'firstName': 'Семёнов',
        'lastName': 'Слава',
        'login': 'slava123',
        'password': '123',
        'role': 'admin',
    }
    
    const result = simpleSearch(data, 'login', 'slava123');
    
    if(result != false){
        throw new Error(`Сортировка не выполнена!`);
    } 
});