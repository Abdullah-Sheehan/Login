const password = "HelloWorld";
const websiteLink = "https://youtube.com";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyVcUIO4h1yjgMA_GqIYwPc6dJkSUDlVbiyBp0Z-4fZAVbU6cNqPpn1Pmw2cW1BC-pkGA/exec";
const form = document.forms["login"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const passValue = document.querySelector(".pass").value;
  if (passValue == password) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) });
    document.querySelector(".btn").innerHTML = "Checking...";
    setTimeout(function () {
      window.location = websiteLink;
    }, 3000);
  } else {
    alert("Password Incorrect.");
  }
});
