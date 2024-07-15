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