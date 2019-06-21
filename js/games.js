let slideIndex = 1;
let showSlides = (n) => {
    slideIndex = n;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replaceAll(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    /*            captionText.innerHTML = dots[slideIndex-1].alt;*/
}


let plusSlides = (n) => {
    showSlides(slideIndex += n);
}

let currentSlide = (n) => {
    showSlides(n);
}

$(document).ready(() => {

    $("#headerGames").load("../header.html", () => {
    });
    $("#contact-info-games").load("../footer.html");
    showSlides(slideIndex);

})