import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true,
    reconnectStrategy: () => 1000
  }
});

client.on("error", (err) => {
  console.error("Redis Error:", err);
});

await client.connect();

console.log("Redis connected");

export default client;
