document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".products img");

    //console.log(images);

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", function () {
            this.nextElementSibling.style.display = "none";
        });
        images[i].addEventListener("mouseout", function () {
            this.nextElementSibling.style.display = "inline-block";
        });
    }

    var btnprev = document.querySelector(".banner-prev");
    //console.log(btnprev);
    var btnnext = document.querySelector(".banner-next");
    //console.log(btnnext);
    var bannerSlide = document.querySelectorAll(".banner-slide");
    //console.log(bannerSlide);

    var slideNumber = 0;
    bannerSlide[slideNumber].classList.remove("banner-slide-hidden");
    bannerSlide[slideNumber].classList.add("banner-slide-active");

    btnnext.addEventListener("click", function () {

        if (slideNumber >= 0 && slideNumber < bannerSlide.length - 1) {
            bannerSlide[slideNumber].classList.remove("banner-slide-active");
            bannerSlide[slideNumber].classList.add("banner-slide-hidden");
            slideNumber++;
            bannerSlide[slideNumber].classList.remove("banner-slide-hidden")
            bannerSlide[slideNumber].classList.add("banner-slide-active");


        } else if (slideNumber >= bannerSlide.length - 1) {
            bannerSlide[slideNumber].classList.remove("banner-slide-active");
            bannerSlide[slideNumber].classList.add("banner-slide-hidden");
            slideNumber = 0;
            bannerSlide[slideNumber].classList.remove("banner-slide-hidden");
            bannerSlide[slideNumber].classList.add("banner-slide-active");
        }
    });

    btnprev.addEventListener("click", function () {
        if (slideNumber > 0 && slideNumber <= bannerSlide.length - 1) {
            bannerSlide[slideNumber].classList.remove("banner-slide-active");
            bannerSlide[slideNumber].classList.add("banner-slide-hidden");
            slideNumber--;
            bannerSlide[slideNumber].classList.remove("banner-slide-hidden")
            bannerSlide[slideNumber].classList.add("banner-slide-active");
        } else if (slideNumber <= 0) {
            bannerSlide[slideNumber].classList.remove("banner-slide-active");
            bannerSlide[slideNumber].classList.add("banner-slide-hidden");
            slideNumber = bannerSlide.length - 1;
            bannerSlide[slideNumber].classList.remove("banner-slide-hidden");
            bannerSlide[slideNumber].classList.add("banner-slide-active");
        }
    })
})