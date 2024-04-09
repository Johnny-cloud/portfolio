const navLinks = document.querySelectorAll('.nav-item')

const menuToggle = document.getElementById('navbarSupportedContent')

const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {toggle: false})

navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
        if(bsCollapse._isShown()){
            bsCollapse.hide()
        }
    })
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else{
            entry.target.classList.remove("show")
        }
    })
})

let target = document.querySelectorAll('.hidden')

target.forEach(elem => observer.observe(elem))