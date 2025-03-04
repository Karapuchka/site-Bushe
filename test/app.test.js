import supertest from "supertest";

import mainPage from './app-modules/get-main.js';
import addUser from './app-modules/addUser.js';
import loginUser from './app-modules/loginUser.js';
import product from './app-modules/product.js';
import optProduct from './app-modules/opt-product.js';
import jobOperings from './app-modules/jobOperings.js';
import profile from './app-modules/profile.js';
import setProfile from './app-modules/setProfile.js';
import setAddress from './app-modules/setAddress.js';

it("Проверка маршрута /addUser", (done)=>{
    supertest(addUser)
        .get('/addUser')
        .expect(true)
        .end(done)
});

it("Проверка маршрута /", (done)=>{
    supertest(mainPage)
        .get('/')
        .expect(true)
        .end(done)
});

it("Проверка маршрута /product", (done)=>{
    supertest(product)
        .get('/product')
        .expect(true)
        .end(done)
});

it("Проверка маршрута /opt-product", (done)=>{
    supertest(optProduct)
        .get('/opt-product')
        .expect(true)
        .end(done)
});

it("Проверка маршрута /jobOperings", (done)=>{
    supertest(jobOperings)
        .get('/jobOperings')
        .expect(true)
        .end(done)
});

it("Проверка маршрута /login-user", (done)=>{
    supertest(loginUser)
        .get('/login-user')
        .expect(true)
        .end(done)
});

it("Проверка маршрута /set-profile", (done)=>{
    supertest(setProfile)
        .get('/set-profile')
        .expect(true)
        .end(done)
});

it("Проверка маршрута /set-adress", (done)=>{
    supertest(setAddress)
        .get('/set-adress')
        .expect(true)
        .end(done)
});

it("Проверка маршрута /profile", (done)=>{
    supertest(profile)
        .get('/profile')
        .expect(true)
        .end(done)
});