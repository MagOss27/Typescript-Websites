import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

// Função responsável por definir as rotas da aplicação
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    // Rota de teste para verificar o funcionamento básico do servidor
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })
    // Rota para lidar com requisições POST para criar um novo cliente
    fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
        // Chama o controlador 'CreateCustomerController' para lidar com a requisição
        return new CreateCustomerController().handle(request, reply)
    })
    // Rota para lidar com requisições GET para listar clientes existentes
    fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
        // Chama o controlador 'ListCustomersController' para lidar com a requisição
        return new ListCustomersController().handle(request, reply)
    })
    // Rota para lidar com requisições DELETE para excluir um cliente existente
    fastify.delete('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
        // Chama o controlador 'DeleteCustomerController' para lidar com a requisição
        return new DeleteCustomerController().handle(request, reply)
    })
}