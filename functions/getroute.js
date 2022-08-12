import { dbConnect } from "./dbconnect";
import cors from "cors";

export function getMessages(req,res){
    const db = dbConnect();
    db.collection('messages').get()
    .then(collection =>{
        const messages = collection.docs.map(doc.data())
        res.send(messages)
    })
    .catch(err => handleError(err,res))
}



function handleError(err,res){
    console.error(err)
    res.status(500).send(err)
}
