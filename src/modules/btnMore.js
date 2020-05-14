const btnMore = () => {
    const button = document.querySelector('.add-sentence-btn'),
        col = document.querySelectorAll('.hidden'),
        visible = document.querySelector('.visible-sm-block');

    button.addEventListener('click', ()=> {

        //переопределяет стиль с !important
        visible.style.setProperty('display', 'block', 'important');
        col.forEach((elem) => {
            elem.style.setProperty('display', 'block', 'important');
        });
        
        button.style.display = 'none';
    });
};

export default btnMore;