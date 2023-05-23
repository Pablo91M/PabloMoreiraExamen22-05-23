const vehiculos = require('../../data/vehiculos.json')

const getAllVehiculos = (req,res) =>{
    res.status(200).json(vehiculos)
}

const vehiculosByPatente = (req,res) =>{
    const patente = req.params.patente
    const resultado = vehiculos.find( vehiculos => vehiculos.patente == patente )
    if(resultado){
        res.status(200).json(resultado).status(200)
    } else {
        res.status(404).json({mensaje: `El vehiculo con patente ${patente} no fue encontrado`})
    }
}

module.exports = { getAllVehiculos, vehiculosByPatente }