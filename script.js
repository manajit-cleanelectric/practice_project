document.addEventListener('DOMContentLoaded', function () {
    let message="Manjit";
    alert(`Hello ${message}!`);

  const button = document.querySelector('#showMessage');
  const output = document.querySelector('#output');

  button.addEventListener('click', function () {
    const message = 'Hello from external JavaScript!';
    output.textContent = message;
  });
});
