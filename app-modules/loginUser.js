import simpleSearch from '../app-modules/simple-search.js';

export default function(res, pool, user){
    pool.query('SELECT * FROM users', (err, data)=>{

        user = simpleSearch(data, 'login', req.body.login)

        if(!user) return res.render('login.hbs', {errorMessange: 'Пользователь не найден!'});

        if(user && user.password != req.body.password) return res.render('index.hbs', {errorMessange: 'Пароль введён неверно!'});

        res.redirect('/profile');

        for (let i = 0; i < data.length; i++) {
            if(data[i].login == req.body.login){
                return user = data[i];
            }            
        }      
    });
}