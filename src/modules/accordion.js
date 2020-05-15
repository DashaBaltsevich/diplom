const accordion = () => {
    const panelGroup = document.getElementById('accordion-two'),
        text = panelGroup.querySelectorAll('.panel-collapse.collapse'),
        panel = panelGroup.querySelectorAll('.panel-default');

    panelGroup.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.closest('.panel-default')) {
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
    //хочу добавить анимацию, плавный акк

    // collapse.forEach((e, index) => {
    //     e.addEventListener('click', (event)=> {
    //         event.preventDefault(); 
    //         let target = event.target;
    //         console.log(target);
    //         if (text[index].style.display === 'block' && target.closest('.panel-heading')) {
    //             text[index].style.display = 'none';
    //         } else {
    //             text.forEach((element) => {
    //                 // console.log(text[index]);
    //                 // console.log(element);
    //                 if (element === text[index]){
    //                     element.style.display = 'block';
    //                     element.style.maxHeight = element.scrollHeight + "px";
    //                 } else {
    //                     element.style.display = 'none';
    //                 }
    //             });
    //         }
    //     });
    // });


};
export default accordion;