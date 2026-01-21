let generatedUserId = "";

function register() {
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;

  if (mobile.length !== 10 || email === "") {
    alert("Enter valid mobile number and email");
    return;
  }

  // Generate unique ID
  generatedUserId = "UID" + Math.floor(100000 + Math.random() * 900000);

  document.getElementById("userIdMsg").style.display = "block";
  document.getElementById("userIdMsg").innerText =
    "Your Unique ID: " + generatedUserId +
    " (Sent to Email & Mobile)";

  // Show Step 2
  document.getElementById("unlockBox").style.display = "block";
}
