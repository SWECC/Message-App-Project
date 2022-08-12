const functions = require("firebase-functions");
import  express  from "express";
import cors from 'cors';
import { getMessages, addMessage } from "./getroute";


const app = express()
app.use(express.json())
app.use(cors())

app.get('/messages', getMessages)
app.post('/messages', addMessage)

exports.api = functions.https.onRequest(app)