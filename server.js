const express = require('express');
const app = express();
const port = 3000;
const jsxEngine = require('jsx-view-engine')
const {pokemon} = require('./models/pokemon')


// App Config
app.set('view engine', 'jsx');
app.engine('jsx',jsxEngine())

//Middleware
app.use((req, res, next) => {
console.log(req.method, req.url)
next();
})

//parse and add the incoming data to a req.body object
app.use(express.urlencoded({extended:false})); //middleware


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})





app.listen(port, () => {
    console.log('listening');
});