const textInput = document.getElementById('name-input');
const output = document.getElementById('name-output');
textInput.addEventListener('input', () => {
  const trimmedValue = textInput.value.trim();

  if (trimmedValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = trimmedValue;
  }
});
