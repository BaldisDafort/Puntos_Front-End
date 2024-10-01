// import axios from 'axios';

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
getUsers();