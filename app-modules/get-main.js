export default function(res, pool){
    pool.query(`SELECT * FROM foodStuff`, (errFood, dataFood)=> {
        if(errFood) return console.log(errFood);

        let searchFoodList = [];
        let saleFoodList = [];

        for (let i = 0; i < dataFood.length; i++) {
            searchFoodList.push({
                'title': dataFood[i].title,
            });            
                
            if(+dataFood[i].sale != 0){
                saleFoodList.push({
                    'icon': dataFood[i].img,
                    'title': dataFood[i].title,
                    'sale': dataFood[i].sale,
                });
            };
        };

        
        return res.render('index.hbs', {
            'search-list': searchFoodList,
            'slider-salve': saleFoodList,
        });
    });
}