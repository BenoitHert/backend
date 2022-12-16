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

app.use('/api/calendar', require('./routes/calendarRoutes'));

app.use('/api/todo', require('./routes/todoRoutes'));

app.use('/api/agenda', require('./routes/agendaRoutes'));

app.use('/api/menu', require('./routes/menuRoutes'));




app.listen(port, () => console.log(`Server started on ${port}`))