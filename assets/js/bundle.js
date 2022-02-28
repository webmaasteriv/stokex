document.addEventListener('DOMContentLoaded', function () {

    const currencySlider = new Splide('.splide_curr-slider', {
        type: 'loop',
        perPage: 4,
        breakpoints: {
            992: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        },
        gap: '30px',
        arrowPath: 'M16.5,27c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6.7,6.7l-6.7,6.7C17,26.9,16.8,27,16.5,27z',
    });

    const reviewsSlider = new Splide('.splide__reviews-slider', {
        type: 'loop',
        perPage: 1,
        arrowPath: 'M16.5,27c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6.7,6.7l-6.7,6.7C17,26.9,16.8,27,16.5,27z',
        gap: '100px',
    });

    currencySlider.mount();
    reviewsSlider.mount();

});