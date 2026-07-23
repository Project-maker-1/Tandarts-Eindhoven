const formulier = document.querySelector('#formulier')

const inputs = {
    naam: document.querySelector('#naam'),
    email: document.querySelector('#email'),
    telefoon: document.querySelector('#telefoon'),
}

const fouten = {
    naam: document.querySelector('#naam-fout'),
    email: document.querySelector('#email-fout'),
    telefoon: document.querySelector('#telefoon-fout'),
}

formulier.addEventListener('submit', function(event) {
    
    Object.keys(inputs).forEach(function(sleutel) {
        if (inputs[sleutel].value === "") {
            event.preventDefault()
            fouten[sleutel].classList.remove("hidden")
        }
        
        else {
    fouten[sleutel].classList.add('hidden')
}
    })
})

