import axios from 'axios';

// On indique à Laravel qu'il s'agit de requêtes AJAX
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Indispensable si tu prévois d'utiliser Laravel Sanctum pour l'authentification
axios.defaults.withCredentials = true; 

// (Optionnel) Tu peux définir l'URL de base de ton API ici
// axios.defaults.baseURL = 'http://localhost:8000/api';

export default axios;