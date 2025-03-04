import simpleSearch from '../app-modules/simple-search.js';

export default function(res, pool){
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

    return true;
}