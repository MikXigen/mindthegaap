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
            
        
/**
    * Function scrollToAnchor 
    * @params none
    * @returns none
    * 
    * This function finds hash links on the page and
    * smoothly scrolls to target if the link is clicked
    */

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
        
        const href = link.getAttribute('href');
        if (href.charAt(0) === '#') {
            
            link.addEventListener('click', (e) => {
                
                e.preventDefault();
                console.log('run');
                const target = document.querySelector(href);
                target.scrollIntoView({behavior: "smooth"})
            })
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {

    scrollToAnchor();
    headerShadow();
});