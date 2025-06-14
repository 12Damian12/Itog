const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    if (button.textContent === 'Нажми меня') {
        button.textContent = 'Спасибо!';
    } else {
        button.textContent = 'Нажми меня';
    }
});
