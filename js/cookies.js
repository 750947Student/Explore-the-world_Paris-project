const cookiePopup = document.querySelector(".cookie-banner");
const cookieButton = document.getElementById("acceptCookies");

if (cookiePopup && cookieButton) {
  cookiePopup.style.display = "block";

  cookieButton.addEventListener("click", () => {
    cookiePopup.style.display = "none";
  });
}
