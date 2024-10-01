import axios from 'axios';

// Requête GET vers le back-end
axios.get('http://localhost:27017/DB1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erreur lors de la requête', error);
  });
