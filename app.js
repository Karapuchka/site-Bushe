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
    res.render('index.hbs');
});

app.listen(3000, ()=>{
    return console.log('Server ative. URL: http://localhost:3000/');
});