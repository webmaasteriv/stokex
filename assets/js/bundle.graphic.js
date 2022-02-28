document.addEventListener('DOMContentLoaded', function () {

    const tableRows = document.querySelectorAll('.info-row .bg');

    const fillRow = () => {
        tableRows.forEach(function (row) {
            let rWidth = row.dataset.width;
            row.style.width = rWidth + '%';
        });
    }

    fillRow();

});