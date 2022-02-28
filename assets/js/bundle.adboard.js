document.addEventListener('DOMContentLoaded', function () {

    const switchBtn = document.querySelector('.input-output-switch__js');

    const switchBtnClick = () => {
        switchBtn.addEventListener('click', function () {
            this.classList.toggle('output');
            this.querySelector('.switch-btn').classList.toggle('switch-on');
        });
    }

    switchBtnClick();
});