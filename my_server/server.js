const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use('/', router)
