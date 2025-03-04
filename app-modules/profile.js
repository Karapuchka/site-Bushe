export default function(res, pool, user){
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
}