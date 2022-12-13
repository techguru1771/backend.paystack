const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors')
const app = express()

// const bodyParser = require('body-parser');

//middleware
app.use(express.json())
app.use(cors())



//Db connection
mongoose.connect('mongodb+srv://Gerald:Gerald1771ezeT@cluster0.woggkyp.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true, 
}).then(()=> console.log('DB connected'))
.catch((err) => console.log('DB Connection Error',err))

// route middleware
readdirSync('./route').map((r) => app.use('/api', require(`./route/${r}`)))

const port = 4000
app.listen(port, () => console.log(`Server is running on port ${port}`))
