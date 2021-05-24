/* This creates all the OTP input fields dynamically. Change the otp_length variable  to change the OTP Length */
const $otp_length = 4;

const element = document.getElementById('OTPInput');
for (let i = 0; i < $otp_length; i++) {
    let inputField = document.createElement('input'); // Creates a new input element
    inputField.className = "w-12 h-12 bg-gray-100 border-gray-100 outline-none focus:bg-gray-200 m-2 text-center rounded focus:border-blue-400 focus:shadow-outline";
    // Do individual OTP input styling here;
    inputField.style.cssText = "color: transparent; text-shadow: 0 0 0 gray;"; // Input field text styling. This css hides the text caret
    inputField.id = 'otp-field' + i; // Don't remove
    inputField.maxLength = 1; // Sets individual field length to 1 char
    element.appendChild(inputField); // Adds the input field to the parent div (OTPInput)
}

/*  This is for switching back and forth the input box for user experience */
const inputs = document.querySelectorAll('#OTPInput > *[id]');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function (event) {
        if (event.key === "Backspace") {
            inputs[i].value = '';
            if (i !== 0) {
                inputs[i - 1].focus();
            }
        } else if (event.key === "ArrowLeft" && i !== 0) {
            inputs[i - 1].focus();
        } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
            inputs[i + 1].focus();
        }
    });
    inputs[i].addEventListener('input', function () {
        inputs[i].value = inputs[i].value.toUpperCase(); // Converts to Upper case. Remove .toUpperCase() if conversion isnt required.
        if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true;
        } else if (inputs[i].value !== '') {
            inputs[i + 1].focus();
        }
    });

}
