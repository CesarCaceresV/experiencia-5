module.exports = {
    attributes: {
        nombreestudiante: {
            type: 'string',
            required: true
        },
        apellidoestudiante: {
            type: 'string',
            required: true
        },
        edadestudiante: {
            type: 'integer',
            defaultsTo: 0
        },
        promedioestudiante: {
            type: 'float',
            defaultsTo: 0
        }   
    }
}