const express = require('express')
const route = express.Router()
const vehiculosController = require('../controllers/vehiculos.controller')

route.get("/",vehiculosController.getAllVehiculos)
route.get("/:patente",vehiculosController.vehiculosByPatente)

module.exports = route