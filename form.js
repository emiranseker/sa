
const form = document.getElementById("myForm");

const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get("fname");
    const lastName = formData.get("lname");

    displayFormData(firstName, lastName);

    form.reset();
});

function displayFormData(firstName, lastName) {

    const message = `Ad: ${firstName}\nSoyad: ${lastName}`;

    output.textContent = message;
}
