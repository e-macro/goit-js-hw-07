const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", checkLogin);

function checkLogin(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        alert("All form fields must be filled in");
        return;
    }
    const formData = {
    email: email,
    password: password
  };

  console.log(formData);

    form.reset();
}

