// Scrollspy Styles
let nav = document.querySelector('nav');
let scrollButton = document.getElementById('scrolltop');
window.onscroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.style.padding = '0px 0px';
        nav.style.backgroundColor = 'black';
        nav.style.opacity = '0.7';
        scrollButton.style.display = 'flex';
    } else if (document.body.scrollTop < 10 || document.documentElement.scrollTop < 10) {
        nav.style.padding = '10px 0 3px';
        nav.style.backgroundColor = 'transparent';
        scrollButton.style.display = 'none';
    }
}

// Scrollspy Styles End


// Navbar Toggler Button Styles

let navToggler = document.getElementById('navtoggler');

navToggler.addEventListener('click', (el) => {
    navToggler.classList.toggle('activate');
})


// Navbar Toggler Button Styles End


// Smooth Scroll Start

$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Smooth Scroll End
