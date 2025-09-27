// Pop Up for Contact


const contactPopUp = document.getElementById("popup");
const openButton = document.getElementById("contact-button");
const closeButton = document.getElementById("close-button");

openButton.addEventListener("click", ()=>{ 
contactPopUp.style.display = "flex"; });

closeButton.addEventListener("click", ()=>{ 
contactPopUp.style.display = "none"; });

// Submit Button stops from Closing Instantly 

document.getElementById("contact-button").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("popup").style.display = "flex";
});

// Contact Menu Animation Activates!

openButton.addEventListener("click", ()=> {
    contactPopUp.classList.add("show");
});
closeButton.addEventListener("click", ()=> {
    contactPopUp.classList.remove("show");
});

// Back-to-Top

const backHome = document.getElementById("back-to-top");

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 100) {
        backHome.classList.add("show");
    }else{
        backHome.classList.remove("show");
    }
});
backHome.addEventListener("click", ()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
});