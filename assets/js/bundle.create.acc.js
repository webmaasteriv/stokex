const numLatinChars = document.querySelectorAll('.nums-latin-chars');
const passSymbols = document.querySelectorAll('.pass-field');
const numsOnlySymbols = document.querySelectorAll('.nums-only');

const numLatCheck = () => {
    numLatinChars.forEach(function (field) {

        field.addEventListener('input', function () {
            if (field.value != '') {
                this.value = this.value.replace(/[^-\w@.]/g, '');
            }
        });

        field.addEventListener('focusin', function () {
            if (field.value != '') {
                this.value = this.value.replace(/[^-\w@.]/g, '');
            }
        });
    });
}

const passCheck = () => {
    passSymbols.forEach(function (field) {

        field.addEventListener('input', function () {
            if (field.value != '') {
                this.value = this.value.replace(/[^-\w~!@#\$%\^&\*_\+=`|\\\(\)\{\}\[\]:;"'<>,\.\?\/]/g, '');
            }
        });

        field.addEventListener('focusin', function () {
            if (field.value != '') {
                this.value = this.value.replace(/[^-\w~!@#\$%\^&\*_\+=`|\\\(\)\{\}\[\]:;"'<>,\.\?\/]/g, '');
            }
        });
    });
}

const numsOnlyCheck = () => {
    numsOnlySymbols.forEach(function (field) {

        field.addEventListener('input', function () {
            if (field.value != '') {
                this.value = this.value.replace(/[^\d]/g, '');
            }
        });

        field.addEventListener('focusin', function () {
            if (field.value != '') {
                this.value = this.value.replace(/[^\d]/g, '');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    numLatCheck();
    passCheck();
    numsOnlyCheck();
});