
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//   var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     effect: "fade",
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,              // Khoảng cách giữa các slide
    effect: "fade",                 // Hiệu ứng fade cho các chuyển đổi slide
    centeredSlides: true,          // Căn giữa slides
    autoplay: {
      delay: 2500,                  // Độ trễ tự động chuyển slide là 2500ms (2.5 giây)
      disableOnInteraction: false, // Không tắt tự động chạy khi tương tác
    },
    pagination: {
      el: ".swiper-pagination",     // Element cho pagination
      clickable: true,              // Cho phép click vào pagination để chuyển slide
    },
    navigation: {
      nextEl: ".swiper-button-next", // Selector cho nút next
      prevEl: ".swiper-button-prev", // Selector cho nút prev
    },
});


// WOW JS
  new WOW().init();

  // var menu_chinh=document.querySelector(".menu_chinh");
  // console.log(menu_chinh);
  // $(document).ready(function() {
  //   $(window).scroll(function(){
  //     if($(this).scrollTop() ) {
  //       $(menu_chinh).addClass("sticky-header");
  //     }
  //     else{
  //       $(menu_chinh).removeClass("sticky-header");
  //     }
  //   })
  // });

  // Chờ DOM được tải xong
  document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.menu_chinh');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        // Khi cuộn xuống, ẩn header
        header.classList.add('hidden');
        header.classList.remove('sticky');
      } else {
        // Khi cuộn lên, hiện header
        header.classList.add('sticky');
        header.classList.remove('hidden');
      }
      // Cập nhật vị trí cuộn cuối cùng
      lastScrollY = window.scrollY;
    });
  });
