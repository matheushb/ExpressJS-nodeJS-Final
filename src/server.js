import express from 'express';
import * as dotenv from 'dotenv';
import router from './userRouter.js';

dotenv.config();
const app = express();

app.use('/users', router);

app.get('/', (req, res) => {res.send('Mainpage')})

const port = process.env.PORT;
app.listen(port, console.log(`Server running on http://localhost:${port}`))