let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function() {
    console.log('clicked')
    let ilgis = document.getElementById('ilgis').valueAsNumber
    let plotis = document.getElementById('plotis').valueAsNumber
    let gylis = document.getElementById('gylis').valueAsNumber
    let orderCount = document.getElementById('order-count').valueAsNumber

    let kubatura = ilgis * plotis * gylis
    let arPavyks = kubatura >= orderCount

    let results = document.getElementById('results')
    results.innerHTML = `<p><strong>Kubatura:</strong> ${kubatura} m3</p>`
    results.innerHTML += `<p><strong>Reikia:</strong> ${orderCount} m3</p>`
    results.innerHTML += `<p><strong>Ar spės?</strong> ${arPavyks ? 'Taip' : 'Ne'}</p>`
})

document.getElementById('ilgis').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0) {
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')
    } else {
        event.target.classList.remove('error')
        event.target.nextElementSibling.classList.remove('show')
    }
})

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('ilgis').valueAsNumber = 0
    document.getElementById('plotis').valueAsNumber = 0
    document.getElementById('gylis').valueAsNumber = 0
    document.getElementById('order-count').valueAsNumber = 0
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>'
})

document.querySelector('header').style.cssText = 'color:antiquewhite; background-color:brown; text-align:center';
