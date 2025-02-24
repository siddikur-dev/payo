document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("login-number").value;
    const mobilePin = document.getElementById("login-pin").value;
    // const convert = parseInt(mobilePin);
    if (mobileNumber.length === 11) {
      if (mobilePin.length === 4) {
        // console.log("Succefully Login");
        window.location.href = "main.html";
      } else {
        alert("Please valid pin");
      }
    } else {
      alert("Please valid number");
    }
  });
