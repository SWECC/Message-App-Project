import functions from "firebase-functions";
import  express from 'express';
import cors from 'cors';

import { getMessages, addMessage } from "./getroute.js";

const app = express()
// const port = 3333;
app.use(express.json())
app.use(cors())

app.get('/messages', getMessages)
app.post('/messages', addMessage)

// app.listen(port, () => {
// console.log('listening')
// })

export const api = functions.https.onRequest(app)