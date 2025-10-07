// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize EmailJS
(function() {
  emailjs.init("jC4Cl-RWHFe7Dz2JL"); // ⬅️ Replace with your EmailJS Public Key
})();

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    time: new Date().toLocaleString()
  };

  emailjs.send("service_loho4ah", "template_elhbmbj", params)
    .then(() => {
      alert("✅ Thank you! Your message has been sent successfully.");
      e.target.reset();
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("❌ Failed to send message. Please try again later.");
    });
});

// Reveal sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(sec => observer.observe(sec));
