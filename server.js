const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    'age': 32,
    'birthName':'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'chance the rapper': {
    'age': 31,
    'birthName':'Chancelor Johnathan Bennett',
    'birthLocation': 'Chicago, Illinois, USA'
    },
    'dylan': {
    'age': 31,
    'birthName':'Dylan',
    'birthLocation': 'Dylan'
    },
    
}


/* 
    1. browser asks for /
    2. server sends contents of index.html
    3. browser knows how to handle html, notices html is referencing a js 
    4. browser asks for `/js/main.js`
     (Assuming we fix bug: missing endpoint)
    5. server sends back contents of `/js/main.js` 
    6. browser knows how to handle js, runs code

    ... (later on)

    7. click the button, browser makes a request to /api/${rapperName} (fetch)
    8. server matches request to endpoint `/api/:rappername`, does something with it
*/

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/js/:scriptName', (req,res) => {
    res.sendFile(__dirname + `/js/${req.params.scriptName}`)
})

app.get('/api/:rapperName', (req,res) => {
    const rappersName = req.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT  || PORT, ()=> {
    console.log(`The server is running on port ${PORT}, you better go catch it`)
})