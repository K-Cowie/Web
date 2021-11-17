const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')))



// app.get('/Facts', (req, res) => res.render('Facts'))

// app.get('/Cats', (req, res) => res.render('Cats'))

// app.get('/Birds', (req, res) => res.render('Birds'))

// app.get('/Dogs', (req, res) => res.render('Dogs'))

// app.get('/Bluely', (req, res) => res.render('Bluely'))


//
const web_router = require('./routes/web')

app.use("/", web_router) 

//
const about_router = require('./routes/about')

app.use("/about", about_router) 

//
const baxter_router = require('./routes/baxter')

app.use("/baxter", baxter_router)

//
const facts_router = require('./routes/facts')

app.use("/facts", facts_router)

//
const dogs_router = require('./routes/dogs')

app.use("/dogs", dogs_router)

//
const cats_router = require('./routes/cats')

app.use("/cats", cats_router)

//
const birds_router = require('./routes/birds')

app.use("/birds", birds_router)

//
const bluey_router = require('./routes/bluey')

app.use("/bluey", bluey_router)

//
const nancy_router = require('./routes/nancy')

app.use("/nancy", nancy_router)

//
const lucy_router = require('./routes/lucy')

app.use("/lucy", lucy_router)


app.listen(port, () => console.log(`Listening on port ${port}!`))