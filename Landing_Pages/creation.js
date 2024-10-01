import axios from 'axios';

// Ajouter un utilisateur
const newUser = {
  name: 'John Doe',
  email: 'johndoe@example.com'
};

axios.post('http://localhost:3000/users', newUser)
  .then(response => {
    console.log(response.data); // Affichez le succès de l'ajout
  })
  .catch(error => {
    console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
  });
