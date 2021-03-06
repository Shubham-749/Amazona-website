import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import userRoute from './routes/userRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));
//catch any error mongodb url and show in console
//now we are connected to mongodb

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product)
        res.send(product);
    else res.status(404).send({ msg: "Product Not Found." })
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => { console.log("Server started at http://localhost:5000") });