//const express = require ('express')
import express from "express"

//const bodyparser = require('body-parser')
import bodyparser from 'body-parser'

// import dotenv from 'dotenv'
// const env = dotenv.config();


//const cors = require('cors');
import cors from 'cors'

//const router = require('./router/router)
import {router} from "./router/router";

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(cors())
app.use('/', router)

async function init() {
     app.listen(`9000`, () => {  //server starts listening  at port
        console.log(`Now listening on port ${`9000`}`);
    });
}
init();