document.querySelector("button").addEventListener("click", function() {
    
    let kilometers = document.getElementById("km").value; //km
    let userAge = document.getElementById("age").value;//age
    let price = (kilometers * 0.21).toFixed(2); //cost

    if(userAge < 18){
        price =(price - (price / 100) * 20).toFixed(2); //underage discount
    } else if (userAge >= 65){
        price =(price - (price / 100) * 40).toFixed(2); //senior discount
    }
    document.getElementById("costo_biglietto").innerHTML = price + " €";
})