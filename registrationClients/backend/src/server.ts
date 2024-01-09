import Fastify from "fastify"; // Importa o framework Fastify para criar o servidor
import { routes } from "./routes"; // Importa as rotas da aplicação
import cors from '@fastify/cors'; // Importa o pacote para lidar com CORS (Cross-Origin Resource Sharing)

// Cria uma instância do Fastify chamada 'app' e ativa o logger
const app = Fastify({ logger: true })

// Configura um manipulador de erros global para a aplicação
app.setErrorHandler((error, request, reply) => {
    // Em caso de erro, responde com um código de status 400 e uma mensagem de erro no formato JSON
    reply.code(400).send({ message: error.message });
});

// Função 'start' assíncrona para iniciar o servidor
const start = async () => {

    await app.register(cors); // Registra o middleware para lidar com CORS
    await app.register(routes); // Registra as rotas definidas no arquivo 'routes'

    try {
        await app.listen({ port: 3333 })   // Inicia o servidor na porta 3333
    } catch (err) {
        process.exit(1) // Em caso de erro ao iniciar o servidor, finaliza o processo
    }
}

start(); // Chama a função 'start' para iniciar a aplicação
