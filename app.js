const express = require('express');
const app = express();
const port = 3000;
const voitRouter= require('./routes/voitures');

app.use(express.json()); // Pour parser les corps de requêtes en JSON
app.use('/voitures',voitRouter);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
