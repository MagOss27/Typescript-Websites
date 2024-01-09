import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from '../services/ListCustomerService';

// Controlador responsável por lidar com a listagem de clientes
class ListCustomersController {
    // Método 'handle' para processar a requisição de listagem de clientes
    async handle(request: FastifyRequest, reply: FastifyReply) {
        // Cria uma instância do serviço 'ListCustomersService'
        const listCustomerService = new ListCustomersService();

        try {
            // Chama o método 'execute' do serviço para obter a lista de clientes
            const customers = await listCustomerService.execute();
            // Envia a lista de clientes de volta como resposta à requisição
            reply.send(customers);
        } catch (error) {
            // Em caso de erro, responde com um status de erro 500 e uma mensagem de erro genérica
            reply.status(500).send({ error: 'Internal Server Error' });

        }
    }
}

// Exporta o controlador para ser utilizado em outras partes do código
export { ListCustomersController }
