if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    document.addEventListener('DOMContentLoaded', function () {
        const blurred = document.querySelector('.blured_wrapper');
        const navbarToggler = document.querySelector('.navbar-toggler');

        const blurBg = () => {
            navbarToggler.addEventListener('click', () => {
                blurred.classList.toggle('blur');
            })
        }

        blurBg();
    });
}