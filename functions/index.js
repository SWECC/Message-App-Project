const functions = require("firebase-functions");
import  express  from "express";
import { Message } from "firebase-functions/v1/pubsub";


const app = express()






exports.api = functions.https.onRequest(app)