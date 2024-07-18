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
        outputStatus.innerHTML = "";
        outputNumber.innerHTML = "";
        outputInfo.innerHTML = "Masukan nilai yang benar!";
    } else {
        // Calculate the BMI
        let bmi = (weight / (height * height)).toFixed(2);

        // Determine BMI category

        if (bmi < 17.0) {
            outputStatus.innerHTML = "Sangat Kurus";
            outputNumber.innerHTML = `<span>${bmi}</span>`;
            outputInfo.innerHTML = "Fokus pada makanan tinggi kalori dan nutrisi seperti daging merah, kacang-kacangan, produk susu penuh lemak, dan alpukat. Tambahkan smoothie dengan protein tinggi dan latihan kekuatan seperti angkat beban untuk meningkatkan massa otot.";
        } else if (bmi >= 17.0 && bmi < 18.5) {
            outputStatus.innerHTML = "Kurus";
            outputNumber.innerHTML = `<span>${bmi}</span>`;
            outputInfo.innerHTML = "Pilih makanan seimbang dengan penekanan pada protein seperti ayam, ikan, dan telur, serta karbohidrat kompleks dari biji-bijian utuh. Lakukan latihan resistensi seperti angkat beban untuk membangun otot, serta olahraga aerobik ringan untuk kesehatan jantung.";
        } else if (bmi >= 18.5 && bmi < 25.0) {
            outputStatus.innerHTML = "Normal";
            outputNumber.innerHTML = `<span>${bmi}</span>`;
            outputInfo.innerHTML = "Pertahankan keseimbangan nutrisi dengan makan berbagai jenis buah, sayur, protein tanpa lemak, dan lemak sehat. Rutin berolahraga dengan kombinasi latihan kardio seperti berlari atau berenang dan latihan kekuatan seperti yoga atau angkat beban.";
        } else if (bmi >= 25.0 && bmi < 27.0){
            outputStatus.innerHTML = "Gemuk";
            outputNumber.innerHTML = `<span>${bmi}</span>`;
            outputInfo.innerHTML = "Kurangi asupan kalori dengan menghindari makanan olahan dan gula berlebih. Fokus pada sayuran, protein tanpa lemak, dan biji-bijian utuh. Tingkatkan aktivitas fisik dengan olahraga kardio seperti berjalan cepat atau bersepeda, dan tambahkan latihan kekuatan untuk membakar lemak dan memperkuat otot.";
        } else {
            outputStatus.innerHTML = "Obesitas";
            outputNumber.innerHTML = `<span>${bmi}</span>`;
            outputInfo.innerHTML = "Pilih makanan rendah kalori dengan banyak sayuran, buah, dan protein tanpa lemak. Kurangi karbohidrat sederhana dan lemak jenuh. Mulailah dengan aktivitas fisik ringan seperti berjalan atau berenang, dan secara bertahap tingkatkan intensitas serta tambahkan latihan kekuatan untuk mendukung penurunan berat badan.";
        }
    }

}

