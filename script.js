let slideActual = 0;

const slides = document.querySelector(".slides");
const puntos = document.querySelectorAll(".punto");
const totalSlides = document.querySelectorAll(".slides img").length;

function actualizarSlider() {
    slides.style.transform = `translateX(-${slideActual * 100}%)`;

    puntos.forEach((punto, index) => {
        punto.classList.toggle("activo", index === slideActual);
    });
}

function moverSlide(direccion) {
    slideActual += direccion;

    if (slideActual >= totalSlides) {
        slideActual = 0;
    }

    if (slideActual < 0) {
        slideActual = totalSlides - 1;
    }

    actualizarSlider();
}

function irASlide(numero) {
    slideActual = numero;
    actualizarSlider();
}