const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.get('/api/suggest', async (req, res) => {
    try{
        const response = await axios.get('http://suggestqueries.google.com/complete/search', {
            params: req.query,
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).send(error.response.statusText);
    }
});

app.listen(port, () => {
    console.log(`server is runnning on http://localhost:${port}`);
});