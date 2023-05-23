const express = require('express')
const route = express.Router()
const reservaController = require('../controllers/reserva.controller')

route.get("/",reservaController.getAll)
route.get('/:id',reservaController.getReservaById)
route.delete('/:id',reservaController.deleteById)
route.post("/", reservaController.crearReserva)



module.exports = route