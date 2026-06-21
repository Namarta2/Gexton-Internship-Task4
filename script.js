
const subscriptionForm = document.getElementById("subscriptionForm");
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("userEmail");

subscriptionForm.addEventListener("submit", function(event) {

    // Prevent page refresh when button is clicked
    event.preventDefault();

    const nameValue = userNameInput.value.trim();
    const emailValue = userEmailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(nameValue === "" || emailValue === ""){
    
    alert("Please fill in all fields before submitting.");

}
else if(!emailPattern.test(emailValue)){

    alert("Please enter a valid email.");
}
else{

    alert("Thank you for subscribing!");

    userNameInput.value = "";
    userEmailInput.value = "";

}

});


const imagesArray = [
    "img1.jpg",
    "img2.jpg",
    "image2.jpg"
];

const imgElement = document.getElementById("carouselImage");
const allDots = document.querySelectorAll(".dot");

function changeImage(index) {

    imgElement.style.opacity = "0.3";

    setTimeout(function() {

        imgElement.setAttribute("href", imagesArray[index]);

        imgElement.style.opacity = "1";

    }, 200);

    allDots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    // Update active dot after image change
    allDots[index].classList.add("active");
}