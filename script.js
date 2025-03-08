
// Contact Form Submission using mailto:
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:siriguduru9@gmail.com?subject=Contact from " + name + "&body=" + message + " (Email: " + email + ")";
    window.location.href = mailtoLink;

    return false; // Prevent actual form submission
}
document.querySelectorAll("nav ul li a").forEach(function (link) {
    link.onclick = function (event) {
        event.preventDefault();
        let targetId = this.getAttribute("href"); // Get the target section ID
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    };
});
document.querySelector(".contact-btn").onclick = function (event) {
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
};
