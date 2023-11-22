const questions = document.querySelectorAll('.shadow');
questions.forEach((que)=>{
    const button = que.querySelector('.btn');
    button.addEventListener('click', ()=>{
        questions.forEach((item)=>{
            if (item !== que) {
                item.classList.remove('show-text');
            }
        })
    que.classList.toggle('show-text');
    })
})
