const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => res.render('Web'))

app.get('/Facts', (req, res) => res.render('Facts'))

app.get('/Baxter', (req, res) => res.render('Baxter'))

app.get('/Cats', (req, res) => res.render('Cats'))

app.get('/Birds', (req, res) => res.render('Birds'))

app.get('/Dogs', (req, res) => res.render('Dogs'))

app.get('/Bluely', (req, res) => res.render('Bluely'))

app.get('/About', (req, res) => res.render('About'))

app.listen(port, () => console.log(`Listening on port ${port}!`))