
let contactNav = document.querySelectorAll('.navBar a ,.Contact');

contactNav.forEach(element => {
    element.addEventListener('click', scrollFun)

})

function scrollFun(e) {
    e.preventDefault();
    let targetElement = document.querySelector(e.target.getAttribute('href'));
    console.log("Target Element is: " + targetElement);
    document.querySelectorAll('.navBar a, .Contact').forEach(link => link.classList.remove('active'))
    e.target.classList.add('active')
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
