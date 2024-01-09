import prismaClient from "../prisma"; //Importação do Prisma

// Serviço responsável por listar os clientes
class ListCustomersService {

    // Método 'execute' para obter a lista de clientes
    async execute() {

        // Consulta todos os clientes armazenados no banco de dados utilizando o Prisma
        const customers = await prismaClient.customer.findMany()
        // Retorna a lista de clientes obtida da consulta ao banco de dados
        return customers;
    }
}

// Exporta o serviço para ser utilizado por outros módulos da aplicação
export { ListCustomersService }