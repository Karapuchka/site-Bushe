import express, { query } from 'express';
import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';

import mainPage from './app-modules/get-main.js';
import addUser from './app-modules/addUser.js';
import loginUser from './app-modules/loginUser.js';
import product from './app-modules/product.js';
import optProduct from './app-modules/opt-product.js';
import jobOperings from './app-modules/jobOperings.js';
import profile from './app-modules/profile.js';
import setProfile from './app-modules/setProfile.js';
import setAddress from './app-modules/setAddress.js';

let user = '';

const app = express();

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
    mainPage(res, pool);
});

app.get('/company', (_, res)=>{
    return res.render('about-company.hbs');
});

app.get('/product', (_, res)=>{
    product(res, pool);
});

app.get('/opt-product', (_,res)=>{
    optProduct(res, pool);
});

app.get('/jobOperings', (_,res)=>{
    jobOperings(res, pool);
});

app.get('/profile', (_,res)=>{
    profile(res, pool, user);
});

app.get('/login', (_,res)=>{
    return res.render('login.hbs');
});

app.get('/reg', (_,res)=>{
    return res.render('reg.hbs');
});

app.post('/adduser', urlcodedParsers, (req,res)=>{
    if(!req.body) return res.sendStatus(400);
    addUser(req, res);
});

app.post('/login-user', urlcodedParsers, (req, res)=>{
    if(!req.body) return res.statusCode(400);

    loginUser(req, pool, user);
});

app.post('/set-profile', JSONParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400);

    setProfile(res, pool, user);
});

app.post('/set-adress', JSONParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400);

    setAddress(res, pool, user);
});

app.listen(3000, ()=>{
    return console.log('Server ative. URL: http://localhost:3000/');
});

export default app;