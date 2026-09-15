const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        status.textContent = 'Por favor, completa todos los campos.';
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Ingresa un correo válido.';
        return;
    }

    const button = form.querySelector('button');
    button.disabled = true;
    status.textContent = 'Enviando...';
    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            body: new URLSearchParams({ name, email, message })
        });
        const result = await response.json();
        status.textContent = result.message;
        if (response.ok) form.reset();
    } catch (error) {
        status.textContent = 'No se pudo enviar. Inténtalo de nuevo.';
    } finally {
        button.disabled = false;
    }
});

let currentIndex = 0;
const images = document.querySelectorAll('#carousel img');

function changeImage(step) {
    images[currentIndex].hidden = true;
    currentIndex = (currentIndex + step + images.length) % images.length;
    images[currentIndex].hidden = false;
    document.getElementById('slide-number').textContent = `${currentIndex + 1} / ${images.length}`;
}

document.getElementById('prev').addEventListener('click', () => changeImage(-1));
document.getElementById('next').addEventListener('click', () => changeImage(1));
