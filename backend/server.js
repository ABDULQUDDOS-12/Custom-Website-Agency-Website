const express = require('express')
const cors = require('cors'); 
const appRoute = require('./routes/routes.js')
const app = express();
app.use(cors());
const PORT = process.env.PORT||5000;
app.use(express.json())
app.use('/api',appRoute)
app.listen(PORT,()=>{
    console.log("Server is started ....!")
})