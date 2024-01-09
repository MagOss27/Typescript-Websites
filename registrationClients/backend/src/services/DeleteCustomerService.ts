import prismaClient from "../prisma";

// Interface para definir a estrutura esperada dos dados para deletar um cliente
interface DeleteCustomerProps {
    id: string;
}

// Serviço responsável por deletar um cliente
class DeleteCustomerService {

    // Método 'execute' para realizar a exclusão de um cliente com base no ID fornecido
    async execute({ id }: DeleteCustomerProps): Promise<{ message: string }> {
        // Verifica se foi fornecido um ID válido
        if (!id) {

            // Se o ID for inválido, lança um erro indicando uma solicitação inválida
            throw new Error('Solicitação Inválida.');
        }
        // Busca o cliente com base no ID fornecido
        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        });

        // Verifica se o cliente foi encontrado
        if (!findCustomer) {

            // Se o cliente não existir, lança um erro informando que o cliente não existe
            throw new Error('Cliente não Existe!');
        }

        // Deleta o cliente encontrado utilizando o Prisma
        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        });
        // Retorna uma mensagem indicando que a exclusão foi bem-sucedida
        return { message: 'Deletado com Sucesso!' };
    }
}

// Exporta o serviço para ser utilizado por outros módulos da aplicação
export { DeleteCustomerService };
