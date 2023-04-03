const express = require('express');
const fs = require('fs').promises;
const users = require('./users.json');
const path = require('path');

const app = express();
app.use(express());

const file = path.join(__dirname, '..', 'src', 'users.json');

app.get('/', (_req, res) => res.status(200).json({ message: users }));

app.listen(3000, () => {
	console.log('Online na porta 3000');
});
