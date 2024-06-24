import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware to serve static files from public directory and projects
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/projects', express.static(path.join(__dirname, 'src', 'projects')));

// route to serve the index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/projects/:projectDay', (req, res) => {
	const projectDay = req.params.projectDay;
	const projectPath = path.join(
		__dirname,
		'src',
		'projects',
		projectDay,
		'index.html'
	);

	res.sendFile(projectPath);
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`server running on http://127.0.0.1:${PORT}`);
});
