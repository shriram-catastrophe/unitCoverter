btn=document.getElementById("btn")
inputValue=document.getElementById("inputValue")
conv1value=document.getElementById("conv1value")
conv2value=document.getElementById("conv2value")
conv3value=document.getElementById("conv3value")
btn.addEventListener("click",perform)
//
function perform()
{
    let mtf=((inputValue.value)*3.2808).toFixed(3)
    let ftm=((inputValue.value)*0.3048).toFixed(3)
    conv1value.textContent=`${inputValue.value} meters = ${mtf} feet | ${inputValue.value} feet = ${ftm} meters`
    //
    let ltg=((inputValue.value)*0.2642).toFixed(3)
    let gtl=((inputValue.value)*3.7854).toFixed(3)
    conv2value.textContent=`${inputValue.value} liters = ${ltg} gallons | ${inputValue.value} gallons = ${gtl} liters`
    //
    let ktp=((inputValue.value)*2.2046).toFixed(3)
    let ptk=((inputValue.value)*0.4536).toFixed(3)
    conv3value.textContent=`${inputValue.value} kilograms = ${ktp} pounds | ${inputValue.value} pounds = ${ptk} kilograms`
}