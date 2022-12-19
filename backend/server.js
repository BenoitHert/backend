const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const {errorHandler} = require('./middleware/errorMiddleware')
const colorts = require('colors')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

//  ROUTES 
app.use('/', require('./routes/dashboardRoutes'));

app.use('/calendar', require('./routes/calendarRoutes'));

app.use('/todo', require('./routes/todoRoutes'));

app.use('/agenda', require('./routes/agendaRoutes'));

app.use('/menu', require('./routes/menuRoutes'));

app.use('/users', require('./routes/userRoutes'));



app.listen(port, () => console.log(`Server started on ${port}`))