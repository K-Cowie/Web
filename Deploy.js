const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'assets')))


//Routing for all the pages using controllers and routes
const web_router = require('./routes/web')
const lucy_router = require('./routes/lucy')
const nancy_router = require('./routes/nancy')
const bluey_router = require('./routes/bluey')
const birds_router = require('./routes/birds')
const cats_router = require('./routes/cats')
const dogs_router = require('./routes/dogs')
const facts_router = require('./routes/facts')
const baxter_router = require('./routes/baxter')
const about_router = require('./routes/about')

app.use("/", web_router) 
app.use("/about", about_router) 
app.use("/baxter", baxter_router)
app.use("/facts", facts_router)
app.use("/dogs", dogs_router)
app.use("/cats", cats_router)
app.use("/birds", birds_router)
app.use("/bluey", bluey_router)
app.use("/nancy", nancy_router)
app.use("/lucy", lucy_router)


app.listen(port, () => console.log(`Listening on port ${port}!`))