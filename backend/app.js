const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const path = require('path');

const PORT = process.env.PORT || 8200;

connectDB();
const app = express();

// Middleware
// Use cors globally to enable requests to host when on dev
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.json());
app.use(express.urlencoded());

// Endpoints
app.get('/', (req, res) => {
    res.json({message: 'Hello from json'});
});

app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});