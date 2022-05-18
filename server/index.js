// server/index.js
import 'dotenv/config'
import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';

import dishesRouters from './routes/dishes.route.js'
import menuRouter from './routes/menu.route.js'

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/dishes',dishesRouters);
app.use('/menus', menuRouter);

/**
 * create .env file at the project root folder and add below variable
 * CONNECTION_URL = `mongodb+srv://{add_user_name}:{add_db_pass}@cluster0.egxjs.mongodb.net/{collection_name}?retryWrites=true&w=majority`
 * Details of what .env is: 
 * https://www.youtube.com/watch?v=17UVejOw3zA&ab_channel=TheCodingTrain
 * Details:https://www.npmjs.com/package/dotenv
 */

const CONNECTION_URL = process.env.CONNECTION_URL
//connect to https://cloud.mongodb.com/
mongoose.connect(CONNECTION_URL)
  .then(() => { app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)) })
  .catch((error) => { console.log(error)});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});