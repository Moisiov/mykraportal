const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Mykraportal'))

app.listen(5000, () => console.log('Server up on port 5000'))