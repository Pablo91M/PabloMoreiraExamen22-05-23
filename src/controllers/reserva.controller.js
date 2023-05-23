const reserva = require('../../data/reservas.json')

const getAll =(req,res) => {
    res.status(200).json(reserva)
}

const getReservaById = (req,res) => {
    const id = req.params.id
    const resultado = reserva.find( reserva => reserva.id == id )
    if(resultado){
        res.status(200).json(resultado).status(200)
    } else {
        res.status(404).json({mensaje: `La reserva con el id ${id} no fue encontrado`})
    }
}

const deleteById = (req,res) => {
    const id = req.params.id
    const indice = reserva.findIndex (reserva => reserva.id == id)
    if(indice == -1){
        res.status(404).json({
            resultado: "La operacion de borrado no pudo ser realizada!",
            mensaje: `La reserva con el id ${id} no fue encontrado`})
    } else {
        const reservaEliminada = reserva.splice(indice,1)
        res.status(200).json({
            resultado: "La operacion de borrado pudo realizarse con exito!",
            mensaje: ` La reserva con el id ${id} fue eliminada`
        })
    }
}
 const crearReserva = (req,res) => {
    const nuevaReserva = req.body.cantPersonas
    if(cantPersonas < 1 || cantPersonas >10){
        
    }

 }

module.exports = {getAll, getReservaById,deleteById, crearReserva}