import express from 'express';
import mongoose from 'mongoose';
import seekerRouter from './routes/seekerRoutes.js';
import guruRouter from './routes/guruRoutes.js';

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://Jayesh0987:60spakIJdSpAUBD6@cluster0.av4pot6.mongodb.net/")
.then(()=> console.log("Database connected"))
.catch((err) => console.log(err.message));

app.use('/guru', guruRouter);
app.use('/seeker', seekerRouter);

app.listen(8000, ()=>console.log("Server started on port 8000"));
