export default function(res, pool, user){
    pool.query('UPDATE users SET firstName=?, lastName=?, login=?, password=? WHERE id=?', [req.body.firstName, req.body.lastName, req.body.login, req.body.password, user.id], (err)=> {if(err) return console.log(err)});
    
    return res.send('Информация изменена!');
}