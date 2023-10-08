import { FastifyInstance } from 'fastify';
import { knex } from '../database';
// import crypto from 'node:crypto';

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await knex('transactions')
      .where('amount', 1000)
      .select('*');

    return transaction;
  });
}
