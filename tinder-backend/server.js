import express from "express"
import mongoose from "mongoose"
import Cards from './dbCards.js'
import Cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:NrUU9QZ1JqKxzxpk@cluster0.q3fyb.mongodb.net/tinderdb?retryWrites=true&w=majority';


app.use(express.json());

app.use(Cors());
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})






app.get("/", (req,res) => res.status(200).send("Saksham World"));


app.post("/tinder/cards" ,(req,res,next) =>{
    const dbCard = req.body;


    Cards.create(dbCard, (err, data) =>{
        if (err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});
app.get("/tinder/cards",(req,res) =>{
    Cards.find((err,data) => {
        if (err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });

});

app.listen(port, () => console.log(`listening to ${port}`));