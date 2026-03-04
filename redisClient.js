import { createClient } from "redis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error("REDIS_URL environment variable not set");
}

const client = createClient({
  url: redisUrl
});

client.on("error", (err) => console.error("Redis Error:", err));

async function connectRedis() {
  await client.connect();
  console.log("Redis connected");
}

await connectRedis();

export default client;
