import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string
    email: string
}

class CreateCustomerService {
    async execute({ name, email }: CreateCustomerProps) {

        if (!name || !email) {
            throw new Error('Preencha todos os Campos')
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export { CreateCustomerService }