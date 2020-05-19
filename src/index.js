'use strict';
const callBtn = document.querySelector('.call-btn'),
    popup = document.querySelector('.popup-call'),
    checkBtn = document.querySelector('.check-btn'),
    popupCheck = document.querySelector('.popup-check'),
    consultationBtn = document.querySelector('.consultation-btn'),
    popupConsultation = document.querySelector('.popup-consultation');

import popUp from './modules/popUp';
import popUpDiscount from './modules/popUpDiscount';
import btnMore from './modules/btnMore';
import accordion from './modules/accordion';
import sendForm from './modules/sendForm';
import calc from './modules/calc';

popUp(callBtn, popup);

popUp(checkBtn, popupCheck);

popUp(consultationBtn, popupConsultation);

popUpDiscount();

btnMore();
accordion();
calc();

const mainForm = document.querySelector('.main-form'),
    captureForm = document.querySelector('.capture-form'),
    directorForm = document.querySelector('.director-form'),
    forms = document.querySelectorAll('form');

forms.forEach((el) => {
    sendForm(el);
});
