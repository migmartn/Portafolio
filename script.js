const darkModeButton = document.getElementById('dark-mode');
const lightModeButton = document.getElementById('light-mode');

darkModeButton.addEventListener('click', () => {
    // Agregar lógica para cambiar a modo oscuro aquí
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
});

lightModeButton.addEventListener('click', () => {
    // Agregar lógica para cambiar a modo claro aquí
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
});
