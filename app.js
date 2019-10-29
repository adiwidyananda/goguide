const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'views')));

app.get("/", (req,res) => {
    res.render('PopularDestination.hbs')
})
app.get("/booking", (req,res) => {
    res.render('booking.hbs')
})
app.get("/history", (req,res) => {
    res.render('historybook.hbs')
})
app.get("/chat", (req,res) => {
    res.render('chat.hbs')
})
app.get("/confirm", (req,res) => {
    res.render('confirmbook.hbs')
})


app.get('*', (req,res) => {
    res.send('Page not Found')
})
app.listen(5000, () =>{
    console.log("server on port 5000...")
}) 
