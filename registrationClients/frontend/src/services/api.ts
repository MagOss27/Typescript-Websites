// Importa a biblioteca Axios para fazer requisições HTTP
import axios from 'axios';

// Cria uma instância do Axios com configurações personalizadas
export const api = axios.create({
    // Define a URL base para todas as requisições feitas com essa instância do Axios
    baseURL: 'http://localhost:3333'
})