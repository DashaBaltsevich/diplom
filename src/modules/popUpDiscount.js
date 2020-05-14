const popUpDiscount = () => {
    const discountBtn = document.querySelectorAll('.discount-btn'),
    popup = document.querySelector('.popup-discount');

    discountBtn.forEach((e) => {
        e.addEventListener('click', () => {
            popup.style.opacity = 0;
                let count = 0;
                count = +0.01;
            let time = setInterval(()=> {
                popup.style.display = 'block';
                popup.style.opacity = +popup.style.opacity + count;
                if (popup.style.opacity >= 1) {
                    clearInterval(time);
                }
                }, 10);       
        });
    });


    popup.addEventListener('click', ()=> {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });

};

export default popUpDiscount;