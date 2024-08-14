let celsiusInput = document.querySelector('#celsius');
let fahrenheitInput = document.querySelector('#Fahranhiet ');
let KelvinInput = document.querySelector('#Kelvin');

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100;
}

celsiusInput.addEventListener('input', function(){
    let cTemp =parseFloat(celsiusInput.value);
    let fTemp = (cTemp*(9/5))+32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value=roundNumber(fTemp)
    KelvinInput.value=roundNumber(kTemp)

})

fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    KelvinInput.value = roundNumber(kTemp)
})


KelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(KelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)})

    btn.addEventListener('click', ()=>{
        celsiusInput.value = ""
        fahrenheitInput.value = ""
        KelvinInput.value = ""
    })