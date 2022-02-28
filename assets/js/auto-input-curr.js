document.addEventListener('DOMContentLoaded', function () {

    const converterFields = document.querySelectorAll('.curr-converter__form .curr_input');

    const autoAddingCurr = () => {
        converterFields.forEach(function (field) {
            let curr = field.dataset.curr.toUpperCase();

            if (field.value != '') {
                field.value = `${field.value}  ${curr}`;
            }

            field.addEventListener('input', function () {
                if (field.value != '') {
                    this.value = this.value.replace(/[^\d.]/g, '');
                }
            });

            field.addEventListener('focusout', function () {
                if (field.value != '') {
                    this.value = `${this.value}  ${curr}`;
                }
            });

            field.addEventListener('focusin', function () {
                if (field.value != '') {
                    this.value = this.value.replace(/[^\d.]/g, '');
                }
            });
        });
    }

    autoAddingCurr();

});