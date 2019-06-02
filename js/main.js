const loader = document.querySelector('.loader');
const loaderText = document.querySelector('.loaderText');
const main = document.querySelector('.main');

function init() {

    setTimeout(() => {

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 25);

        loader.style.opacity = 0;
        loader.style.display = none;



    }, 4500);
}

init();