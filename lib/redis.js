import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

class Car extends Entity {}
let schema = new Schema(
  Car,
  {
    make: { type: 'string' },
    model: { type: 'string' },
    image: { type: 'string' },
    description: { type: 'string', textSearch: true  },
  },
  {
    dataStructure: 'JSON',
  }
);

export async function createCar(data) {
  await connect();

  const repository = new Repository(schema, client);

  const car = repository.createEntity(data);

  const id = await repository.save(car);
  return id;
}

export async function getCar(id) {
  await connect();

  const repository = new Repository(schema, client);
  return repository.fetch(id);
}

export async function createIndex() {
    await connect();

    const repository = new Repository(schema, client);
    await repository.createIndex()
}


export async function searchCars(q) {
    await connect();

    const repository = new Repository(schema, client);

    const cars = await repository.search()
        .where('make').eq(q)
        .or('model').eq(q)
        .or('description').matches(q)
        .return.all();

    return cars;
}