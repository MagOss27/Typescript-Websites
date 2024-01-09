import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

// Controlador responsável por lidar com a criação de um cliente
class CreateCustomerController {
    // Método 'handle' que processa a requisição de criação de cliente
    async handle(request: FastifyRequest, reply: FastifyReply) {
        // Extrai os campos 'name' e 'email' do corpo da requisição
        const { name, email } = request.body as { name: string, email: string };

        // Exibe no console o nome e o email recebidos
        console.log(name)
        console.log(email)

        const customerService = new CreateCustomerService()  // Cria uma instância do serviço 'CreateCustomerService'
        const customer = await customerService.execute({ name, email }); // Chama o método 'execute' do serviço para criar um novo cliente

        reply.send(customer) // Envia a resposta da criação do cliente de volta ao cliente que fez a requisição
    }
}

// Exporta o controlador para uso em outras partes do código
export { CreateCustomerController }