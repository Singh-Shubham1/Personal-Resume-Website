// Dark Mode

const themeBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    else{
        localStorage.setItem("theme","light");
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

});

// Typing Animation

const texts = [
    "Web Developer",
    "Data Analyst",
    "AI Enthusiast",
    "CSE Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type, 1200);

    }
    else{
        setTimeout(type, 120);
    }

})();

// Contact Form

document.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();

});

// Scroll To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});