
document.addEventListener('DOMContentLoaded', function () {
  const authForm = document.getElementById('auth-form');
  if (authForm) {
      authForm.addEventListener('submit', async function (event) {
          event.preventDefault();
          
          const email = document.getElementById('email').value;
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;
          const checkPassword = document.getElementById('check-password').value;

          if (password !== checkPassword) {
              alert('Les mots de passe ne sont pas identiques');
              return;
          }

          try {
              await addUser(email, username, password);
              window.location.href = "./index.html";
          } catch (error) {
              alert(error.response?.data || 'Erreur lors de l\'inscription');
          }
      });
  }
});
