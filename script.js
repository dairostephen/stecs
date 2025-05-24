// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('open');
}

// Simple slider
let slideIndex = 0;
function showTestimonial() {
  const slides = document.querySelectorAll('.testimonial');
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = 'block';
}
setInterval(showTestimonial, 4000);

function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('open');
}

function closePopup() {
  document.getElementById("newsletterPopup").style.display = "none";
}

window.onload = function () {
  setTimeout(function () {
    document.getElementById("newsletterPopup").style.display = "flex";
  }, 5000); // Popup appears after 5 seconds
};

document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Normally, you'd send data to backend here. Simulating download:
  alert("Thanks! Your AI Toolkit is downloading...");
  window.open("link-to-your-toolkit.pdf", "_blank"); // Replace with actual PDF link
  closePopup();
});

//recieves messages directly to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbza-UuyA9l74JoCcHzLOChN2TBip3d1X_Hqmr0ucNKQ4u5ZBR4tRxVXSmls3WyxMgiwIA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully";
        msg.style.color = "black";
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})