
const accMenuButtons = document.querySelectorAll('.accordion-menu button');
const accMenuCards = document.querySelectorAll('.accordion-menu .card');

const clickAccMenuBut = () => {
    accMenuButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (!this.closest('.card').classList.contains('show')) {
                accMenuCards.forEach(function (card) {
                    card.classList.remove('show');
                })
            }

            this.closest('.card').classList.toggle('show');
        })
    });
};

clickAccMenuBut();