import prismaClient from "../prisma"; //Importação do Prisma

// Interface para definir a estrutura esperada dos dados para criar um cliente
interface CreateCustomerProps {
    name: string
    email: string
}

// Serviço responsável por criar um novo cliente
class CreateCustomerService {
    // Método 'execute' para realizar a criação do cliente com base nos dados recebidos
    async execute({ name, email }: CreateCustomerProps) {
        // Verifica se os campos 'name' e 'email' estão preenchidos
        if (!name || !email) {

            // Se algum dos campos estiver vazio, lança um erro indicando que todos os campos devem ser preenchidos
            throw new Error('Preencha todos os Campos')
        }

        // Cria um novo cliente no banco de dados usando o Prisma
        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true // Define o status como verdadeiro por padrão ao criar um cliente
            }
        })
        // Retorna o cliente recém-criado
        return customer
    }
}

// Exporta o serviço para ser utilizado por outros módulos da aplicação
export { CreateCustomerService }