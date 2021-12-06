/* eslint-disable semi */
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./loggerMiddleware');
app.use(express.json());
app.use(logger);
const user = [
	{
		id: 1,
		name: 'bryan omar',
		lastName: 'vera cachay',
		age: '31',
	},

	{ id: 2, name: 'jesus alberto', lastName: 'Fernandez rivas', age: '31' },
	{ id: 3, name: 'giorgia omar', lastName: 'vera cachay', age: '31' },
	{ id: 4, name: 'probando omar', lastName: 'vera cachay', age: '31' },
];

app.get('/', (req, res) => {
	res.send('<h1>Hola mundo</h1>');
});
app.get('/api/note', (req, res) => {
	res.json(user);
});
app.get('/api/note/:id', (req, res) => {
	const { id } = req.params;
	const note = user.find((note) => note.id === parseInt(id));

	if (note) {
		res.send(note);
	} else {
		res.status(404).send('Not found');
	}
});

app.post('/api/note', (req, res) => {
	const { name, lastName, age } = req.body;
	const ids = user.map((note) => note.id);
	const maxId = Math.max(...ids);
	const newNote = { id: maxId + 1, name, lastName, age };
	user.push(newNote);
	res.json(user);
});

app.use((req, res) => {
	res.status(404).json({ error: 'Not found' });
	console.log('404');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
