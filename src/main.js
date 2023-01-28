import anime from "animejs/lib/anime.es.js";

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("year").innerHTML = new Date().getFullYear().toString()
    const textWrapper = document.getElementById("product-slogan");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /./g,
        "<span class='letter'>$&</span>"
    );

    anime
        .timeline({ loop: false })
        .add({
            targets: "#product-slogan .letter",
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1),
        })
        .add({
            targets: "#product-slogan h1",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });
})
