module.exports = function (app, swig) {
    var autores = filtrar_autores();

    app.get("/autores", function(req, res){
       let respuesta = swig.renderFile('views/autores.html',{
          autores: autores
       });
       autores = filtrar_autores();
       res.send(respuesta);
    });

    app.get('/autores/agregar', function(req, res){
       let roles = ["cantante", "batería", "guitarrista", "bajista", "teclista"];
       let respuesta = swig.renderFile('views/autores-agregar.html', {roles: roles});
       res.send(respuesta);
    });

    app.get('/autor', function (req,res){
        let respuesta;

        if(typeof req.body.nombre === 'undefined' || req.body.nombre === null){
            respuesta = "Nombre : no enviado en la petición" + "<br>";
        }else{
            respuesta = "Nombre :" + req.body.nombre + "<br>";
        }

        if(typeof req.body.grupo === 'undefined' || req.body.grupo === null){
            respuesta += "Grupo : no enviado en la petición" + "<br>";
        }else{
            respuesta += "Grupo :" + req.body.grupo + "<br>";
        }

        if(typeof req.body.role === 'undefined' || req.body.role === null){
            respuesta += "Role : no enviado en la petición" + "<br>";
        }else{
            respuesta += "Role :" + req.body.role;
        }

        res.send(respuesta);

    });

    app.get('/autores/*', function (req,res){
        res.redirect("/autores");
    });

    function filtrar_autores(){
        let lista_autores =[
            {
                "nombre": "Irene",
                "grupo": "Grupo 1",
                "role": "cantante"
            },
            {
                "nombre": "Pablo",
                "grupo": "Grupo 2",
                "role": "guitarrista"
            },
            {
                "nombre": "Andrea",
                "grupo": "Grupo 1",
                "role": "bajista"
            },
            {
                "nombre": "Hector",
                "grupo": "Grupo 2",
                "role": "cantante"
            },
            {
                "nombre": "Carmen",
                "grupo": "Grupo 1",
                "role": "teclista"
            },
            {
                "nombre": "Antonio",
                "grupo": "Grupo 2",
                "role": "guitarrista"
            }

        ]
        return lista_autores;
    }
}