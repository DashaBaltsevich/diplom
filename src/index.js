'use strict';
const callBtn = document.querySelector('.call-btn'),
    popup = document.querySelector('.popup-call'),
    checkBtn = document.querySelector('.check-btn'),
    popupCheck = document.querySelector('.popup-check'),
    popupDiscount = document.querySelector('.popup-discount'),
    consultationBtn = document.querySelector('.consultation-btn'),
    popupConsultation = document.querySelector('.popup-consultation');

import popUp from './modules/popUp';

popUp(callBtn, popup);
popUp(checkBtn, popupCheck);
popUp(consultationBtn, popupConsultation);

import popUpDiscount from './modules/popUpDiscount';

popUpDiscount();


import btnMore from './modules/btnMore';

btnMore();

import accordion from './modules/accordion';

accordion();

const mainForm = document.querySelector('.main-form'),
    captureForm = document.querySelector('.capture-form'),
    directorForm = document.querySelector('.director-form');

const forms = document.querySelectorAll('form');

console.log(forms);
    

import sendForm from './modules/sendForm';

forms.forEach((el) => {
    sendForm(el);
});

// sendForm(mainForm);
// sendForm(captureForm);
// sendForm(directorForm);