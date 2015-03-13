//objeto global
var APP = APP || {};
$(document).ready(function () {
    "use strict";
    APP.net = (function () {
        console.log("net cargado");
        var serverUrl = "php/getcards.php";

        var peticion = function(cnt,cb) {
            (cnt !== null || cnt !== 0) ? cnt : 1 ;
            $.ajax({

                url: serverUrl,
                data: {
                    numero: cnt
                },
                type: 'POST',
                dataType: 'json',
                success: function (json) {
//                    console.log(json);
//                    console.log("callback:" + cb);
                    cb(json);
                },


                error: function (jqXHR, status, error) {
                    console.error('Disculpe, existió un problema');
                }


            });
        };

        return{
            peticion : peticion
        };

    })();
});
       //Usar "use strict"


//esperar a que el DOM este cargado


//Funcion anonima autoejecutable para realizar las peticiones AJAX, que añadiremos en el objeto global
//y expondra un metodo para poder realizar las llamadas al servidor.

//El servidor espera un parametro 'numero' con el número de elementos que tendra el JSON de respuesta.

