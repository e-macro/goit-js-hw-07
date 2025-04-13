const textInput = document.querySelector("#name-input");
const textName = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const newName = event.currentTarget.value.trim();
    textName.textContent = newName === '' ? 'Anonymous' : newName;
})