const functions = require("firebase-functions");
import  express from 'express';
import cors from 'cors';
import {getMessages} from "./getroute.js";


const app = express()
const port = 3003
app.use(express.json())
app.use(cors())

app.get('/messages', getMessages)
app.post('/messages', addMessage)

app.listen(port, () => {
    console.log('listening')
})
export const api = functions.https.onRequest(app)