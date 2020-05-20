const calc = (price = 10000) => {
    const panelGroup = document.getElementById('accordion'),
        text = panelGroup.querySelectorAll('.panel-collapse.collapse'),
        panel = panelGroup.querySelectorAll('.panel-default'),
        panelHeading = panelGroup.querySelectorAll('.panel-heading'),
        buttons = document.querySelectorAll('a.button.construct-btn'),
        //первый диаметр
        diametersList = document.querySelector('select.form-control.expand'),
        //первое количество колец
        cols = document.querySelectorAll('select.form-control.expand')[1],
        //второй диаметр
        diameter2 = document.querySelectorAll('select.form-control.expand')[2],
        //второе кол-во колец
        cols2 = document.querySelectorAll('select.form-control.expand')[3],
        calcResult = document.getElementById('calc-result'),
        inputCheckbox = document.querySelector('input.onoffswitch-checkbox'),
        checkBoxTwo = document.querySelector('#myonoffswitch-two'),
        titleText = document.querySelectorAll('.title-text')[1],
        selectBox3 = document.querySelectorAll('.select-box')[2],
        selectBox4 = document.querySelectorAll('.select-box')[3],
        btnCalc = document.querySelector('.button.construct-btn.call-btn');
        let resultSum = 10000, 
            diameterValue, 
            colValue, 
            diameter2Value, 
            col2Value,
            checkbox2, diameterValueNum, colValueNum, diameter2ValueNum, col2ValueNum;
        const inputDist = document.querySelector('.panel-body > input');
        const formDiscount = document.querySelector('.form-discount');
        formDiscount.setAttribute('novalidate', '');

    const clearInput = () => {
        document.querySelectorAll('input').forEach((item) => {
            item.value = '';
        });
    };

    panelGroup.addEventListener('change', (event) => {
        const target = event.target;
        if (target.matches('select') || target.matches('input') || target.matches('.onoffswitch-label')) {
            countSum();
        }
    });

    panelHeading.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            if (target.closest('.panel-heading')) {
                let now = target.closest('.panel-default');

                panel.forEach((el, index) => {
                    if (now === el) {
                        if (text[index].style.display === 'block') {
                            text[index].style.display = 'none';
                        } else {
                            text.forEach((element) => {
                                if (element === text[index]) {
                                    element.style.display = 'block';
                                    element.style.maxHeight = element.scrollHeight + "px";
                                } else {
                                    element.style.display = 'none';
                                }
                            });
                        }
                    }
                });
            }
        });
    });

    buttons.forEach((el, index) => {
        el.addEventListener('click', () => {
            const target = event.target;
            event.preventDefault();
            let now2 = target.closest('a.button.construct-btn');
            if (now2 === el) {
                if (text[index].style.display === 'block') {
                    text[index].style.display = 'none';
                    text[index + 1].style.display = 'block';
                } else {
                    text.forEach((element) => {
                        if (element === text[index]) {
                            element.style.display = 'block';
                            element.style.maxHeight = element.scrollHeight + "px";
                        } else {
                            element.style.display = 'none';
                        }
                    });
                }
            }
        });
    });

    checkBoxTwo.checked = false;


    const check = () => {
        if (inputCheckbox.checked === false) {
            inputCheckbox.removeAttribute('checked');
            inputCheckbox.setAttribute("unchecked", 'unchecked');
            titleText.style.display = 'block';
            selectBox3.style.display = 'block';
            selectBox4.style.display = 'block';
            price = 15000;
        } else if (inputCheckbox.checked === true) {
            inputCheckbox.removeAttribute('unchecked');
            inputCheckbox.setAttribute('checked', 'checked');
            titleText.style.display = 'none';
            selectBox3.style.display = 'none';
            selectBox4.style.display = 'none';
            price = 10000;
        }
        calcResult.placeholder = price;
        return price;
    };
    check();


    const countSum = () => {
        
         diameterValue = diametersList.options[diametersList.selectedIndex].value;
            colValue = cols.options[cols.selectedIndex].value;
            diameter2Value = diameter2.options[diameter2.selectedIndex].value;
            col2Value = cols2.options[cols2.selectedIndex].value;
            
            check();

        if (diameterValue === "1.4 метра") {
            diameterValueNum = 1;
        } else if (diameterValue === "2 метра") {
            diameterValueNum = 1.2;
        }

        if(colValue === "1 штука") {
            colValueNum = 1;
        } else if(colValue === "2 штуки") {
            colValueNum = 1.3;
        } if(colValue === "3 штуки") {
            colValueNum = 1.5;
        }

        if (diameter2Value === "1.4 метра") {
            diameter2ValueNum = 1;
        } else if (diameter2Value === "2 метра") {
            diameter2ValueNum = 1.2;
        }

        if(col2Value === "1 штука") {
            col2ValueNum = 1;
        } else if(col2Value === "2 штуки") {
            col2ValueNum = 1.3;
        } if(col2Value === "3 штуки") {
            col2ValueNum = 1.5;
        }

        

        if (checkBoxTwo.checked === false) {
            checkBoxTwo.removeAttribute('checked');
            checkBoxTwo.setAttribute("unchecked", 'unchecked');
        } else {
            checkBoxTwo.removeAttribute('unchecked');
            checkBoxTwo.setAttribute('checked', 'checked');
        }

        //однокамерный 
        if (inputCheckbox.hasAttribute('checked')) {
            resultSum = price * diameterValueNum * colValueNum;

            if (checkBoxTwo.hasAttribute('checked')) {
                resultSum += 1000;
            }
            //двухкамерный 
        } else if (inputCheckbox.hasAttribute('unchecked')) {
            resultSum = price * diameterValueNum * colValueNum * diameter2ValueNum * col2ValueNum;

            if (checkBoxTwo.hasAttribute('checked')) {
                resultSum += 2000;
            }
        }

        calcResult.placeholder = resultSum;

        
        return diameterValue, colValue, diameter2Value, col2Value;
    
    };


    btnCalc.addEventListener('click', () => {

        checkbox2 = checkBoxTwo.checked;
        
        const pop = document.querySelector('.popup-discount');
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

                const errorMessage = 'Ошибка',
                loadMessage = 'Идет отправка...',
                successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
            statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'font-size: 2rem;';
            statusMessage.style.color = "#000000";

            
        
            formDiscount.addEventListener('submit', (event) => {
                //чтобы страница не перезагружалась
                event.preventDefault();
                formDiscount.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(formDiscount);
                
        
                let body = {};
                body.resultSum = resultSum;
                body.diameterValueStr = diameterValue;
                body.colValueStr  = colValue;
                body.diameter2ValueStr = diameter2Value;
                body.col2ValueStr = col2Value;
                body.inputDist = inputDist.value;
                if(checkbox2 === true) {
                    body.checkbox2 = "Днище колодца в наличии";
                } else {
                    body.checkbox2 = "Днище колодца нет в наличии";
                }
                

                for(let val of formData.entries()) {
                        body[val[0]] = val[1];                   
                    }

        
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
                    statusMessage.textContent = successMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 5000);
                    const inputs = formDiscount.querySelectorAll('input');
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




    });




    
    


      
    

    



};

export default calc;