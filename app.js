import express, { query } from 'express';
import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';

const app = express();

let user = ''; //Инфомрация о пользователе

//Настройка подключения к бд
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 3000,
    user: 'root',
    database: 'sweet',
});

//Создание парсера
const urlcodedParsers = express.urlencoded({extended: false});

//JSON парсер
const JSONParser = express.json();

//Указание пути к файлом hbs
app.use(express.static(path.join(fs.realpathSync('.') + '/public')));
app.set('view engine', 'hbs');

app.get('/', (_, res)=>{

    pool.query(`SELECT * FROM foodStuff`, (errFood, dataFood)=> {
        if(errFood) return console.log(errFood);

        let searchFoodList = [];
        let saleFoodList = [];

        for (let i = 0; i < dataFood.length; i++) {
            searchFoodList.push({
                'title': dataFood[i].title,
            });            
                
            if(+dataFood[i].sale != 0){
                saleFoodList.push({
                    'icon': dataFood[i].img,
                    'title': dataFood[i].title,
                    'sale': dataFood[i].sale,
                });
            };
        };

        
        return res.render('index.hbs', {
            'search-list': searchFoodList,
            'slider-salve': saleFoodList,
        });
    });
});

app.get('/company', (_, res)=>{
    return res.render('about-company.hbs');
});

app.get('/product', (_, res)=>{
    pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
        if(errFood) return console.log(errFood);

        let listFoods = [], listSearch = [];
        let countFoods = dataFood.length;
        
        for (let i = 0; i < dataFood.length; i++) {
            listFoods.push({
                'title': dataFood[i].title,
                'icon': dataFood[i].img,
                'price': dataFood[i].cost,
                'type': dataFood[i].type,
            });

            listSearch.push({
                'title': dataFood[i].title,
            });        
        };

        return res.render('product.hbs', {
            'search-list': listSearch,
            'countFoods': countFoods,
            'productFoods': listFoods,
        });
    });
});

app.get('/opt-product', (_,res)=>{
    pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
        if(errFood) return console.log(errFood);
        let searchFoodList = [];

        let listFoods = [], listSearch = [];
        
        for (let i = 0; i < dataFood.length; i++) {
            if(dataFood[i].type == 'bread'){
                listFoods.push({
                    'title': dataFood[i].title,
                    'icon': dataFood[i].img,
                });

                listSearch.push({
                    'title': dataFood[i].title,
                });   
            };
        };

        return res.render('optProduct.hbs', {
            'search-list': listSearch,
            'productFoods': listFoods,
        });
    });
});

app.get('/product', (_, res)=>{
    pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
        if(errFood) return console.log(errFood);

        let listFoods, listSearch = [];
        let countFoods = dataFood.length;
        
        for (let i = 0; i < dataFood.length; i++) {
            listFoods.push({
                'title': dataFood[i].title,
                'icon': dataFood[i].img,
                'price': dataFood[i].cost,
            });

            listSearch.push({
                'title': dataFood[i].title,
            });        
        };

        return res.render('index.hbs', {
            'search-list': listSearch,
            'countFoods': countFoods,
            'productFoods': listFoods,
        });
    });
});

app.get('/opt-product', (_,res)=>{
    pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
        if(errFood) return console.log(errFood);

        let listFoods, listSearch = [];
        
        for (let i = 0; i < dataFood.length; i++) {
            if(dataFood[i].type == 'bread'){
                listFoods.push({
                    'title': dataFood[i].title,
                    'icon': dataFood[i].img,
                });
            };
            listSearch.push({
                'title': dataFood[i].title,
            });   
        };

        return res.render('index.hbs', {
            'search-list': listSearch,
            'productFoods': listFoods,
        });
    });
});

app.get('/jobOperings', (_,res)=>{
    pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
        if(errFood) return console.log(errFood);

        let listSearch = [];
        
        for (let i = 0; i < dataFood.length; i++) {
            listSearch.push({
                'title': dataFood[i].title,
            });   
        };

        pool.query('SELECT * FROM jobOperings', (errjobOperings, datajobOperings)=>{
            if(errjobOperings) return console.log(errjobOperings);

            let listJob = [];

            for (let i = 0; i < datajobOperings.length; i++) {
                let sublist = datajobOperings[i].description.split(';');
                let age;

                if (datajobOperings[i].age == '0') {
                    age = 'без опыта';
                } else if(datajobOperings[i].age == '1') {
                    age = 'до года';
                } else if(datajobOperings[i].age == '2') {
                    age = 'от 1 года';
                } else {
                    age = 'более 2 лет';
                }

                let type = (datajobOperings[i].type == 'true') ? 'полная' : 'частичная';

                let info = [datajobOperings[i].direction, age, type];
                listJob.push({
                    'title': datajobOperings[i].title,
                    'job-sublist': sublist,
                    'job-info': info,
                    'price': datajobOperings[i].money,
                });
            };

            return res.render('jobOperings.hbs', {
                'search-list': listSearch,
                'list-job': listJob,
            });
        });
    });
});

