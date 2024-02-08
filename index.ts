import fastify from 'fastify'
import fastifyRedis from '@fastify/redis';

const server = fastify({
    logger: true
});

// Make connection with Redis server
server.register(fastifyRedis, {
    url: 'redis://127.0.0.1:6379'
});

// Get all redis key values from Redis server
server.get('/', async function handler (request: any, reply) {
    const { redis } = server
    let result = redis.get('Test', (err, val) => {
        return err || val;
    });
    return { result }
});

// Run web server
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});