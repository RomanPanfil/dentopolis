const FARBA = {
  WH: window.innerHeight,

  WW: document.documentElement.clientWidth,

  isTouch: 'ontouchstart' in window || navigator.msMaxTouchPoints,

  //lazy load для сторонних либ
  lazyLibraryLoad(scriptSrc, linkHref, callback) {
    let script;
    const domScript = document.querySelector(`script[src="${scriptSrc}"]`);
    const domLink = document.querySelector(`link[href="${linkHref}"]`);

    if (!domScript) {
      script = document.createElement("script");
      script.src = scriptSrc;
      document.querySelector("#wrapper").after(script);
    }

    if (linkHref !== "" && !domLink) {
      let style = document.createElement("link");
      style.href = linkHref;
      style.rel = "stylesheet";
      document.querySelector("link").before(style);
    }

    if (!domScript) {
      script.onload = callback;
    } else {
      domScript.onload = callback;
    }
  }
};


// // выпадающий спосок в header
// (function() {
//   if (!document.querySelector('.trigger')) return

//   const triggers = document.querySelectorAll('.trigger'); 

//   triggers.forEach((trigger) => {
//     trigger.addEventListener('click', () => {
//       const navItem = trigger.closest('.header-nav-item');

//       if(navItem) {
//         navItem.classList.toggle('show');
//       }      
//     });
//   })    
// })();


// выпадающий спосок в header 

// выпадающий спосок в header 

// (function() {
//   if (!document.querySelector('.trigger')) return

//   const triggers = document.querySelectorAll('.trigger');

//   triggers.forEach(trigger => {
//     trigger.addEventListener('click', toggleDropdown);
//   });

//   document.addEventListener('click', handleClickOutside);

//   function toggleDropdown() {
//     const navItem = this.closest('.header-nav-item');
//     if(navItem) {
//       navItem.classList.toggle('show');
//     }    
//   }

//   function handleClickOutside(e) {
//     if (!e.target.closest('.header-nav-item')) {
//       triggers.forEach(trigger => {
//         let navItem = trigger.closest('.header-nav-item');
//         if (navItem) {
//           navItem.classList.remove('show');
//         }          
//       });
//     }
//   }
// })();

// поиск в header
(function() {
  if (!document.querySelector('.header-nav-search .search-wrapper') || !document.querySelector('.header-nav-search .search-icon') || !document.querySelector('.header-nav-search .close-icon')) return

  const searchWrapper = document.querySelector('.header-nav-search .search-wrapper');
  const iconSearch = document.querySelector('.header-nav-search .search-icon');
  const iconClose = document.querySelector('.header-nav-search .close-icon');

  iconSearch.addEventListener('click', (e) => {
    e.stopPropagation()
    searchWrapper.classList.toggle('open');   
  });

  iconClose.addEventListener('click', () => {    
    searchWrapper.classList.remove('open');    
  });

  searchWrapper.addEventListener('click', e => e.stopPropagation());
  document.addEventListener('click', handleClickOutside);


  function handleClickOutside(event) {
    if (!event.target.closest('.search-wrapper')) {
      searchWrapper.classList.remove('open');
    }
  }
})();

// поиск в header mobile
(function() {
  if (!document.querySelector('.search-wrapper__mobile') || !document.querySelector('.mobile-nav-search .mobile-nav-icon') || !document.querySelector('.search-wrapper__mobile .close-icon')) return

  const searchWrapper = document.querySelector('.search-wrapper__mobile');
  const iconSearch = document.querySelector('.mobile-nav-search .mobile-nav-icon');
  const iconClose = document.querySelector('.search-wrapper__mobile .close-icon');

  iconSearch.addEventListener('click', (e) => {
    console.log('click');
    e.stopPropagation()
    searchWrapper.classList.toggle('open');   
  });

  iconClose.addEventListener('click', () => {    
    searchWrapper.classList.remove('open');    
  });

  searchWrapper.addEventListener('click', e => e.stopPropagation());
  document.addEventListener('click', handleClickOutside);


  function handleClickOutside(event) {
    if (!event.target.closest('.search-wrapper__mobile')) {
      searchWrapper.classList.remove('open');
    }
  }
})();

