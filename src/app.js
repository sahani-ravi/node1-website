const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 4000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ravi Kumar Ravi'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ravi Kumar Ravi'
    })
})
app.get('/Today_News', (req, res) => {
    res.render('Today_News', {
        helpText: 'Page Is Under Construction.',
        title: 'About Me',
        name: 'Ravi Kumar Ravi'
    })
})
app.get('/Popular_News', (req, res) => {
    res.render('Popular_News', {
        helpText: 'Page Is Under Construction.',
        title: 'About Me',
        name: 'Ravi Kumar Ravi'
    })
})
app.get('/Videos', (req, res) => {
    res.render('Videos', {
        helpText: 'Page Is Under Construction.',
        title: 'About Me',
        name: 'Ravi Kumar Ravi'
    })
})
app.get('/Science', (req, res) => {
    res.render('Science', {
        helpText: 'Page Is Under Construction.',
        title: 'About Me',
        name: 'Ravi Kumar Ravi'
    })
})
app.get('/Entertainment', (req, res) => {
    res.render('Entertainment', {
        helpText: 'Page Is Under Construction.',
        title: 'About Me',
        name: 'Ravi Kumar Ravi'
    })
})
app.get('/Cricket', (req, res) => {
    res.render('Cricket', {
        helpText: 'Page Is Under Construction.',
        title: 'About Me',
        name: 'Ravi Kumar Ravi'
    })
})






app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('*', (req , res) =>{
    res.send('my 404 err0r')

})
app.listen(port , () => {
    console.log('Server is up on port .'+ port)
})