// Get a reference to the smaller image by its ID
const smallerImage = document.getElementById("smallerImageFrame");

// Add a click event listener to the smaller image
smallerImage.addEventListener("click", function() {
    // Replace 'your_link_url_here' with the actual URL you want to open in a new tab
    const url = 'https://www.facebook.com/yasmien.gayao';
    
    // Open the URL in a new tab
    window.open(url, '_blank');
});
window.addEventListener(("scroll"),()=>{
    document.querySelector("#Home h1").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY}px`
    document.querySelector("#leftCloud").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`
    document.querySelector("#rightCloud").style.marginRight = `-${window.scrollY}px`
});
// main.js
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the "About," "Portfolio," and "Contact" links
  const aboutLink = document.getElementById("about-link");
  const portfolioLink = document.getElementById("p");
  const contactLink = document.getElementById("c");

  // Get references to the corresponding sections
  const aboutSection = document.getElementById("About");
  const portfolioSection = document.getElementById("Portfolio"); // Add the ID to your "Portfolio" section
  const contactSection = document.getElementById("Contact"); // Add the ID to your "Contact" section

  // Add a click event listener to the "About" link
  aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });

  // Add a click event listener to the "Portfolio" link
  portfolioLink.addEventListener("click", function(event) {
    event.preventDefault();
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });

  // Add a click event listener to the "Contact" link
  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});
document.getElementById("arrow").addEventListener("click", () => {
    // When the arrow image is clicked, scroll to the "About" section
    const aboutSection = document.getElementById("About");
    aboutSection.scrollIntoView({ behavior: "smooth" });
})