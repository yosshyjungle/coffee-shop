const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");

// メニューを開く
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// メニューを閉じる
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// メニューリンクをクリックしたときにメニューを閉じる
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

// Initialize Swiper 

const swiper = new Swiper('.silder-wrapper', {
        loop: true,
        grabCursor:true,
        spaceBetween: 25,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },


breakpoints: {
        0:{
        slidesPerView:1
},
768:{
        slidesPerView:2
},
1024:{
        slidesPerView:3
}
},
      });