// main slider
(function() {
  const mainSlider = new Swiper('.main-slider', {
    autoHeight: true,
    loop: true,    
    slidesPerView: 'auto',
    // autoplay: {
    //   delay: 7000,
    //   disableOnInteraction: false
    // },
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },
    // on: {
    //   slideChangeTransitionEnd: function() {
      
    //     let activeSlide = this.slides[this.activeIndex];
        
    //     activeSlide.addEventListener('mouseenter', () => {
    //       this.slideNext();
    //     });      
    //   }
    // }
  });
})();


// doctors slider
(function() {
  const sliderFour = new Swiper('.doctors-slider', {  
    loop: false,    
    slidesPerView: 1.4,
    slidesPerGroup: 1,
    spaceBetween: 12,    
    navigation: {
      nextEl: '.doctors-slider .slider-next',
      prevEl: '.doctors-slider .slider-prev',
    },   
    breakpoints: {     
      599: {
        spaceBetween: 20,
        slidesPerView: 1.4,     
      },
      769: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1680: {
        slidesPerView: 4,
        spaceBetween: 32,
      }
    }
  });
})();

// work slider
(function() {
  const sliderFour = new Swiper('.work-slider', {  
    loop: false,    
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 32,  
    navigation: {
      nextEl: '.work-slider .slider-next',
      prevEl: '.work-slider .slider-prev',
    },
  });
})();

// reviews slider
(function() {
  const sliderFour = new Swiper('.reviews-slider', {  
    loop: false,   
    slidesPerView: 1.4,
    slidesPerGroup: 1,
    spaceBetween: 12,     
    navigation: {
      nextEl: '.reviews-slider .slider-next',
      prevEl: '.reviews-slider .slider-prev',
    },    
    breakpoints: {
      599: {
        spaceBetween: 20,
        slidesPerView: 1.4,
      },
      769: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 32,        
      },
      1368: {
        slidesPerView: 3,
        spaceBetween: 32,        
      }
    }
  });
})();

// actions slider
(function() {
  const sliderFour = new Swiper('.actions-slider', {  
    loop: false,    
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,  
    navigation: {
      nextEl: '.actions-slider .slider-next',
      prevEl: '.actions-slider .slider-prev',
    },
  });
})();

// gallery slider
(function() {
  const sliderFour = new Swiper('.gallery-slider', {  
    loop: false,    
    slidesPerView: 1.4,
    slidesPerGroup: 1,
    spaceBetween: 12,
    navigation: {
      nextEl: '.gallery-slider .slider-next',
      prevEl: '.gallery-slider .slider-prev',
    },
    breakpoints: {
      599: {
        spaceBetween: 20,
      },
      769: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 32,
      }
    }
  });
})();

// implants slider
(function() {
  const sliderFour = new Swiper('.implants-slider', {  
    loop: false,    
    slidesPerView: 1.4,
    slidesPerGroup: 1,
    spaceBetween: 12,  
    navigation: {
      nextEl: '.implants-slider .slider-next',
      prevEl: '.implants-slider .slider-prev',
    },
    breakpoints: {
      599: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      769: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
      },      
    }
  });
})();

