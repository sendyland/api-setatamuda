import express from "express";
import db from "./config/database.js";

const app = express ();

try {
    await db.authenticate();
    console.log('Database Connect..')
} catch (error) {
    console.error('Connection error:', error);
}

app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(5000, () => console.log('Post 5000 Running'));