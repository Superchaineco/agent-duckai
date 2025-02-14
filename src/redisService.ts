import { createClient } from 'redis';

require('dotenv').config();
const redisClient = createClient({
  url: process.env.REDIS_PUBLIC_URL + '?family=0'
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

redisClient.connect();

export default redisClient;
