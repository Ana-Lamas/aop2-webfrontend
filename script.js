document.addEventListener("DOMContentLoaded", function() {

    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function(event) {
        
        event.preventDefault(); 
        
        contactForm.reset();
        
        successMessage.style.display = "block";
        
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 5000);
    });

});