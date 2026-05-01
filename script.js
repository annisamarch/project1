
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".submit");
    const popupContainer = document.querySelector(".popup-container");
    const closeButton = document.querySelector(".close-btn");

    // Pop-up initially hidden
    popupContainer.style.display = "none";

    submitButton.addEventListener("click", function() {
        popupContainer.style.display = "flex";
        submitButton.style.display = "none";
    });

    closeButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
        submitButton.style.display = "block"; // balik ke kondisi awal
    });
});