// diploms slider
(function() {
  const sliderFour = new Swiper('.diploms-slider', {  
    loop: false,    
    slidesPerView: 1.4,
    slidesPerGroup: 1,
    spaceBetween: 12,  
    navigation: {
      nextEl: '.diploms-slider .slider-next',
      prevEl: '.diploms-slider .slider-prev',
    },
    breakpoints: {
      420: {
        slidesPerView: 2.4
      },
      480: {
        slidesPerView: 2.4
      },
      599: {            
        spaceBetween: 20,
        slidesPerView: 3.4,
      },
      769: {        
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
      1366: {
        slidesPerView: 6,
        spaceBetween: 32,
      }
    }
  });
})();

// reviews slider
// (function() {
//   const sliderFour = new Swiper('.reviews-slider', {
//     direction: 'vertical',
//     loop: false,
//     slidesPerColumn: 1,    
//   });
// })();

(function() {
  const verticalSlider = new Swiper('.vertical-slider', {    
    slidesPerView: 1,
    freeMode: 'true',
    spaceBetween: 12,
    // mousewheel: true,   
    navigation: {
      nextEl: '.reviews-slider__vertical .vertical-arrows-next',
      prevEl: '.reviews-slider__vertical .vertical-arrows-prev'
    },
    breakpoints: {
      480: {
        slidesPerView: 2,        
      },
      768: {
        spaceBetween: 20,
      },          
      1023: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: 'true',
        spaceBetween: 32,
      }
    }
  });
})();

// валидация формы
// $(document).ready(function () {
  

//   $(".feedback-form").validate({
//     submitHandler: function(form, event) {    
//       event.preventDefault()
//       form.reset()       
//     },
//     rules: {
//       name: {
//         required: true,
//       },
//       email: {
//         required: true,
//       },
//       number: {
//         required: true,     
//         number: false 
//       },
//       message: {
//         required: true,
//       }    
//     },
//     messages: {
//       name: "Пожалуйста, заполните это поле",
//       email: "Пожалуйста, заполните это поле",
//       number: "Пожалуйста, заполните это поле",
//       message: "Пожалуйста, заполните это поле",    
//     }
//   });  
// });

// маска номера телефона
// $(document).ready(function () {
//   $(".feedback-form .number").inputmask("+999(99)-999-9999", { showMaskOnHover: false });
// });

function initMask() {
  const inputs = document.querySelectorAll('.feedback-form .number'); 
  if(!inputs.length) return

  inputs.forEach(element => {
    IMask(element, {
      mask: [
        {
          mask: '+000 (00) 000-00-00',
          startsWith: '375',
          lazy: false,
          country: 'Belarus'
        },
        {
          mask: '+0 (000) 000-00-00',
          startsWith: '7',
          lazy: false,
          country: 'Russia'
        },
        {
          mask: '+{38} (0{00}) 000-00-00', 
          startsWith: '38',
          lazy: false,
          country: 'Ukraine'
        },
        {
          mask: '+000 (00) 000-00-00',
          startsWith: '371', 
          lazy: false,
          country: 'Latvia'  
        },
        {
          mask: '+000 (000) 000-00-00',
          startsWith: '370',
          lazy: false,
          country: 'Lithuania'
        },
        {
          mask: '+00 (000) 000-00-00',
          startsWith: '48',
          lazy: false, 
          country: 'Poland'
        },
        {
           mask: '+{49} {0} {000} {000}-{00}-{00}',
           startsWith: '49',
           lazy: false,
           country: 'Germany'
        },    
        {
          mask: '0000000000000',
          startsWith: '',
          country: 'unknown'
        }
      ],
      dispatch: (appended, dynamicMasked) => {
        const number = (dynamicMasked.value + appended).replace(/\D/g,'');
    
        return dynamicMasked.compiledMasks.find(m => number.indexOf(m.startsWith) === 0);
      }
    })
  })
};

initMask();

// переключение табов "наша команда"
(function() {
  if (!document.querySelector('.doctors-tabs button') || !document.querySelector('.doctors-tabs-wrapper')) return

  const tabs = document.querySelectorAll('.doctors-tabs button');
  const tabsPanel = document.querySelectorAll('.doctors-tabs-wrapper');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      
      let tabId = this.getAttribute('data-tab');
      
      tabs.forEach(item => {
        item.classList.remove('active');
      });
      
      this.classList.add('active');

      tabsPanel.forEach(panel => {
      if(panel.id === tabId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    });
  });
})();

