document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".submit");
    const popupContainer = document.querySelector(".popup-container");
    const closeButton = document.querySelector(".close-btn");

    // Pop-up initially hidden
    popupContainer.style.display = "none";

    submitButton.addEventListener("click", function() {
        // Redirect ke WhatsApp
        window.location.href = "https://wa.me/6287889";
    });

    closeButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
        submitButton.style.display = "block";
    });
});
