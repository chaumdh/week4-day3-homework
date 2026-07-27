/* contact method options */
contactMethodHandler();

function contactMethodHandler() {
    var contactMethod = document.getElementById("contact-method");
    contactMethod.addEventListener("click", (event) => {
        displayInputElements(event);
    });
}

function displayInputElements(event) {
    var selectedMethod = event.target.value;
    console.log(selectedMethod);

    var label = document.getElementById("contact-label");
    var input = document.getElementById("contact-input");
    if (selectedMethod == "Email") {
        label.innerHTML = "Enter your email";
        input.name = "email";
    } else {  
        label.innerHTML = "Enter your phone";
        input.name = "phone";
    }
    
    label.style.display = 'block';
    input.style.display = 'block';
}