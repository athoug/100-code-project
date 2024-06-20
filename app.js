const express = require('express');
const path = require('path');

const app = express();

// serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// route to serve the index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`server running on http://127.0.0.1:${PORT}`);
});
