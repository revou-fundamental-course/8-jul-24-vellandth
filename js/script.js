//banner
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function autoSlide(){

    if(index<0){
        index = slides.length-1;
    }

    if(index>slides.length-1){
        index = 0;
    }

for(let i=0; i<slides.length; i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active"); //kalau ga ada ini, ga mau mucul gambarnya
}

slides[index].style.display= "block";
dot[index].classList.add("active");

index++;

setTimeout(autoSlide,2000);

}

autoSlide();


//kalkulator
window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    // Getting input from user into height variable.
    // Input is string so typecasting is necessary.
    let height = parseFloat(document.querySelector("#height").value);

    // Getting input from user into weight variable.
    // Input is string so typecasting is necessary.
    let weight = parseFloat(document.querySelector("#weight").value);

    // Getting input for age
    let age = parseInt(document.querySelector("#input-usia").value);

    let result = document.querySelector("#result");

    // Validasi usia minimal 20 tahun
    if (age < 20) {
        result.innerHTML = "Usia minimal harus 20 tahun untuk menghitung BMI!";
    } else if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        result.innerHTML = "Provide valid Height and Weight!";
    } else {
        // Calculate the BMI
        let bmi = (weight / (height * height)).toFixed(2);

        // Determine BMI category
        if (bmi < 18.6)
            result.innerHTML = `Underweight : <span>${bmi}</span>`;
        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML = `Normal weight : <span>${bmi}</span>`;
        else
            result.innerHTML = `Overweight : <span>${bmi}</span>`;
    }
}