app.get('/profile', (_,res)=>{
    if(user == ''){
        return res.render('login.hbs');
    } else {
        pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
            if(errFood) return console.log(errFood);
    
            let listSearch = [];
            
            for (let i = 0; i < dataFood.length; i++) {
                listSearch.push({
                    'title': dataFood[i].title,
                });   
            };

            let arrUserAddress = user.addresses.split(',');
            let userAddress = [];

            for (let i = 0; i < arrUserAddress.length; i++) {
                userAddress.push({
                    'id': i,
                    'title': arrUserAddress[i],
                });           
            };

            pool.query('SELECT * FROM usersHistory', (errOrder, dataOrder)=>{
                if(errOrder) return console.log(errOrder);

                let story = [];

                for (let i = 0; i < dataOrder.length; i++) {
                    if(dataOrder[i].idUsers == user.id){
                        story.push({
                            'title': dataOrder[i].title,
                            'date': dataOrder[i].date,
                            'address': dataOrder[i].address,
                        });
                    };                   
                };

                userAddress = (userAddress[0].title != '') ? userAddress : '';
                
                return res.render('profile.hbs', {
                    'search-list': listSearch,
                    'user-firstname': user.firstName,
                    'user-lastname': user.lastName,
                    'user-login': user.login,
                    'user-password': user.password,
                    'list-address': userAddress,
                    'story': story,
                });
            });
        });
    } 
});

app.get('/login', (_,res)=>{
    return res.render('login.hbs');
});

app.get('/reg', (_,res)=>{
    return res.render('reg.hbs');
});

app.post('/adduser', urlcodedParsers, (req,res)=>{
    if(!req.body) return res.sendStatus(400);

    pool.query('SELECT * FROM users', (err, data)=>{
        if(err) return console.log(err);

        let user = simpleSearch(data, 'login', req.body.login);

        if(user) return res.render('registration.hbs',{errorMessange: 'Логин занят!'});
        else {
            pool.query('INSERT INTO users (login, password, firstName, lastName) VALUES (?,?,?,?)', [req.body.login, req.body.password, req.body.firstName, req.body.lastName], (err)=>{
                if(err) return console.log(err);

                res.redirect('/profile');
            })
        }
    });
});

app.post('/login-user', urlcodedParsers, (req, res)=>{
    if(!req.body) return res.statusCode(400);

    pool.query('SELECT * FROM users', (err, data)=>{

        user = simpleSearch(data, 'login', req.body.login)

        if(!user) return res.render('login.hbs', {errorMessange: 'Пользователь не найден!'});

        if(user && user.password != req.body.password) return res.render('index.hbs', {errorMessange: 'Пароль введён неверно!'});

        res.redirect('/profile');

        for (let i = 0; i < data.length; i++) {
            if(data[i].login == req.body.login){
                user = data[i];
            }            
        }      
    });
});

app.post('/set-profile', JSONParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400);

    pool.query('UPDATE users SET firstName=?, lastName=?, login=?, password=? WHERE id=?', [req.body.firstName, req.body.lastName, req.body.login, req.body.password, user.id], (err)=> {if(err) return console.log(err)});

    return res.send('Информация изменена!');
});

app.post('/set-adress', JSONParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400);

    pool.query('SELECT * FROM users', (errUs, dataUs)=>{
        if(errUs) return console.log(errUs);

        let liserAddress = '';

        for (let i = 0; i < dataUs.length; i++) {
            if(user.id == dataUs[i].id){
                liserAddress += dataUs[i].addresses;
            }            
        }

        if(liserAddress == ''){
            liserAddress += `${req.body.address}`;
        } else {
            liserAddress += `,${req.body.address}`;
        }

        pool.query('UPDATE users SET addresses=? WHERE id=?', [liserAddress, user.id], (err)=> {if(err) return console.log(err)});
        
        return res.send('Информация изменена!');
    });
});

app.listen(3000, ()=>{
    return console.log('Server ative. URL: http://localhost:3000/');
});

//Фунакция для простого поиска
function simpleSearch(arr, arg, target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][arg] === target) return arr[i];
    }

    return false;
}