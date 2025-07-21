const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formData);
  e.currentTarget.reset();
}
