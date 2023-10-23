import express from "express";
import {port} from './utils/config.js'

const app = express();

app.listen(port, ()=>{
    console.log(`Backend Server is running at port ${port}`)
})
