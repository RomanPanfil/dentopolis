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

// main slider
(function() {
  const mainSlider = new Swiper('.main-slider', {
    autoHeight: true,
    loop: true,    
    slidesPerView: 'auto',
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },
    on: {
      slideChangeTransitionEnd: function() {
      
        let activeSlide = this.slides[this.activeIndex];
        
        activeSlide.addEventListener('mouseenter', () => {
          this.slideNext();
        });      
      }
    }
  });
})();


// doctors slider
(function() {
  const sliderFour = new Swiper('.doctors-slider', {  
    loop: false,    
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 32,  
    navigation: {
      nextEl: '.doctors-slider .slider-next',
      prevEl: '.doctors-slider .slider-prev',
    },
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
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 32,  
    navigation: {
      nextEl: '.reviews-slider .slider-next',
      prevEl: '.reviews-slider .slider-prev',
    },
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

// description slider
(function() {
  const sliderFour = new Swiper('.description-slider', {  
    loop: false,    
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 32,  
    navigation: {
      nextEl: '.description-slider .slider-next',
      prevEl: '.description-slider .slider-prev',
    },
  });
})();

// implants slider
(function() {
  const sliderFour = new Swiper('.implants-slider', {  
    loop: false,    
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 32,  
    navigation: {
      nextEl: '.implants-slider .slider-next',
      prevEl: '.implants-slider .slider-prev',
    },
  });
})();

// валидация формы
$(document).ready(function () {
  

  $(".feedback-form").validate({
    submitHandler: function(form, event) {    
      event.preventDefault()
      form.reset()       
    },
    rules: {
      name: {
        required: true,
      },
      number: {
        required: true,     
        number: false 
      },      
    },
    messages: {
      name: "Пожалуйста, заполните это поле",   
      number: "Пожалуйста, заполните это поле",      
    }
  });  
});

// маска номера телефона
$(document).ready(function () {
  $(".feedback-form .number").inputmask("+375(99)-999-9999", { showMaskOnHover: false });
});

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
  const icons = document.querySelectorAll('.accordion-head .icon');

  buttons.forEach((button, index) => {
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