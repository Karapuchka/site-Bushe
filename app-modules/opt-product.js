export default function(res, pool){
    pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
        if(errFood) return console.log(errFood);

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
}