document.addEventListener("DOMContentLoaded", function () {

  const cookieBanner = document.getElementById("cookieBanner");
  const acceptButton = document.getElementById("acceptCookies");

  // ✅ Show banner only if not accepted yet
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block";
  }

  // ✅ Hide banner when user clicks Accept
  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

});
