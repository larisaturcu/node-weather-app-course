const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector("#message1");
const messageTwo = document.querySelector("#message2");

messageOne.textContent = "Loading ... "
messageOne.textContent = " "
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = searchElement.value;
    fetch('/weather2?search=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageTwo.textContent = data.forecast;
            }
        });
    });

})