function register() {
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;

    if (mobile.length !== 10 || email === "") {
        alert("Enter valid mobile number and email");
        return;
    }

    alert("Registration Successful!");
    document.getElementById("unlockBox").style.display = "block";
}

function shareContacts() {
    alert("10 Contacts shared successfully!");
    unlockProjects();
}

function pay() {
    alert("₹100 Payment Successful! (Demo)");
    unlockProjects();
}

function unlockProjects() {
    document.getElementById("projects").style.display = "block";
}
