import functions from "firebase-functions";
import express from "express";
import cors from 'cors';
import { getMessages, addMessage } from "./getroute.js";


const app = express()
app.use(express.json())
app.use(cors())

app.get('/messages', getMessages)
app.post('/messages', addMessage)

export const api = functions.https.onRequest(app)