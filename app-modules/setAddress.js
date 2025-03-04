export default function(res, pool, user){
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
}