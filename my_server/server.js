const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes/routes')
const dotenv = require('dotenv')
const connectMongodb = require('./config/db')

dotenv.config()

connectMongodb();

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', router)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


