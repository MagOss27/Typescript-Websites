import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

// Controlador responsável por lidar com a exclusão de um cliente
class DeleteCustomerController {
    // Método 'handle' para processar a requisição de exclusão de cliente
    async handle(request: FastifyRequest, reply: FastifyReply) {
        // Extrai o parâmetro 'id' da query da requisição
        const { id } = request.query as { id: string }
        // Cria uma instância do serviço 'DeleteCustomerService'
        const customerService = new DeleteCustomerService();
        // Chama o método 'execute' do serviço para deletar o cliente com o ID fornecido
        const customer = await customerService.execute({ id })
        // Envia a resposta da exclusão do cliente de volta ao cliente que fez a requisição
        reply.send(customer);
    }
}

// Exporta o controlador para uso em outras partes do código
export { DeleteCustomerController }