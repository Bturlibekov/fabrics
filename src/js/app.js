import * as flsFunctions from "./modules/functions.js"
// import { Modal } from '../js/libs/modal.js'
import { Accordion } from '../js/libs/accordion.js'
import * as noUiSlider from 'nouislider'
import { classBodyMedia } from "./libs/classBodyWidth.js"
import Swiper, { Navigation, Pagination } from "swiper"
Swiper.use([Navigation, Pagination])


flsFunctions.isWebP()
classBodyMedia()
Accordion()

const introSlides = new Swiper('.intro__swiper', {
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: "custom",
        // renderBullet: function () {
        //   return `<span class="swiper-pagination-bullet"></span>`
        // }
    },
})

// let customFractionCurrent = document.querySelector('.fraction__custom-current')
// let customFractionTotal = document.querySelector('.fraction__custom-total')

// customFractionCurrent.innerHTML = introSlides.slides.length

// introSlides.on("slideChange", function () {
//   let currentSlide = ++introSlides.realIndex
//   customFractionTotal.innerHTML = currentSlide
// })

//  ===================================== specials-slider =======================================
//  ===================================== specials-slider =======================================

//  ===================================== watched-slider =======================================
const watchedSlider = new Swiper('.watched__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        type: "custom",
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})
//  ===================================== watched-slider =======================================

//  ===================================== watched-slider2 =======================================
const watchedSlider2 = new Swiper('#watchedSlider', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        type: "custom",
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})
//  ===================================== watched-slider2 =======================================



// const modal = new Modal({})


// Range slider
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 1300],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': [1300]
        }
    });

    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        console.log(arr);

        rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            console.log(index);
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
// /Range slider 2

// Range slider
const rangeSlider2 = document.getElementById('range-slider-2');

if (rangeSlider2) {
    noUiSlider.create(rangeSlider2, {
        start: [0.95, 300],
        connect: true,
        step: 1,
        range: {
            'min': [0.95],
            'max': [300]
        }
    });

    const input0 = document.getElementById('input-0-second');
    const input1 = document.getElementById('input-1-second');
    const inputs = [input0, input1];

    rangeSlider2.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        console.log(arr);

        rangeSlider2.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            console.log(index);
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
// /Range slider 2

// Range slider 3
const rangeSlider3 = document.getElementById('range-slider-3');

if (rangeSlider3) {
    noUiSlider.create(rangeSlider3, {
        start: [48, 600],
        connect: true,
        step: 1,
        range: {
            'min': [48],
            'max': [600]
        }
    });

    const input0 = document.getElementById('input-0-three');
    const input1 = document.getElementById('input-1-three');
    const inputs = [input0, input1];

    rangeSlider3.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        console.log(arr);

        rangeSlider3.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            console.log(index);
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
// /Range slider 3

//  ===================================== filter dropdown =======================================
// Catalog Dropdown

const dropdownCatalog = document.querySelectorAll('.catalog__type-item')
const dropdownBody = document.querySelectorAll('.catalog__type-dropdown')

dropdownCatalog.forEach(catalog => {
    dropdownBody.forEach(body => {
        catalog.addEventListener('click', function () {
            if (catalog.dataset.type === body.dataset.value) {
                catalog.classList.toggle('--active')
                body.classList.toggle('--active')
            }
        })
    })
})
// Catalog Dropdown
//  ===================================== filter dropdown =======================================

// ===================================== product slider =====================================

document.addEventListener('DOMContentLoaded', () => {

    let productSlider = new Swiper('.product-block', {
        slidesPerView: 1,
    })
    const productNavItems = document.querySelectorAll('.product-nav__item');
    // const sliderNav = document.querySelector('.product-nav');

    productNavItems.forEach((el, index) => {
        el.setAttribute('data-index', index);

        el.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            productSlider.slideTo(index);
        });
    });
})

// ===================================== product slider =====================================