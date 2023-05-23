const express = require('express');
const reservasRuta = require('./routes/reserva.route')
const vehiculosRuta = require('./routes/vehiculos.route')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json())
app.use("/api/reservas",reservasRuta)
app.use("/api/vehiculos",vehiculosRuta)

app.listen(PORT,()=>{console.log(`Escuchando en el puerto ${PORT}`)})
