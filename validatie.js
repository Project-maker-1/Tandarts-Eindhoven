const formulier = document.querySelector('#formulier')
const naam = document.querySelector('#naam')
const naamfout = document.querySelector('#naam-fout')

formulier.addEventListener('submit', function(event) {
    
    if (naam.value === "") {
        event.preventDefault()
        naamfout.classList.remove('hidden')
    } else {
        name = true
        naamfout.classList.add('hidden')
    }
})