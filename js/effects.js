// Burger menu effects// 

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');   
})

// Scroll effects//
const sections = document.querySelectorAll('.grid-container');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;     })

    const menuLinks = document.querySelectorAll('.off-screen-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
  });
});