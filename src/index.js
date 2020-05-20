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
    captureForm1 = document.querySelectorAll('form.capture-form')[0],
    captureForm2 = document.querySelectorAll('form.capture-form')[1],
    captureForm4 = document.querySelectorAll('form.capture-form')[3],
    captureForm5 = document.querySelectorAll('form.capture-form')[4],
    directorForm = document.querySelector('.director-form');
    sendForm(mainForm);
    sendForm(captureForm1);
    sendForm(directorForm);
    sendForm(captureForm2);
    sendForm(captureForm4);
    sendForm(captureForm5);



