const sendForm = (form) => {
    const errorMessage = 'Ошибка',
        loadMessage = 'Идет отправка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        inputQuestion = document.querySelector('[name = "user_quest"]');


    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    statusMessage.style.color = "#000000";

    form.addEventListener('submit', (event) => {
        //чтобы страница не перезагружалась
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        
        const formData = new FormData(form);

        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        if (inputQuestion.value){
            body.inputQuestion = inputQuestion.value;
        }

        inputQuestion.value = '';

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
    
        };

        postData(body).then((response) => {
            console.log(response);
            statusMessage.textContent = successMessage;
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 5000);
            const inputs = form.querySelectorAll('input');
        inputs.forEach((elem) => {
            elem.value = '';
        });
            if (response.status !== 200) {
                throw new Error ('status network not 200');
            }
        }).catch(error => {
            statusMessage.textContent = errorMessage;
            console.error(error);
        });

        


    });

        //ввод цифр и +

        const phoneUser = document.querySelectorAll('.phone-user'),
            userName = document.querySelectorAll('[name = "user_name"]');

        phoneUser.forEach(function (e) {
                e.addEventListener('input', function (e) {
                    e.target.value = e.target.value.replace(/[^\+\d]/gi, '');
                });
            
        });

        //ввод кириллицы

        userName.forEach(function (e) {
                e.addEventListener('input', function (e) {
                    e.target.value = e.target.value.replace(/[^а-яё]/ig,'');
                });
            
        }); 

    

        

};

export default sendForm;