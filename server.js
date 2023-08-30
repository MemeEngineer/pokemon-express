const express = require('express');
const app = express();
const port = 3000;
const jsxEngine = require('jsx-view-engine')
const {pokemon} = require('./models/pokemon')
require('dotenv').config();
const mongoose = require('mongoose');
const Pokemons = require('./models/pokemons')
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

//Index

app.get('/pokemon', async(req, res) => {
    const pokemonsFromDB = await Pokemons.find({})
    console.log(pokemonsFromDB)
    res.render('Index',{
        pokemon: pokemonsFromDB
    })
})

//Create
app.post('/pokemon/new', async (req, res)=> {

    // create a new veg in db
    try {
        const createdPokemon = await Pokemons.create(req.body);
        console.log(createdPokemon);
        res.redirect('/pokemon');

    } catch (error) {
        console.log(error);
        // res.json({error});
    }
})


//Show
app.get('/pokemon/:id', async(req, res) => {
    const {id} = req.params
    const pokemons = await Pokemons.findById(id)
    console.log('Found Pokemon ->', pokemons);
    res.render('Show', {
        pokemon: pokemons
    })
})

//connecting to database
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
})


app.listen(port, () => {
    console.log('listening');
});