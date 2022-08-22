import { dbConnect } from "./dbconnect.js";

export function getMessages(req,res){
    const db = dbConnect();
    db.collection('messages').get()
    .then(collection =>{
        console.log(collection);
        const messages = collection.docs.map(doc => doc.data())
        res.send(messages)
    })
    .catch(err => handleError(err,res))
}

export function addMessage(req, res) {
    const db = dbConnect();
    const message = req.body;
    const timestamp = FieldValue.serverTimestamp();
    const newMessage = {...message, timestamp};
    db.collection('messages').add(newMessage)
        .then((collection) => {
            res.send(collection);
        })
        .catch (err => handleError(err,res))
}
    

function handleError(err,res){
    console.error(err)
    res.status(500).send(err)
}