// аккордион
(function() {
  if (!document.querySelector('.accordion-head')) return

  const buttons = document.querySelectorAll('.accordion-head');
  const icons = document.querySelectorAll('.accordion-head .accordion-head-icon');

  buttons.forEach((button, index) => {
    if (index === 0) {
      const content = button.nextElementSibling;
      if(content.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }

    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = icons[index];     
      
      if (content.classList.contains('open')) {
        content.classList.remove('open');
        content.style.maxHeight = '0px'
        icon.classList.remove('open'); 
      } else {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('open');
      } 
    });
  });

  
})();


// (function() {
//   ymaps.ready(init);

//   function init() {
//     // Создание карты
//     const map = new ymaps.Map(
//       "map",
//       {
//       center: [53.949604, 27.694494],
//       zoom: 16,
//       controls: [],  
//       type: 'yandex#map', 
//     }, 
//     {
//       scrollZoom: false,
//     }
//   );
 
//   // Отключение перетаскивания и прокрутки карты
//   map.behaviors.disable(["drag", "scrollZoom"]);

//   // Создание метки
//   const placemark = new ymaps.Placemark(
//     [53.949604, 27.694494],
//     {
//       hintContent: 'Стоматология "Дентополис"',
//       balloonContent: 'Стоматология "Дентополис"'
//     },
//     // {
//     //   preset: 'islands#icon',
//     //   iconColor: '#0095b6'
//     // }
//   );

//   // Добавление метки на карту
//   map.geoObjects.add(placemark);
// }
// })();


// стилизация чекбокса
(function() {
  if(!document.querySelector('.ui-input.checkbox')) return

  $('.ui-input.checkbox').styler();
})();

// pop-up
$(document).on("click", ".mfp-link", function () {
  var a = $(this);
  $.magnificPopup.open({
    items: { src: a.attr("data-href") },
    type: "ajax",
    overflowY: "scroll",
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    ajax: {
      tError: "Error. Not valid url",
    },
    callbacks: {
      open: function () {
        setTimeout(function(){
          $('.mfp-wrap').addClass('not_delay');
          $('.mfp-popup').addClass('not_delay');
        },700);

        document.documentElement.style.overflow = 'hidden'
      },

      close: function() {
        document.documentElement.style.overflow = ''
      }
    }
  });
  return false;
});

// бургер-меню
(function() {
  if(!document.querySelector('.header-top-burger') || !document.querySelector('.mobile-nav')) return

  const menuBtn = document.querySelector('.header-top-burger');
  const mobileMenu = document.querySelector('.mobile-nav');

  menuBtn.addEventListener('click', openMenu);

  function openMenu() {
    mobileMenu.classList.toggle('active');
    document.querySelector('.header-top-burger span').classList.toggle('active');

    // добавим управление overflow для body
    const isOpen = mobileMenu.classList.contains('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

})();

// мобильное меню навигации
(function() {
  const navItem = document.querySelectorAll('.mobile-nav ul a');

  navItem.forEach(item => {    
    item.addEventListener('click', openSubMenu)
  });

  function openSubMenu(ev) {
    const parentLI = ev.target.closest('li');   
    
    if (parentLI) {
      parentLI.classList.toggle('opened');     
    }
  }
})();


(function() {
  document.querySelector('.on-top').addEventListener('click', () => {    
    document.querySelector('.main').scrollIntoView({
      behavior: "smooth"
    });    
  }) 
})();


(function() {
  const sections = document.querySelectorAll('.section-feedback__padding');

  const removeFeedbackClass = () => {
    sections.forEach(section => {
      section.classList.remove('feedback');
    });
  }
  
  const addFeedbackClass = () => {
    sections.forEach(section => {
      section.classList.add('feedback');
    });
  }
  
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  
  // Проверка при загрузке страницы
  if (mediaQuery.matches) {
    removeFeedbackClass();
  } else {
    addFeedbackClass(); 
  }
  
  // Проверка при ресайзе окна  
  mediaQuery.addEventListener('change', e => {
    if (e.matches) {
      removeFeedbackClass();
    } else {
      addFeedbackClass(); 
    }
  });
})();