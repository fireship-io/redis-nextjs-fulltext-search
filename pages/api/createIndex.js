import { createIndex } from '../../lib/redis';

export default async function handler(req, res) {
  await createIndex();
  res.status(200).send('ok');
}
