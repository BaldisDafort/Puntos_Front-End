
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await loginUser(username, password);
                // response contiens le token, le token contiens l'user. Il faut utiliser jwt (l'installer avec npm i avant) pouir decoder le token, et extraire l'utilisateur.
                window.location.href = "../Menu/Menu.html";
                console.log(response);
            } catch (error) {
                alert(error.message || 'Erreur lors de la connexion');
            }
        });
    }
});
