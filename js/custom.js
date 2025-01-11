$(function () {
  $(".slick_item").slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: ' <i class="ri-arrow-right-line prev"></i>',
    nextArrow: ' <i class="ri-arrow-left-line next"></i>',

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $(".slick_item_expore_gallery").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: ' <i class="ri-arrow-right-line prev"></i>',
    nextArrow: ' <i class="ri-arrow-left-line next"></i>',

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // Back to Top Button Start
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.remove("show");
      backToTop.classList.add("hidden");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // Back to Top Button End
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const mobileMenu = document.getElementById("mobile-menu");
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});
