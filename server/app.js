const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//ak baar agar path likh diye app.js mai to baar baar likhne ki jarurat nahi hai other files mai,
dotenv.config({ path: './config.env' });
require('./DB/conn')

//data agar json format mai aarha hai to usko samjhne k liye bcoz application usko nahi smjhta hai.
app.use(express.json());

//we link the router file to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;

//creating middleware
const middleware = (req, res, next) => {
    console.log(`middleware called`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hllo bhai from the home server`);
})
app.get('/about', middleware, (req, res) => {
    console.log("hello from about");
    res.send(`Hllo bhai from the about server`);
})
app.get('/contact', (req, res) => {
    res.send(`Hllo bhai from the contact server`);
})
app.get('/signin', (req, res) => {
    res.send(`Hllo bhai from the login server`);
})
app.get('/signup', (req, res) => {
    res.send(`Hllo bhai from the register server`);
})

console.log("welcome bhai")

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});