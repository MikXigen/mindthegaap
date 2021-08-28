const headerShadow = () => {

    const headBar = document.getElementById('headBar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headBar.classList.add('active');
        } else {
            headBar.classList.remove('active');
        }
    });
}
const scrollToAnchor = () => {

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
    
        var target = this.hash;
        var $target = $(target);
    
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function () {
            window.location.hash = target;
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {

    scrollToAnchor();
    headerShadow();
});