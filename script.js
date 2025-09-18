// Function for "Hire Me" button
function hireMe() {
  // Opens email client with pre-filled subject and body
  window.location.href = "mailto:rjmr@example.com?subject=Hiring Inquiry&body=Hi RJ, I’d like to hire you for a project.";
}

// Function for "Contact Me" button
function contactMe() {
  // Redirects to contact page
  window.location.href = "contact.html";
}

// Example: Alert when page loads
window.onload = function () {
  console.log("DevFolio portfolio loaded successfully 🚀");
};

// Function for "Hire Me" button
function hireMe() {
  window.location.href = "hire.html"; // go to Hire page
}

// Function for "Contact Me" button
function contactMe() {
  window.location.href = "contact.html"; // go to Contact page
}

// Handle Hire Form submission
document.addEventListener("DOMContentLoaded", function () {
  const hireForm = document.querySelector(".hire-form");
  if (hireForm) {
    hireForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your hire request has been sent.");
      hireForm.reset();
    });
  }
});
