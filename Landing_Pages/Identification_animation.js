const getUsers = () => {
    // Récupérer les utilisateurs
axios.get('http://localhost:3000/users')
.then(response => {
  console.log(response.data); // Affichez les utilisateurs récupérés
})
.catch(error => {
  console.error('Erreur lors de la récupération des utilisateurs', error);
});

}

// Sélectionner le formulaire
const form = document.getElementById('login-form');

// Ajouter un écouteur d'événement à la soumission du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupérer les valeurs des champs du formulaire
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Créer un objet utilisateur
    const user = {
        username: username,
        password: password
    };

    // Envoyer une requête POST avec Axios pour enregistrer l'utilisateur
    axios.post('http://localhost:3000/users', user)
        .then(response => {
            console.log('Utilisateur ajouté avec succès:', response.data);
            // Optionnel : rediriger l'utilisateur vers une autre page ou afficher un message de succès
        })
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        });
});


getUsers();