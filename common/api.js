/**
 * api.js
 *
 * Ce fichier définit un client API pour interagir avec le backend Express.
 * Il utilise Axios pour réaliser les requêtes HTTP et gère de manière professionnelle
 * les endpoints (récupération des utilisateurs, ajout d'un utilisateur et authentification).
 *
 * Le préfixe de l'URL du backend est codé en dur (ici "http://localhost:3000").
 *
 * Un utilitaire de gestion du token JWT est inclus pour stocker et récupérer le token
 * dans le localStorage. Ce token est automatiquement ajouté aux en-têtes de requête,
 * ce qui permet d'accéder aux routes protégées par le middleware d'authentification.
 */

// Le préfixe de l'URL du backend (à modifier si nécessaire)
const API_BASE_URL = 'http://localhost:3000';

// Clé utilisée pour stocker le token JWT dans le localStorage
const TOKEN_STORAGE_KEY = 'jwtToken';

/**
 * Utilitaire de gestion du token JWT.
 * Permet de stocker, récupérer et supprimer le token, et de mettre à jour les en-têtes par défaut d'Axios.
 */
const tokenManager = {
  /**
   * Stocke le token JWT dans le localStorage et le configure pour Axios.
   * @param {string} token - Le token JWT à stocker.
   */
  setToken(token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  /**
   * Récupère le token JWT depuis le localStorage.
   * @returns {string|null} Le token JWT ou null s'il n'est pas défini.
   */
  getToken() {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  },
  /**
   * Supprime le token JWT du localStorage et des en-têtes d'Axios.
   */
  clearToken() {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    delete axios.defaults.headers.common['Authorization'];
  }
};

/**
 * Retourne les en-têtes d'authentification si un token est présent.
 * @returns {Object} Objet contenant l'en-tête Authorization ou un objet vide.
 */
function getAuthHeaders() {
  const token = tokenManager.getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/**
 * Récupère la liste de tous les utilisateurs.
 * @returns {Promise<Array>} Une promesse qui résout avec la liste des utilisateurs.
 */
async function getUsers() {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      headers: getAuthHeaders()
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    throw error;
  }
}

/**
 * Ajoute un nouvel utilisateur.
 * @param {string} email - L'email de l'utilisateur.
 * @param {string} username - Le nom d'utilisateur.
 * @param {string} password - Le mot de passe en clair.
 * @returns {Promise<Object>} Une promesse qui résout avec la réponse du serveur.
 */
async function addUser(email, username, password) {
  try {
    const payload = { email, username, password };
    const response = await axios.post(`${API_BASE_URL}/users/add`, payload, {
      headers: getAuthHeaders()
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
    throw error;
  }
}

/**
 * Authentifie un utilisateur et stocke le token JWT en cas de succès.
 * @param {string} username - Le nom d'utilisateur.
 * @param {string} password - Le mot de passe en clair.
 * @returns {Promise<Object>} Une promesse qui résout avec la réponse du serveur, incluant le token.
 */
async function loginUser(username, password) {
  try {
    const payload = { username, password };
    const response = await axios.post(`${API_BASE_URL}/users/login`, payload);
    if (response.data && response.data.token) {
      tokenManager.setToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'authentification:', error);
    throw error;
  }
}

/**
 * Objet regroupant l'ensemble des méthodes de l'API pour une utilisation dans le frontend.
 */
const api = {
  getUsers,
  addUser,
  loginUser,
};

// Exposer l'objet api dans le contexte global pour y accéder facilement depuis votre application
window.api = api;
