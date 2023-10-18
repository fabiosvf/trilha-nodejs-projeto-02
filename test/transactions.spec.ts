import { it, afterAll, beforeAll, describe } from 'vitest';
import request from 'supertest';
import { app } from '../src/app';

describe('Transactions routes', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be able to create a new transaction', async () => {
    const response = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 3000,
        type: 'credit',
      })
      .expect(201);

    console.log(response.get('Set-Cookie'));
  });

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/trasactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      });

    const cookies = createTransactionResponse.get('Set-Cookie');
    console.log(cookies);
    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200);

    console.log(listTransactionsResponse.body);
  });
});
