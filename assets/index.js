window.addEventListener('scroll', function (){
    var header = document.querySelector('header');
    header.classList.toggle('nav', window.scrollY > 0);
});

function toggleMenu () {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

function moreaboutme() {
    var x = document.getElementById("penulis");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}