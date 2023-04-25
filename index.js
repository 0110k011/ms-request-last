import express from 'express';
import cors from 'cors';

var corsOptions = {
    origin: ['http://192.168.100.2:3000', "http://localhost:3000"],
    optionsSuccessStatus: 200
};
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

//app.listen('9000', () => console.log('Server Listening ON port 9000...'));