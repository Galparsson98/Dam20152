//objeto global
$.ajax{
    url: '/php/getcards.php';
    data:( emaitza: sacarperrosygatos())
    type:'Post';
    datatype:'jquery';
  success: function (json){
      $('style.css').load
    }
     error : function() {
       console.log("error")}
}
function sacarperrosygatos(){
        var filak =$('#filas');
        var kolumna = $('#columnas');
        if (filak === 0 && kolumna === 0)
        {
           console.log("no puedes comenzar el juego");
        }
        else{
            var emaitza= filak * kolumna;
            return  console.log("Tienes" + emaitza " perros y gatos");
        }

       //Usar "use strict"


//esperar a que el DOM este cargado

//Funcion anonima autoejecutable para realizar las peticiones AJAX, que añadiremos en el objeto global
//y expondra un metodo para poder realizar las llamadas al servidor.

//El servidor espera un parametro 'numero' con el número de elementos que tendra el JSON de respuesta.

