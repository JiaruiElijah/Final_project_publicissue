var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  on: {
    slideChange: function () {
      var activeIndex = this.activeIndex; 
      var activeSlide = this.slides[activeIndex]; 
      var activeText = activeSlide.querySelector('.slide-text'); 
      var allText = this.el.querySelectorAll('.slide-text'); 

      // 隐藏所有文字解释
      allText.forEach(function (text) {
        text.style.display = 'none';
      });

      // 显示当前激活的文字解释
      activeText.style.display = 'block';
    }
  }

});
const button = document.getElementById("random-page-btn");

button.addEventListener("click", function() {

  const randomId = Math.floor(Math.random() * 100) + 1;
  const url = "https://www.facebook.com/ElonMuskOfficiaI";
  

  window.location.href = url;
});
