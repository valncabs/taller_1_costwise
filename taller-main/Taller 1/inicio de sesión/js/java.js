document.getElementById('Inicio de sesión').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const users = data.users;
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                alert('Inicio de sesión exitoso!');
                if (user.username === 'admin') {
                    window.location.href = 'pagina_admin/Administrador.html';
                } else if (user.username === 'persona1') {
                    window.location.href= 'pagina_usuario/Persona1.html';
            } else {
                errorMessage.textContent = 'Usuario o contraseña incorrecto';
            }
}})
        .catch(error => {
            console.error('Error al obtener el JSON:', error);
            errorMessage.textContent = 'Error al iniciar sesión. Vuelva a intentarlo más tarde.';
        });
});

