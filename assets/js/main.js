
document.querySelector("button").addEventListener("click", function() {
    
    let kilometers = document.getElementById("km").value;
    let userAge = document.getElementById("age").value;
    let price = (kilometers * 0.21);

    if(userAge < 18){
        price =(price - (price / 100) * 20).toFixed(2);
    } else if (userAge >= 65){
        price =(price - (price / 100) * 40).toFixed(2);
    }

    
})