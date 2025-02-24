function toggleMenu()
  {
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector("hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
// JavaScript for form handling and validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation check
    if (name === "" || email === "" || message === "") {
        document.getElementById("errorMessage").style.display = "block"; 
        document.getElementById("formMessage").style.display = "none"; 
    } else {
        // If all fields are filled, show success message
        document.getElementById("formMessage").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
        
        // Optionally, you can clear the form after submission
        document.getElementById("contactForm").reset();
    }
});

