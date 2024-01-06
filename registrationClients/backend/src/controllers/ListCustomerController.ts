import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from '../services/ListCustomerService';

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) { 
        const listCustomerService = new ListCustomersService();

        try {
            const customers = await listCustomerService.execute();
            reply.send(customers);
        } catch (error) {
            reply.status(500).send({ error: 'Internal Server Error' });

        }
    }
}

export { ListCustomersController }
