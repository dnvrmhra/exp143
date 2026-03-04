import express from "express";
import client from "./redisClient.js";

const app = express();
app.use(express.json());

let seats = 100;

app.get("/", (req, res) => {
  res.send("Ticket Booking API is running");
});

app.post("/api/book", async (req, res) => {

    const lockKey = "seat_lock";

    const lock = await client.set(lockKey, "locked", {
        NX: true,
        EX: 5
    });

    if (!lock) {
        return res.status(429).json({
            success: false,
            message: "Another booking is in progress"
        });
    }

    try {

        if (seats <= 0) {
            return res.json({
                success: false,
                message: "Sold Out"
            });
        }
        seats--;
        const bookingId = Date.now();
        res.json({
            success: true,
            bookingId: bookingId,
            remaining: seats
        });
    } finally {
        await client.del(lockKey);
    }
});

const PORT=process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Booking system running on port ${PORT}");
});
