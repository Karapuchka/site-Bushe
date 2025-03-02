let curListJob = document.querySelector('.job-content__list-job');
let inputJobSeach = document.getElementById('search-job-input');
let allJobList = [];

for (let i = 0; i < curListJob.children.length; i++) {
    
    allJobList.push({
        'title': curListJob.children[i].children[0].children[0].innerText,
        'html': curListJob.children[i].innerHTML,
    });
}

function searchJob(input, win){
    input.addEventListener('input', ()=>{
        win.innerHTML = '';
        allJobList.forEach(item => {
        if (item.title.toLowerCase().includes(input.value)) {
            const li = document.createElement('li');
            li.textContent = item;
            li.classList.add('job-content__list-job__item');
            li.innerHTML = item.html;
            win.appendChild(li);
        }
    });
    });       
};

searchJob(inputJobSeach, curListJob);