document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', function () {
        // Перевіряємо, чи прокрутили до низу сторінки
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.style.position = 'fixed'; // Фіксуємо футер
            footer.style.bottom = '0'; // Приклеюємо до низу
        } else {
            footer.style.position = 'relative'; // Повертаємо до відносного позиціювання
        }
    });
});
