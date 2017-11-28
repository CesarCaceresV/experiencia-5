module.exports = {
    pushearestudiante: function(req, res){
        var miestudiante = {
            nombreestudiante: req.body.nombreestudiante,
            apellidoestudiante: req.body.apellidoestudiante,
            edadestudiante: req.body.edadestudiante,
            promedioestudiante: req.body.promedioestudiante,
        }
        console.log("Se recibió el estudiante ",miestudiante)
        Estudiante.create(miestudiante).exec(function(err, newEstudiante){
            if(err){
                console.log("No se creo el estudiante",err)
            }else{
                console.log("Se creo el estudiante")
            }
            res.redirect("/");
        });
    },
    leerestudiantes: function(req, res, next){
        Estudiante.find({}).exec(function(err, mostrarEstudiantes){
            if(err || typeof(mostrarEstudiantes) == typeof(undefined)){
                console.log("No sirvió o la lista es nula", err)
            }else{
                res.view("mostrarEstudiantes", {
                    listaestudiantes: mostrarEstudiantes
                })
            }
        })
    }
}