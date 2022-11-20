const app = require('express')();
const cors = require('cors');

const PORT = process.env.PORT || 8200;

// Middleware
// Use cors globally to enable requests to host when on dev
app.use(cors());

// Endpoints
app.get('/', (req, res) => {
    res.json({message: 'Hello from json'});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});