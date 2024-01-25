let contactForm = document.getElementById("contactForm")

contactForm.addEventListener('submit', event => {

    event.preventDefault()

    let contactName = document.getElementById("contactName")
    let contactEmail = document.getElementById("contactEmail")
    let contactMessage = document.getElementById("contactMessage")

    let recipient = "johnkipruto157@gmail.com"
    let message = contactMessage.value 
    let subject = "Getting In Touch"

    let mailToLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    window.location.href = mailToLink

    contactName.value = contactEmail.value = contactMessage.value = " "

})