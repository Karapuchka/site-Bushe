export default function(res, pool){
    pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
        if(errFood) return console.log(errFood);

        let listFoods = [], listSearch = [];
        let countFoods = dataFood.length;
        
        for (let i = 0; i < dataFood.length; i++) {
            listFoods.push({
                'title': dataFood[i].title,
                'icon': dataFood[i].img,
                'price': dataFood[i].cost,
                'type': dataFood[i].type,
            });

            listSearch.push({
                'title': dataFood[i].title,
            });        
        };

        return res.render('product.hbs', {
            'search-list': listSearch,
            'countFoods': countFoods,
            'productFoods': listFoods,
        });
    });
}