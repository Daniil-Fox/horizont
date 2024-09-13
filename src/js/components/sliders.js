import { Swiper } from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

Swiper.use([Navigation, Pagination, Thumbs])

new Swiper('.video__slider', {
  slidesPerView: 3,
  spaceBetween: 25,

  navigation: {
    prevEl: '.video-prev',
    nextEl: '.video-next',
  },
  pagination: {
    el: '.video__pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    1200 : {
      slidesPerView: 3
    }
  }
})

const popularSliders = document.querySelectorAll('.popular__slider')

popularSliders.forEach(slider => {
  const parent = slider.closest('.popular')
  const nextBtn = parent?.querySelector('.popular-next')
  const prevBtn = parent?.querySelector('.popular-prev')
  const pagi = parent?.querySelector('.popular__pagination')
  new Swiper(slider, {
    slidesPerView: 4,
    spaceBetween: 25,

    navigation: {
      prevEl: prevBtn,
      nextEl: nextBtn,
    },
    pagination: {
      el: pagi,
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      568: {
        slidesPerView: 2
      },
      851: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4
      }
    }
  })
})

const prodThumbs = new Swiper('.prod-hero__thumbs', {
  slidesPerView: 7,
  spaceBetween: 15
})
const prodSlider = new Swiper('.prod-hero__slider', {
  slidesPerView: 1,
  spaceBetween: 25,
  thumbs: {
    swiper: prodThumbs
  }
})


new Swiper('.lic-slider', {
  slidesPerView: 4,
  spaceBetween: 25,
  pagination: {
    el: '.lic-pagination'
  }
})
