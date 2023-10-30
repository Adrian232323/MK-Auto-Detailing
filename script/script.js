const nav = document.querySelector('.nav-mobile')
const navBTN = document.querySelector('.burger-btn')
const allIinks = document.querySelectorAll('.nav-item')
const navBtnBars = document.querySelector('.burger-btn-bars')
const footerYear = document.querySelector('.footer-year')


const handleNAv = () => {
    nav.classList.toggle('nav-active')
    allIinks.forEach(item => {
        item.addEventListener('click', () =>
        nav.classList.remove('nav-active'))
    })
    
    handleNavItemsAnimation();
   
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allIinks.forEach(item => {
        item.classList.toggle('nav-items-animation')

        item.style.animationDelay = '.' + delayTime + 's'; 
        delayTime++;
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();
navBTN.addEventListener('click', handleNAv)
