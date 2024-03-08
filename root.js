function submitForm() {
    var submitButton = document.querySelector('.submit-button');

    // Change button state to loading for 2 seconds
    submitButton.innerHTML = 'Loading...';
    submitButton.disabled = true;

    setTimeout(function () {
        // Reset button state after 2 seconds
        submitButton.innerHTML = 'Submit';
        submitButton.disabled = false;
    }, 2000);
}
