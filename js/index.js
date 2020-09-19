const calculateButton = document.querySelector('label')
const shippingWeight = document.querySelector('input')

calculateButton.addEventListener('click', function(){
    let weight = shippingWeight.value
    weight = Number(weight)
    console.log(weight)
    document.getElementById("shippingrate").textContent = weight;
})