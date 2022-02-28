document.addEventListener('DOMContentLoaded', function () {

    const dropDown = document.querySelector('.drop_down_menu__js');

    const showDropItems = () => {
        dropDown.addEventListener('click', function () {
            this.querySelectorAll('.item').forEach(element => {
                element.classList.toggle('show');
            });
        })
    }

    showDropItems();

});