const burger = document.querySelector('.burger');
const link = document.querySelector('.links');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    link.classList.toggle('open');
    body.classList.toggle('lock');
});
// --------------------------------------
const swiper = new Swiper('.swiper', {
    // Optional parameters
    centeredSlide: true,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction:false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },


    breakpoints: {
      320: {
        slidesPerView: 1,
        width: 427.333,
      },
      690: {
        slidesPerView: 2,
      },
      885: {
        slidesPerView: 3,
      }
    }
  });
/*-----------------------------------------------------*/
let info = new Userinfo();

async function t1() {
    console.log(info.previousSites());
    console.log(info.browserInfo());
    console.log(info.sizeScreen());
    console.log(await info.position())
    console.log(await info.battery());
    console.log(await info.ip());
}

t1();