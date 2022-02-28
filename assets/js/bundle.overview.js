document.addEventListener('DOMContentLoaded', function () {

    const switchBtn = document.querySelector('.input-output-switch__js');
    const inputOutputForms = document.querySelectorAll('.overview-details__form');

    const switchBtnClick = () => {
        switchBtn.addEventListener('click', function () {
            this.classList.toggle('output');
            this.querySelector('.switch-btn').classList.toggle('switch-on');

            inputOutputForms.forEach((form) => {
                form.classList.toggle('show');
            });
        });
    }

    const recAddress = document.getElementById('recAddress');
    const amountField = document.getElementById('amount');

    const fieldCheck = () => {
        recAddress.addEventListener('input', function () {
            if (recAddress.value != '') {
                this.value = this.value.replace(/[^\w]/g, '');
            }
        });

        recAddress.addEventListener('focusin', function () {
            if (recAddress.value != '') {
                this.value = this.value.replace(/[^\w]/g, '');
            }
        });

        amountField.addEventListener('input', function () {
            if (amountField.value != '') {
                this.value = this.value.replace(/[^\w]/g, '');
            }
        });

        amountField.addEventListener('focusin', function () {
            if (amountField.value != '') {
                this.value = this.value.replace(/[^\w]/g, '');
            }
        });
    }

    switchBtnClick();
    recAddressCheck();
});