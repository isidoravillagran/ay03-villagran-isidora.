$(document).ready(function(){
    var boton1 = $("#boton1");
    var boton2=$("#boton2");
    var boton3=$("#boton3");
    var cambio=$("#primero");
    boton1.click(function(){
        $("#titulo").hide()
    });
    boton2.click(function(){
        $("#titulo").show()
    });
    boton3.click(function(){
        $("#titulo2").text("Para visitar")
    });
    cambio.mouseenter(function(){
        $("#primero").css("color","pink")
    });
    cambio.mouseleave(function(){
        $("#primero").css("color","rgb(46, 6, 46)")
    });

    
    



});