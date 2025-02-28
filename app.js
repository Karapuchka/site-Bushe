import express, { query } from 'express';
import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';

const app = express();

let user; //Инфомрация о пользователе

//Настройка подключения к бд
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 3000,
    user: 'root',
    database: 'sweetStore',
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

        let arr = [];

        for (let i = 0; i < dataFood.length; i++) {
            arr.push({
                'title': dataFood[i].title,
            });            
        }
        return res.render('index.hbs', {
            'search-list': arr,
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

                listSearch.push({
                    'title': dataFood[i].title,
                });   
            };
        };

        return res.render('index.hbs', {
            'search-list': listSearch,
            'productFoods': listFoods,
        });
    });
});

app.listen(3000, ()=>{
    return console.log('Server ative. URL: http://localhost:3000/');
});