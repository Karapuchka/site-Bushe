export default function(res, pool){
    pool.query('SELECT * FROM foodStuff', (errFood, dataFood)=>{
        if(errFood) return console.log(errFood);

        let listSearch = [];
        
        for (let i = 0; i < dataFood.length; i++) {
            listSearch.push({
                'title': dataFood[i].title,
            });   
        };

        pool.query('SELECT * FROM jobOperings', (errjobOperings, datajobOperings)=>{
            if(errjobOperings) return console.log(errjobOperings);

            let listJob = [];

            for (let i = 0; i < datajobOperings.length; i++) {
                let sublist = datajobOperings[i].description.split(';');
                let age;

                if (datajobOperings[i].age == '0') {
                    age = 'без опыта';
                } else if(datajobOperings[i].age == '1') {
                    age = 'до года';
                } else if(datajobOperings[i].age == '2') {
                    age = 'от 1 года';
                } else {
                    age = 'более 2 лет';
                }

                let type = (datajobOperings[i].type == 'true') ? 'полная' : 'частичная';

                let info = [datajobOperings[i].direction, age, type];
                listJob.push({
                    'title': datajobOperings[i].title,
                    'job-sublist': sublist,
                    'job-info': info,
                    'price': datajobOperings[i].money,
                });
            };

            return res.render('jobOperings.hbs', {
                'search-list': listSearch,
                'list-job': listJob,
            });
        });
    });
}