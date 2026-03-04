import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true,
    rejectUnauthorized: false
  }
});

client.on("error", (err) => console.log("Redis Error:", err));

await client.connect();

console.log("Redis connected");

export default client;
