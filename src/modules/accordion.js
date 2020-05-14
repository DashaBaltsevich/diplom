
const accordion = () => {
    const panelGroup = document.getElementById('accordion-two'),
        collapse = panelGroup.querySelectorAll('[data-toggle = "collapse"]'),
        text = panelGroup.querySelectorAll('.panel-collapse.collapse');


        //хочу добавить анимацию, плавный акк

    collapse.forEach((e, index) => {
        e.addEventListener('click', (event)=> {
            event.preventDefault(); 
            if (text[index].style.display === 'block') {
                text[index].style.display = 'none';
            } else {
                text.forEach((element) => {
                    console.log(text[index]);
                    console.log(element);
                    if (element === text[index]){
                        element.style.display = 'block';
                        element.style.maxHeight = element.scrollHeight + "px";
                    } else {
                        element.style.display = 'none';
                    }
                });
            }
        });
    });









};
export default accordion;








