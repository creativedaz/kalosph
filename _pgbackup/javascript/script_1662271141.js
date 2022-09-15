const hamburger =document.getElementById('hamburger');
const navUL = document.getElementById('nav_ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});