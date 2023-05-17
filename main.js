const navToggle = document.getElementById('nav-toggle')
const navList = document.getElementById('nav-list')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active_two')
    navList.classList.toggle('active');
})