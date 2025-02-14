document.addEventListener('DOMContentLoaded', () => { 
    const slider = new A11YSlider(document.querySelector(".slider"), {
      slidesToShow: 1,
      arrows: false,
      dots: true,
      centerMode: true,
      //autoplaySpeed: 6000,
      responsive: {
        768: {
          slidesToShow: 2    
        },
        960: {
          disable: true // slider disabled 960px to 1279px
        },
        1280: {
          disable: false,
          slidesToShow: 4,
        }
      }
    });
  });