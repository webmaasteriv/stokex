
const setSliderLabels = (range_input) => {
    range_input.previousElementSibling.innerHTML = range_input.value;

    let half_thumb_width = 20 / 2;

    let half_label_width = range_input.previousElementSibling.offsetWidth / 2;

    let slider_width = range_input.offsetWidth;
    let center_position = slider_width / 2;

    let percent_of_range = range_input.value / (range_input.max - range_input.min);

    if (isNaN(percent_of_range)) {
        percent_of_range = 0;
    }

    let value_px_position = percent_of_range * slider_width;
    let dist_from_center = value_px_position - center_position;
    let percent_dist_from_center = dist_from_center / center_position;

    let offset = percent_dist_from_center * half_thumb_width;

    let final_label_position = value_px_position - half_label_width - offset;

    range_input.previousElementSibling.style.left = final_label_position + "px";
    range_input.previousElementSibling.previousElementSibling.style.width = final_label_position + 12 + 'px';
}

const sliderCounter = () => {
    const slider = document.getElementById("siderRange");

    slider.oninput = function () {
        setSliderLabels(slider);
    }

    setSliderLabels(slider);
}

window.addEventListener('resize', () => {
    sliderCounter();
});

const infoTooltip = () => {
    let tooltips = document.querySelectorAll('label.info');

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('click', function () {
            console.log('show-tooltip');
            this.classList.toggle('show-tooltip');
        })
    });
}

const numDotsFields = document.querySelectorAll('.nums-and-dots');

const numsDotsCheck = () => {
    numDotsFields.forEach(function (field) {

        field.addEventListener('input', function () {
            if (field.value != '') {
                this.value = this.value.replace(/[^\d.]/g, '');
            }
        });

        field.addEventListener('focusin', function () {
            if (field.value != '') {
                this.value = this.value.replace(/[^\d.]/g, '');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    sliderCounter();
    infoTooltip();
    numsDotsCheck();
});