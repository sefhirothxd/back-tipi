/* eslint-disable semi */
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use((req, res) => {
	res.status(404).json({ error: 'Not found' });
	console.log('404');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
