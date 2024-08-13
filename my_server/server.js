const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes')
const dotenv = require('dotenv')
const connectMongodb = require('./config/db')

dotenv.config()

console.log('MongoDB Connection URL:', process.env.CONNECTION_URL);

connectMongodb();

app.use(express.json());
app.use('/', router)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


