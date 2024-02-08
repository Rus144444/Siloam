/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".repair__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".repair__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,


			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


      // Пагінація

      // pagination: {
      // 	el: '.repair-slider__bullets',
      // 	clickable: true,
      // },

      // Скроллбар

      // scrollbar: {
      // 	el: '.swiper-scrollbar',
      // 	draggable: true,
      // },

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".repair-slider__button-prev",
        nextEl: ".repair-slider__button-next",
      },

      // Брейкпоінти
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //     autoHeight: true,
      //   },
      //   800: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   992: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   1268: {
      //     slidesPerView: 3,
      //     spaceBetween: 30,
      //   },
      // },

      // Події
      on: {},
    });
  }
   //   body-sermons__slider
  if (document.querySelector(".body-sermons__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".body-sermons__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      // pagination: {
      // 	el:'.remont__pagination',
      // 	clickable: true,
      // },

      // Скроллбар

      // scrollbar: {
      // 	el: '.swiper-scrollbar',
      // 	draggable: true,
      // },

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".body-sermons__slider-button-prev",
        nextEl: ".body-sermons__slider-button-next",
      },

      // Брейкпоінти
      breakpoints: {
         320: {
           slidesPerView: 1,
           spaceBetween: 0,
           autoHeight: true,
         },
         600: {
          slidesPerView: 1,
          spaceBetween: 20,
         },
         601: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         930: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         931: {
           slidesPerView: 3,
           spaceBetween: 30,
         },
       },
      // Події
      on: {},
    });
  }

   //   body-worship__wrapper
  if (document.querySelector(".body-worship__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".body-worship__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      // pagination: {
      // 	el:'.remont__pagination',
      // 	clickable: true,
      // },

      // Скроллбар

      // scrollbar: {
      // 	el: '.swiper-scrollbar',
      // 	draggable: true,
      // },

      // // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".body-worship__slider-button-prev",
        nextEl: ".body-worship__slider-button-next",
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        600: {
         slidesPerView: 1,
         spaceBetween: 20,
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        930: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        931: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

      // Події
      on: {},
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
