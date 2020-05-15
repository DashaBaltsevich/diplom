const popUp = (btn, pop) => {
        btn.addEventListener('click', () => {
            event.preventDefault();
            pop.style.opacity = 0;
                let count = 0;
                count = +0.01;
            let time = setInterval(()=> {
                pop.style.display = 'block';
                pop.style.opacity = +pop.style.opacity + count;
                if (pop.style.opacity >= 1) {
                    clearInterval(time);
                }
                }, 10);       
        });
    pop.addEventListener('click', ()=> {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            pop.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                pop.style.display = 'none';
            }
        }
    });

};

export default popUp;