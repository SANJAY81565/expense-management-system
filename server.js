const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const connectDb = require('./config/connectdb')
const userRoutes  = require('./routes/userRoutes')


const app = express()
connectDb()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())


app.get('/', userRoutes)

const PORT = 8080 || process.env.PORT

app.listen(PORT, () => console.log('connected to 8080'));
