document.getElementById('feedbackForm').onsubmit = function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !message) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Введите корректный адрес электронной почты.');
      return;
    }
    
    alert('Форма успешно отправлена!');
    // Здесь можно добавить код для отправки данных на сервер
};
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменить стандартное поведение

    // Сбросить ошибки
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Получение значений полей
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let valid = true;

    // Проверка имени
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Имя обязательно для заполнения';
        valid = false;
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Некорректный формат email';
        valid = false;
    }

    // Проверка телефона
    if (phone.trim() === '') {
        document.getElementById('phoneError').textContent = 'Телефон обязателен для заполнения';
        valid = false;
    }

    // Если все поля валидны, можно выполнить отправку формы
    if (valid) {
        alert('Форма успешно отправлена'); // Тут можно добавить код для отправки
    }
});
function initMap() {
    const officeLocation = { lat: 55.7558, lng: 37.6173 }; // Координаты для Московского офисa

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: officeLocation,
    });

    const marker = new google.maps.Marker({
        position: officeLocation,
        map: map,
        title: "Офис нашей компании",
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Название компании</h3><p>Адрес: ул. Пример, д. 1</p>",
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}
 defer
    src="https://maps.googleapis.com/maps/api/js?key=ВАШ_КЛЮЧ_API&callback=initMap"