
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("gallery-item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("hide");
        if (x[i].className.indexOf(c) > -1) x[i].classList.remove("hide");
    }
    let btns = document.getElementsByClassName("btn");
    for (let btn of btns) {
        btn.addEventListener("click", function() {
            document.querySelector(".btn.active").classList.remove("active");
            this.classList.add("active");
        });
    }
}

let slideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}