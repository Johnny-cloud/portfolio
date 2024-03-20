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