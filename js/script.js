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


    //result
    let outputStatus = document.querySelector("#output-status");
    let outputNumber = document.querySelector("#output-number");
    let outputInfo = document.querySelector("#output-info");

    // Validasi usia minimal 20 tahun
    if (age < 20) {
        outputStatus.innerHTML = "Usia minimal harus 20 tahun untuk menghitung BMI!";
        outputNumber.innerHTML = "";
        outputInfo.innerHTML = "";
    } else if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        outputStatus.innerHTML = "Masukan nilai yang benar!";
        outputNumber.innerHTML = "";
        outputInfo.innerHTML = "";
    } else {
        // Calculate the BMI
        let bmi = (weight / (height * height)).toFixed(2);

        // Determine BMI category
        if (bmi < 18.6) {
            outputStatus.innerHTML = "Underweight";
            outputNumber.innerHTML = `<span>${bmi}</span>`;
            outputInfo.innerHTML = "Untuk mencapai berat badan yang sehat, pilih makanan tinggi kalori seperti alpukat, kacang-kacangan, dan daging tanpa lemak. Perbanyak asupan protein dengan telur, ikan, dan produk susu rendah lemak. Latihan resistensi seperti angkat beban akan membantu membangun massa otot.";
        } else if (bmi >= 18.6 && bmi < 24.9) {
            outputStatus.innerHTML = "Normal weight";
            outputNumber.innerHTML = `<span>${bmi}</span>`;
            outputInfo.innerHTML = "Pertahankan berat badan ideal dengan makan seimbang, termasuk serat dari buah-buahan dan sayuran, protein dari daging tanpa lemak atau sumber nabati, serta lemak sehat dari alpukat dan kacang-kacangan. Lakukan olahraga aerobik seperti berlari atau berenang minimal 30 menit setiap hari untuk kesehatan jantung yang baik.";
        } else {
            outputStatus.innerHTML = "Overweight";
            outputNumber.innerHTML = `<span>${bmi}</span>`;
            outputInfo.innerHTML = "Kurangi asupan kalori dengan menghindari makanan olahan dan gula tambahan. Fokus pada sayuran berwarna-warni, biji-bijian utuh, dan protein rendah lemak. Lakukan kombinasi latihan kardio seperti bersepeda atau berjalan cepat dengan latihan kekuatan seperti yoga atau pilates untuk membakar lemak dan memperkuat otot.";
        }
    }
}