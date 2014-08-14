$(document).ready(function() {
  var textoDefault=$("#busqueda").attr('value'); //pass the default value of the search textbox to the functions
  if($.browser!=null&&$.browser.opera){$("#busqueda").css("width","120");}
  if($.browser!=null&&!$.browser.msie){
    $("#qm0").css("opacity","0.92");
    $("#qm0").css("filter","alpha(opacity=92)");}
  //$("#example2 img").attr('width',screen.width);
  
  if(/registrado=1/.test(location.href))
    alert("Se le enviará un mail cuando tengamos este producto disponible.");
  addTipoEditorial(String(window.location));
  cambiarTextoBusquedaDefault(textoDefault);
  reestablecerTextoBusquedaDefault(textoDefault);
  ocultarEditorMenus(); 
  ligarBusqueda();
  agregarCadenaBusqueda(textoDefault);
  hideLabels();
  changeCurrency();
  propertiesBlock();
  agregarCaterorias();
  nombreBusqueda(textoDefault);
  confirmarDatos();
  seleccionarFormadePago();
  saltosdeLinea();
  fancyAllWindows();
  verifyMail();
  popUps();
  tooltip();
  seeMore();
  verFactura();
  commentsForm();
  ocultarTextoError();
  cambiarEstado(); 
  validarCodigoPostal();
  validarCodigoPostal2();
  validarTelefono();
  validarRFC();
  user_country_id();
  valorDefaultFormaPago();
  mostrarPreciosEnvio();
  seeMoreArticle();
  faceBookConnectShow();
  blowUp();
  linksToBlank();
  submitCupon();
  cambiarTextocoupon("Código de descuento");
  ajusteIpad();
  //agregarGoogleMaps();
  disponibilidad();
  regalo();
   soporte();
  avisoRegistro();
  cerrarAviso();
  cerrarFotos();
  FirefoxHoverFix();
  //pressEnter();
  enviarCuponEnter();
  fixPhantomBrackets();
  contactoAyuda();
  mailSubscripcionInput();
  factura();
  mailMeEverywhere();
  pagoBanamex();
  preguntasFrecuentes();
  copiarDireccion();
  resultados();
  $(".sorter a").each(function(){
  $(this).attr("href",$(this).attr("href").replace("search_strings","search_string"));
  });
  $(".foto").css("margin-top","");
  var imagenDerecha=$('.miniendasMainImg  div img').attr('src');
$('.miniendasMainImg').html('<div style="background-image:url('+imagenDerecha+');margin-left: 30px;background-size: 400px 650px;width: 400px;height: 650px;background-repeat: no-repeat;background-position: center bottom;margin-top: 12px;"></div>');
$(".miniendasMainImg").parent().parent().parent().css("margin-top","").parent().css('vertical-align','top');
$(".imagenMinitiendas").css('margin-left',"").css("margin-right","");
  $("#nombreApellido").css("background-color","#F9F9F7").css("border","none").focus(function(e){ $('[name|="address1"]').focus();});
  $("#nombreApellido1").css("background-color","#F9F9F7").css("border","none").css("margin-left", "20px").focus(function(e){ $('[name|="calle_remitente"]').focus();});
  
  $(this).delay(5000).queue(function() {fancy();});
  $(this).delay(4000).queue(function() {fancy();});
  $(this).delay(3000).queue(function() {fancy();});
  $(this).delay(2000).queue(function() {fancy();});
  //ratingStars();
  $(".block-user-profile input:checkbox").attr("checked","true");
  $("a:not(#qm0 a,#3_a_tab a, #2_a_tab a,#3_a_tab a, #4_a_tab a,.prev,.next,.tab,.tabActive)").click(function(){
    //$("body").css("cursor","wait");
    //$("*").css("cursor","wait");
  });
});

function resultados()
{
  $(".seleccionResultados").each(function(){
    $(this).click(function(){
      $(this).find("img").toggle();
      $(this).next(".subSeleccionResultados").each(function(){
        $(this).find("p").toggle();
      });
      
    });
  });
}

function preguntasFrecuentes()
{
  $(".preguntaFAQ a").click(function(){
    $(".respuestaFAQ").slideUp('slow');
    $(this).parent().next().slideDown('slow');
    history.pushState({foo:"bar"},"pregunta ",""+$(this).parent().attr("id"));
  });
  
  $("#preguntas a").not("#seccion6").each(function(i){
    $(this).click(function(){
      $(".bloque").slideUp('slow');
      $(".respuestaFAQ").slideUp('slow');
      $("#preguntas"+(i+1)).slideDown('slow');
      $("#preguntas a").not("#seccion6 a").css("color","#411600");
      $(this).css("color","#eb5e35");
    });
    }
  );
  
  //autoSeeMore();
  
  $("#buscadorFAQ").click(function(){
    $("#respuesta11").slideUp('slow');
    $("#respuesta12").slideDown('slow');
    history.pushState({foo:"bar"},"pregunta ","");
  });
  
  $("#carritoFAQ").click(function(){
    $("#respuesta11").slideUp('slow');
    $("#respuesta13").slideDown('slow');
    history.pushState({foo:"bar"},"pregunta ","");
  });
  
  $("#metodoFAQ").click(function(){
    $("#preguntas1").slideUp('slow');
    $("#preguntas2, #respuesta21").slideDown('slow');
    $("#seccion2 a").css("color","#eb5e35");
    $("#seccion1 a").css("color","#411600");
    history.pushState({foo:"bar"},"pregunta ","");
  });
  
  $("#plazoFAQ").click(function(){
    $("#preguntas1, #respuesta31").slideUp('slow');
    $("#preguntas3, #respuesta32").slideDown('slow');
    $("#seccion3 a").css("color","#eb5e35");
    $("#seccion1 a").css("color","#411600");
    history.pushState({foo:"bar"},"pregunta ","");
  });
  
  $("#diasFAQ").click(function(){
    $("#preguntas1, #respuesta31").slideUp('slow');
    $("#preguntas3, #respuesta34").slideDown('slow');
    $("#seccion3 a").css("color","#eb5e35");
    $("#seccion1 a").css("color","#411600");
    history.pushState({foo:"bar"},"pregunta ","");
  });
  
  $("#avisenmeFAQ").click(function(){
    $("#preguntas3, #respuesta11").slideUp('slow');
    $("#preguntas1, #respuesta14").slideDown('slow');
    $("#seccion1 a").css("color","#eb5e35");
    $("#seccion3 a").css("color","#411600");
    history.pushState({foo:"bar"},"pregunta ","");
  });
}

function mailMeEverywhere(){
$(".block-custom-page-body .fb-like").before("<div id='mailMeEverywherePages'></div>");
$("#cerrarShare").before("<div id='mailMeEverywhereItems'></div>").css("top","-60px");
ligarMail("#mailMeEverywherePages");
ligarMail("#mailMeEverywhereItems");
var page = getUrlVars(location.href)["page"];
if(page!=null&&page.indexOf("mt_")==0){$("#mailMeEverywherePages").css("right","-340px").css("top","8px");$(".fb-like").css("top","-7px")}

}
function ligarMail(selector){
var item_id = getUrlVars(location.href)["item_id"];
var page = getUrlVars(location.href)["page"];
$(selector).click(function(){



var params = 'width=500px, height=600px';
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', status=no';
    params += ', toolbar=no';
window.open("correo.php?item_id="+item_id+'&page='+page, 'Popup', params);
});
}
function mailSubscripcionInput(){
$('#mailSubscripcion').focus(function(){$(this).animate({width:'140px'}, 500)});
$('#mailSubscripcion').blur(function(){$(this).animate({width:'100px'}, 500)});
}
function safariDetect(){
var ua = navigator.userAgent.toLowerCase(); 
 if (ua.indexOf('safari')!=-1){ 
   if(ua.indexOf('chrome')  > -1){
    return false; // chrome
   }else{
    return true; // saf
   }
  }return false;
}

function pagoBanamex()
{
  $("#continuarDeposito").click(function(){
    $("#formOrder").attr("target","_blank");
    $("#graciasBlock").show();
    $("#selectPayform").css("display","none");
    $("#step3BC").removeClass("nonactive").addClass("active");
    $("#step2BC").removeClass("active").addClass("nonactive");
    $(".tablaGraciasOxxo").parent().css("margin-top","-45px");
    $(".block-checkout-breadcrumb").css("width","936px").css("margin-left", "21px");
    
  });
}

function pagoCon()
{ 
  $('.anchoPago').css("width","24.5%");
  
  if(!($.browser.webkit))
    $(".radio").css("margin-left", "50px");
  
  $('#metodoPaypal .radio').click(function(){
    $(".pagoPaypal").css("display","block");
    $(".pagoOXXO").css("display","none");
    $(".pagoTarjeta").css("display","none");
    $(".pagoDeposito").css("display","none");
    $(".radio").css("margin-left", "48px");
    $('.anchoPago').css("width","24.5%");
  });
  
  $('#metodoOXXO .radio').click(function(){
    $(".pagoPaypal").css("display","none");
    $(".pagoOXXO").css("display","block");
    $(".pagoTarjeta").css("display","none");
    $(".pagoDeposito").css("display","none");
    $(".radio").css("margin-left", "48px");
    $('.anchoPago').css("width","24.5%");
  });
  
  $('#metodoDeposito .radio').click(function(){
    $(".pagoPaypal").css("display","none");
    $(".pagoOXXO").css("display","none");
    $(".pagoTarjeta").css("display","none");
    $(".pagoDeposito").css("display","block");
    $(".radio").css("margin-left", "48px");
    $('.anchoPago').css("width","24.5%");
  });
  
  $('#metodoTarjeta .radio').click(function(){
    $(".pagoPaypal").css("display","none");
    $(".pagoOXXO").css("display","none");
    $(".pagoTarjeta").css("display","block");
    $(".pagoDeposito").css("display","none");
    if(safariDetect())
      $(".radio").css("margin-left", "26px");
    else
      $(".radio").css("margin-left", "43px");
    
    if($.browser.webkit)
      $('.anchoPago').css("width","24.5%");
    else
      $('.anchoPago').css("width","105%");
  });
}

function contactoAyuda()
{
  var url = location.href.split('&');
  
  if(url[1] == "mail=1")
  {
    $("#falta").css("display","block");
    $("#falta").html("<br><br><b>El correo se envió exitosamente.</b><br><br><br>");
    $(".contacto-wrapper").css("display","none");
    $(".titleTop").css("width","100%");
    $(".backBtn").css("display","block");
  }
   if(url[1] == "mail=2")
  {
    $("#falta").css("display","block");
    $("#falta").html("<br><br><b>El capcha es incorrecto</b><br><br><br>");
    $(".titleTop").css("width","100%");
    $(".backBtn").css("display","block");
    $(".backBtn").css("margin-top","-22px");
    $(".contacto-wrapper").css("width","849px");
    $(".left").css("width","320px");
  }
  $("#contactoSubmit").click(function(){
    var falta = '';
    obj=document.forms.contacto;
    
    if(obj.nombre.value == '')
    {
      falta = "Se requiere <b>Nombre</b>"
      
      $("#nombre").css("color","red");
    }
    else
      $("#nombre").css("color","#74736D");

    if(obj.email.value == '')
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere <b>Correo electrónico</b>"
      
      $("#correo").css("color","red");
    }
    else
    {
      var expre = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      
      if (expre.test(obj.email.value))
        $("#correo").css("color","#74736D");
      else
      {
        if(falta != '')
          falta += "<br>";
        
        falta += "El <b>Correo</b> es incorrecto";
        
        $("#correo").css("color","red");
      }
    }
      
    if(obj.mensaje.value == '')
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere <b>Mensaje</b>"
      
      $("#men label").css("color","red");
    }
    else
      $("#men label").css("color","#74736D");
    
    if(falta != '')
    {
      $("#falta").css("display","block");
      $("#falta").html(falta);
     
      return false;
    }
  });
}

function factura()
{
  var url = location.href.split('&');
  
  if(url[1] == "mail=1")
  {
    $("#falta").css("display","block");
    $("#falta").html("<br><br><b>El correo se envió exitosamente.</b><br><br><br>");
    $(".contacto-wrapper").css("display","none");
    $(".titleTop").css("width","100%");
    $(".backBtn").css("display","block");
  }
  
  $("#facturaSubmit").click(function(){
    var falta = '';
    obj=document.forms.factura;

    if(obj.nombre.value == '')
    {
      falta = "Se requiere <b>Nombre comercial</b>";
      
      $("#nombre").css("color","red");
    }
    else
      $("#nombre").css("color","#74736D");
      
    if(obj.rfc.value == '')
    {
      if(falta != '')
        falta += "<br>";
        
      falta += "Se requiere <b>RFC</b>";
     
      $("#rfc").css("color","red");
    }
    else
    {
      $("#rfc").css("color","#74736D");
      var rfc = obj.rfc.value;

      if(rfc.length > 0 && rfc.length < 12)
      {
        if(falta != '')
          falta += "<br>";
          
        falta += "El <b>RFC</b> debe ser mínimo de 12 caracteres";
        
        $("#rfc").css("color","red");
      }
    }
    
    if(obj.calle.value == '')
    {
      if(falta != '')
        falta += "<br>";
        
      falta += "Se requiere <b>Calle</b>";
      
      $("#calle").css("color","red");
    }
    else
      $("#calle").css("color","#74736D");
      
    if(obj.exterior.value == '')
    {
      if(falta != '')
        falta += "<br>";
        
      falta += "Se requiere <b>Número exterior</b>";
      
      $("#exterior").css("color","red");
    }
    else
      $("#exterior").css("color","#74736D");
      
    if(obj.cp.value == '')
    {
      if(falta != '')
        falta += "<br>";
        
      falta += "Se requiere <b>C.P.</b>";
      
      $("#cp").css("color","red");
    }
    else
      $("#cp").css("color","#74736D");

    if(obj.email.value == '')
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere <b>Correo electrónico</b>";
      
      $("#correo").css("color","red");
    }
    else
    {
      var expre = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      
      if (expre.test(obj.email.value))
        $("#correo").css("color","#74736D");
      else
      {
        if(falta != '')
          falta += "<br>";
        
        falta += "El <b>Correo</b> es incorrecto";
        
        $("#correo").css("color","red");
      }
    }
          
    if(obj.fecha.value == '' || obj.fecha.value == 'dd/mm/aaaa')
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere <b>Fecha de compra</b>";
      
      $("#compra").css("color","red");
    }
    else
    {
      var expre = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      
      if (expre.test(obj.fecha.value))
        $("#compra").css("color","#74736D");
      else
      {
        if(falta != '')
          falta += "<br>";
        
        falta += "La <b>Fecha de compra</b> es incorrecta";
        
        $("#compra").css("color","red");
      }
    }
      
    if(obj.consumo.value == 0)
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere elegir <b>Consumo</b>";
      
      $("#consumo").css("color","red");
    }
    else
      $("#consumo").css("color","#74736D");
      
    if(obj.sucursal.value == 0)
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere elegir <b>Sucursal de compra</b>";
      
      $("#sucursal").css("color","red");
    }
    else
      $("#sucursal").css("color","#74736D");
      
    if(obj.evento.value == 0 && (obj.consumo.value == 3 || obj.consumo.value == 4))
    {
      if(falta != '')
        falta += "<br>";
        
      var etiqueta;
      
      if(obj.consumo.value == 3)
        etiqueta = "Nombre del taller o curso";
      else
        etiqueta = "Nombre del evento";
        
      falta += "Se requiere <b>"+etiqueta+"</b>";
      
      $("#evento").css("color","red");
    }
    else
      $("#evento").css("color","#74736D");
      
    var etiqueta;
    
    if(obj.consumo.value == 3) 
      etiqueta = "Folios";
    else if(obj.consumo.value == 4)
      etiqueta = "Referencia";
        
    if(obj.ticket.value == '' && obj.consumo.value != 0)
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere <b>"+etiqueta+"</b>";
      
      $("#ticket").css("color","red");
    }
    else if(obj.ticket.value != '' && obj.consumo.value != 0 && (obj.consumo.value == 3 || obj.consumo.value == 4))
      $("#ticket").css("color","#74736D");
    
    if(obj.asientos.value == 0 && obj.consumo.value == 4)
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere <b>Asientos</b>";
      
      $("#asientos").css("color","red");
    }
    else
      $("#asientos").css("color","#74736D");
      
    if(obj.monto.value == '' && obj.consumo.value != 0)
    {
      if(falta != '')
        falta += "<br>";
      
      falta += "Se requiere <b>Monto total</b>";
      
      $("#monto").css("color","red");
    }
    else if(obj.monto.value != '' && obj.consumo.value != 0)
    {
      var expre = /^\d+\.?\d*$/;
      
      if (expre.test(obj.monto.value))
        $("#monto").css("color","#74736D");
      else
      {
        if(falta != '')
          falta += "<br>";
        
        falta += "El <b>Monto total</b> es incorrecto";
        
        $("#monto").css("color","red");
      }
    }
      
    if(falta != '')
    {
      $("#falta").css("display","block");
      $("#falta").html(falta);
     
      return false;
    }
  });
  
  $(".consumo").change(function(){
    $("#consumo1").val($(".consumo option:selected").val());
    
    if($(".consumo option:selected").val() == 3)
    {
      $("#ticket").text("Folios:");
      $("#numero").css("height","90px");
      $("textarea[name=ticket]").css("height","70px");
      $("#numero").css("display","inline");
      $("#total").css("display","inline");
      $("#sucursal").text("Sucursal de compra:");
      $("#restaurante").css("display","none");
      
      $(".sucursal option[value='7']").css("display","inline");
      
      $("#evento").text("Nombre del taller o curso:");
      $("#nEvento").css("display","inline");
      $("#nProfesor").css("display","inline");
      $("#lugares").css("display","none");
      $(".contacto-wrapper").css("height","900px");
    }
    else if($(".consumo option:selected").val() == 4)
    {
      $("#ticket").text("Referencia:");
      $("#numero").css("height","90px");
      $("textarea[name=ticket]").css("height","70px");
      $("#numero").css("display","inline");
      $("#total").css("display","inline");
      $("#sucursal").text("Sucursal de compra:");
      $("#restaurante").css("display","none");
      
      $(".sucursal option[value='7']").css("display","none");
      
      $("#evento").text("Nombre del evento:");
      $("#nEvento").css("display","inline");
      $("#nProfesor").css("display","none");
      $("#lugares").css("display","inline");
      $(".contacto-wrapper").css("height","900px");
    }
    else
    {
      $("#numero").css("display","none");
      $("#total").css("display","none");
      
      $(".sucursal option[value='7']").css("display","inline");
      
      $("#nEvento").css("display","none");
      $("#nProfesor").css("display","none");
      $("#lugares").css("display","none");
      $(".contacto-wrapper").css("height","680px");
      $("#restaurante").css("display","none");
    }
  });
  
  $(".sucursal").change(function(){
    if($(".sucursal option:selected").val() == 7)
    {
      $("#ticket").text("Número de orden:");
      $('.consumo').attr('disabled', false);
      $('.consumo option[value="3"]').attr('selected', 'selected');
      $('.consumo option[value="3"]').css("display","block");
      $('.consumo option[value="4"]').css("display","none");
    }
    else
    {
      $('.consumo').attr('disabled', false);
      $("#numero").css("display","none");
      $("#total").css("display","none");
      $('.consumo option[value="3"]').css("display","block");
      $('.consumo option[value="4"]').css("display","block");
    }
    
    if($(".consumo option:selected").val() == 3)
    {
      $("#ticket").text("Folios:");
      $("#numero").css("height","90px");
      $("textarea[name=ticket]").css("height","70px");
      $("#numero").css("display","inline");
      $("#total").css("display","inline");
      $("#sucursal").text("Sucursal de compra:");
      $("#restaurante").css("display","none");
      
      $(".sucursal option[value='7']").css("display","inline");
      
      $("#evento").text("Nombre del taller o curso:");
      $("#nEvento").css("display","inline");
      $("#nProfesor").css("display","inline");
      $("#lugares").css("display","none");
      $(".contacto-wrapper").css("height","900px");
    }
    else if($(".consumo option:selected").val() == 4)
    {
      $("#ticket").text("Referencia:");
      $("#numero").css("height","90px");
      $("textarea[name=ticket]").css("height","70px");
      $("#numero").css("display","inline");
      $("#total").css("display","inline");
      $("#sucursal").text("Sucursal de compra:");
      $("#restaurante").css("display","none");
      
      $(".sucursal option[value='7']").css("display","none");
      
      $("#evento").text("Nombre del evento:");
      $("#nEvento").css("display","inline");
      $("#nProfesor").css("display","none");
      $("#lugares").css("display","inline");
      $(".contacto-wrapper").css("height","900px");
    }
    else
    {
      $("#numero").css("display","none");
      $("#total").css("display","none");
      $("#nEvento").css("display","none");
      $("#nProfesor").css("display","none");
      $("#lugares").css("display","none");
      $(".contacto-wrapper").css("height","680px");
      $("#restaurante").css("display","none");
      
      $(".sucursal option[value='7']").css("display","inline");
    }
  });
}

function fixPhantomBrackets()
{
//$("#imagenProductDetail a").html($("#imagenProductDetail a").html().replace("}",""));
}
function mostrarTextAutor(id)
{
  if(id == 0)
  {
    //$("#autorSelect").css("display","none");
    $("#autorText").css("display","block");
    $('#autorText').focus();
    $("#titulo").css("width","194px");
    $("#tituloText").css("width","370px");
  }
  else
  {
    $("#autorText").css("display","none");
    $("#titulo").css("width","198px");
    $("#tituloText").css("width","806px");
  }
}

function mostrarTextEditorial(id)
{
  if(id == 0)
  {
    //$("#editorialSelect").css("display","none");
    $("#editorialText").css("display","block");
    $('#editorialText').focus();
    $("#titulo").css("width","194px");
    $("#tituloText").css("width","370px");
  }
  else
  {
    $("#editorialText").css("display","none");
    $("#titulo").css("width","198px");
    $("#tituloText").css("width","806px");
  }
}

function enviarCuponEnter(){
$("#cuponInput").keypress(function(event) {
  if ( event.which == 13 ) {
     $("#submitCupon").click();
    }
  });
}

function FirefoxHoverFix(){
//$(".bigtitle").hover(function(){$(this).css("text-decoration","undereline");},function(){$(this).css("text-decoration","none");});
}
function avisoRegistro(){
  $(".button-add").click(function(){
      if($("#aviso").text() != "" && $(".wishlistAdd").attr("src") == "LSCA-FEnBOOKS/images/icons/botonSinExistenciasA.jpg")
      $("#avisoRegistro").fadeIn(900);
    else
      $("#avisoRegistro").css("display","none");
      
    if($("#avisoTexto").text() == "" )
      $("#avisoRegistro").css("display","none");
  });
}

function cerrarAviso(){
  $("#avisoCerrado").click(function(){
    $("#avisoRegistro").fadeOut();
  });
}

function cerrarFotos()
{
  $("#cerrar").click(function(){
    $("#fotos").fadeOut(1500);
  });
  $("#nuestrasSucursales").click(function(){
    $("#fotos").fadeOut(1500);
  });
}

function desayuno()
{
  $("#carta").fadeIn(1500);
  $("#fondo").fadeIn(1500);
  $("#menuCarta").attr("src", "../menu.php?carta=desayuno");
}

function comida()
{
  $("#carta").fadeIn(1500);
  $("#fondo").fadeIn(1500);
  $("#menuCarta").attr("src", "../menu.php?carta=comida");
}

function vegetariano()
{
  $("#carta").fadeIn(1500);
  $("#fondo").fadeIn(1500);
  $("#menuCarta").attr("src", "../menu.php?carta=vegetariano");
}

function dia()
{
  $("#carta").fadeIn(1500);
  $("#fondo").fadeIn(1500);
  $("#menuCarta").attr("src", "../menu.php?carta=dia");
}

function bar()
{
  $("#carta").fadeIn(1500);
  $("#fondo").fadeIn(1500);
  $("#menuCarta").attr("src", "../menu.php?carta=bar");
}

function ninos()
{
  $("#carta").fadeIn(1500);
  $("#fondo").fadeIn(1500);
  $("#menuCarta").attr("src", "../menu.php?carta=ninos");
}

function sugerencias()
{
  $("#carta").fadeIn(1500);
  $("#fondo").fadeIn(1500);
  $("#menuCarta").attr("src", "../menu.php?carta=sugerencias");
}

function cerrarComida()
{
  $("#carta").fadeOut(1500);
  $("#fondo").fadeOut(1500);
}

function fotosRoma()
{ 
  $("#fotos").fadeIn(1500);
  $(".cinta").attr("src", "../images/paginas/cintaRoma.gif");
  $("#sucursalFotos").attr("src", "../carrousel.php?fotoSucursal=roma");
  
}

function fotosRosa()
{ 
  $("#fotos").fadeIn(1500);
  $(".cinta").attr("src", "../images/paginas/cintaZonaRosa.gif");
  $("#sucursalFotos").attr("src", "../carrousel.php?fotoSucursal=zonarosa");
}

function fotosPolanco()
{ 
  $("#fotos").fadeIn(1500);
  $(".cinta").attr("src", "../images/paginas/cintaPolanco.gif");
  $("#sucursalFotos").attr("src", "../carrousel.php?fotoSucursal=polanco");
}

function fotosSur()
{ 
  $("#fotos").fadeIn(1500);
  $(".cinta").attr("src", "../images/paginas/cintaPerisur.gif");
  $("#sucursalFotos").attr("src", "../carrousel.php?fotoSucursal=perisur");
}

function fotosCondesa()
{ 
  $("#fotos").fadeIn(1500);
  $(".cinta").attr("src", "../images/paginas/cintaCondesa.gif");
  $("#sucursalFotos").attr("src", "../carrousel.php?fotoSucursal=condesa");
}

function fotosFe()
{ 
  $("#fotos").fadeIn(1500);
  $(".cinta").attr("src", "../images/paginas/cintaSantaFe.gif");
  $("#sucursalFotos").attr("src", "../carrousel.php?fotoSucursal=santafe");
}

function signUpToSetAlarm(urls){
 var answer = confirm("Es necesario que estés registrado para que se te notifique cuando este producto vuelva a estar disponible. Oprime si, para registrarte o iniciar sesión o no, para permanecer en esta pagina")
	if (answer){
		
		window.location = ""+urls;
	}
	else{
		return false;
	}

}
function regalo()
{
  //var nombre = $("#nombreApellido").attr("value");
  
  $("#field17").css("display","none");
  
  if($.browser.webkit)
    $("#felicita").css("width", "297px");
  else
    $("#felicita").css("width", "295px");
  
  if($('[name="regalo"]:checked').val() == "no")
  {
    $("#nombreApellido").css("background-color","#F9F9F7").css("border","none").keypress(function(e){ return false;});
    $("#nombreApellido1").css("background-color","#F9F9F7").css("border","none").keypress(function(e){ return false;});
    $("#field18").css("display","none");
    $("#field15").css("display","none");
    $("#field16").css("display","none");
    $("#mensajeFelicita").css("display","none");
    $("#envuelto").css("display","none");
    $("#papel").css("display","none");
    $("#envioRemitente").css("display","none");
  }
  else
  {
    $("#field18").css("display","table-row");
    $("#field15").css("display","table-row");
    $("#field16").css("display","table-row");
    $("#mensajeFelicita").css("display","table-row");
    $("#envuelto").css("display","table-row");
    $("#papel").css("display","none");
    $("#tituloDireccion").css("display","none");
    $("#tituloDireccion2").css("display","table-row");
    $("#envioRemitente").css("display","table-row");
    $("#paisRemitente option[value=155]").attr("selected",true);
  }
  
  $("input[name='regalo']").change(function()
  {
    var regalo = $('[name="regalo"]:checked').val();
    
    if(regalo == "no")
    {
      $("#field18").css("display","none");
      $("#field15").css("display","none");
      $("#field16").css("display","none");
      $("#mensajeFelicita").css("display","none");
      $("#envuelto").css("display","none");
      $("#papel").css("display","none");
      $("#tituloDireccion").css("display","block");
      $("#tituloDireccion2").css("display","none");
      
      if($('[name="envolver"]:checked').val() == "ok")
      {
        $('input[name=envolver]').attr('checked', false);
        $("#noEnvuelto").attr("checked", true);
      }

      $("#envioRemitente").css("display","none");
    }
    else
    {
      $("#field18").css("display","table-row");
      $("#field15").css("display","table-row");
      $("#field16").css("display","table-row");
      $("#mensajeFelicita").css("display","table-row");
      $("#envuelto").css("display","table-row");
      $("#papel").css("display","none");
      $("#tituloDireccion").css("display","none");
      $("#tituloDireccion2").css("display","table-row");
      
      if($('[name="envolver"]:checked').val() == "undefined")
        $("#nop").attr("checked", true);

      $("#envioRemitente").css("display","table-row");
      $("#paisRemitente option[value=155]").attr("selected",true);
    }
  });
    
  if($('[name="envolver"]:checked').val() == "ok")
    $("#papel").css("display","table-row");
  else
    $("#papel").css("display","none");
  
  $("input[name='envolver']").change(function()
  {
    var envolver = $('[name="envolver"]:checked').val();
    
    if(envolver == "ok")
    {
      $("#papel").css("display","table-row");
      $("#papel1").attr("checked", true);
    }
    else
    {
      $("#papel").css("display","none");
    }
  });
}

function papel(tipo)
{
  if(tipo == 1)
    $("#papel1").attr("checked", true);
  else
    $("#papel2").attr("checked", true);
}

function disponibilidad()
{
  $("#mensaje").css("width",screen.width*2);
  $("#mensaje").css("height",screen.height*2);
  
  var left   = (screen.width  - 506)/2;
  
  $("#advertencia").css("left",left);
  
  if($.browser.webkit)
  {
    $("#valora").css("margin-top","10px");
    $("#regalito").css("margin-top","-2px");
    $("#dispon").css("margin-top","26px");
    $("#condesa").css("margin-top","25px");
    $("#rosa").css("margin-left","115px");
    $("#roma").css("top","-55px");
  }
  else
  {
    $("#valora").css("margin-top","13px");
    $("#regalito").css("margin-top","-3px");
    $("#dispon").css("margin-top","2px");
    $("#condesa").css("margin-top","28px");
    $("#rosa").css("margin-left","-45px");
    $("#roma").css("top","-53px");
  }
}

function mostrardiv() 
{
  div = document.getElementById('mensaje');
  div.style.display = '';
  
  $("#advertencia").css("position", "fixed");
  $("#advertencia").css("top", function(){
    var alto = $(window).height();
    var total = (alto - 176)/2;
    return total;
  });
  
  $("#advertencia").css("left", function(){
    var ancho = $(window).width();
    var total = (ancho - 506)/2;
    return total;
  });
  
  $("#advertencia").css("display","block");
  $(".commonbg").css("overflow","hidden");
  
  $("#disponTiendaImg").css("margin-left","-15px");
}

function cerrarDiv()
{
  $("#tablaPrecio").css("display","none");
  $("#flotante").slideDown(1618);
  div = document.getElementById('flotante');
  div.style.display = '';
  $("#mensaje").css("display","none");
  $("#advertencia").css("display","none");
  $(".commonbg").css("overflow","");
}

function mostrarDatos()
{
  if($(".datos").css("display") == "none")
    $(".datos").slideDown("slow");
  else
    $(".datos").slideUp("slow");
}

function cerrar() 
{
  div = document.getElementById('flotante');
  div.style.display='none';
  $("#tablaPrecio").css("display","block");
  $('#mostrarDiv a').attr({'href': 'javascript:mostrardiv();'});
  $('#mostrarDivImg a').attr({'href': 'javascript:mostrardiv();'});
  $('#disponTienda a').attr({'href': 'javascript:mostrardiv(0);'});
  $('#disponTiendaImg a').attr({'href': 'javascript:mostrardiv(0);'});
  $('#disponTiendaImg').css("margin-left","0px");
  $('.wishlistAdd').css("margin-top","10px");
  $('#regalito').css("margin-top","0px");
}

function	hideItemById(itemId){
$("#"+itemId).css("display","none");
$("#facbookConnectButton").css("display","inline-block");
}
function soporte()
{
  $("select[name=support_type_id] option[value=2]").attr("selected",true);
}

function precioProducto(){
  var arrPrecio = $(".priceBlocks").text().split(":");
  if(!(typeof arrPrecio[1] === "undefined")){
    var arrEtiqueta = arrPrecio[1].split("$");
  }
  
  if(arrEtiqueta[1] != undefined)
  {
    $(".precio").text("$"+arrEtiqueta[1]);
    $(".etiqueta").text(arrEtiqueta[0]);
  }
  else
  {
    var arrEuro = arrPrecio[1].split("€");
    var euro = arrPrecio[1];
    
    $(".precio").text(arrEuro[1]);
    $(".etiqueta").text(euro[1]);
  }
}
function ajusteIpad(){
  var isiPad = navigator.userAgent.match(/iPad/i) != null;
  if(isiPad ){$("#busqueda").css("width","100px");$("#example2 img").attr("width","1800px");}
}
 function cambiarTextocoupon(textoDefault) {
 //changes text on the search box: to "" on focus
 $("#cuponInput").focus(function(){ 
if($("#cuponInput").attr('value')== textoDefault){
$("#cuponInput").attr('value','').css("color","black").css("font-style","normal");
}
})
}

function submitCupon()
{//alert($("#pais").val()+"-"+$("#paisRemitente").val());
  if(($("#pais").val() != 155 && $('[name="regalo"]:checked').val() == "no") || ($("#paisRemitente").val() != 155 && $('[name="regalo"]:checked').val() == "si"))
  {
    $("#cuponDiv").css("display","none");
  }
  
  if($("#EstadoCupon").html()=="Este cupón se agregó con éxito al carro.")
  {
    $("#selectPayformButton").click();
  }
  
  if($("#cuponText").html()=="Envió gratuito por inauguración")
  {
    $("#cuponDiv").css("display","none");
  }
  
  $("#submitCupon").click(function(){
    $("#coupon_code").val($("#cuponInput").val());
    
    if($("[name=regalo1]").is(':checked'))//if(!($("#noRegaloCupon").text()))
    {
      $("#regaloValorCupon").val($("[name=regalo]").val());
      $("#regaloFromCupon").val($("[name=op_name_15]").val());
      $("#regaloToCupon").val($("[name=op_name_18]").val());
      $("#regaloFelicitaCupon").val($("[name=felicita]").val());
      $("#regaloFelicitaCupon").val($("#mensajeReg").text());
      $("#remitenteCalleCupon").val($("[name=calle_remitente]").val());
      $("#remitenteEntreCupon").val($("[name=calles_remitente]").val());
      $("#remitenteColoniaCupon").val($("[name=col_remitente]").val());
      $("#remitenteCiudadCupon").val($("[name=ciu_remitente]").val());
      $("#remitenteCPCupon").val($("[name=cp_remitente]").val());
      $("#remitentePaisCupon").val($("[name=delivery_country_id_pais]").val());
      $("#remitenteEstadoCupon").val($("[name=delivery_state_id]").val());
      $("#remitenteEstadoExtranjeroCupon").val($("#remitenteEstado").text());
      $("#remitenteTelefonoCupon").val($("[name=tel_remitente]").val());

      if($("#noEnvuelto").text().trim() == 'Regalo envuelto')
      {
        $("#regaloenvolverCupon").val($("[name=envolver]").val());
        $("#regaloPapelCupon").val($("[name=papel]:checked").val());
      }
    }
    
    if($("#factura").is(':checked'))//$("#factura").val())
    {
      $("#facturaCupon").val($("#factura").val());
      $("#RazonSocialCupon").val($("#razonSocial").val());
      $("#RFCCupon").val($("[name=op_name_19]").val());
      $("#calleFacturaCupon").val($("[name=delivery_address1]").val());
      $("#coloniaFacturaCupon").val($("[name=delivery_address2]").val());
      $("#delegacionFacturaCupon").val($("[name=op_name_12]").val());
      $("#CPfacturaCupon").val($("[name=delivery_zip]").val());
      $("#estadoFacturaCupon").val($("[name=delivery_state_id]").val());
    }
    document.coupon.submit();
    return false;
  });
}
function linksToBlank(){
if(queryString("FacebookApp")=="come"){
 $('#formularioBusqueda').attr('target','_blank');
 $('a').attr('target','_blank');
 }
}
function mailSuscribeCheck(){
 var mail=$("#email").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   var pass= $('input[name="password"]').val();
   var confirm= $('input[name="confirm"]').val();
   var suscribir= $('input[name="subscribe"]').attr("checked");
  
 if (pass==confirm&&filter.test(mail)&&$("#name").attr("value").length>2&&$("#last_name").attr("value").length>1) {
 if(suscribir!='checked'){
  
 
 }else{$("#subscriptionStatus").load("/ConstantContac/signup/index.php?EmailAddress="+mail,function(){if(queryString("test")){alert($("#subscriptionStatus").text()+"/mailBienvenida.php?from=loggin&emailSubscription="+$("#email").attr("value")+"&name="+$("#name").attr("value"));}}).delay(3000); return false;
 //alert("Gracias por suscribirte al boletín");
  }
 }
}
function Test(){
var mail=$("#email").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
   var pass= $('input[name="password"]').val();
   var confirm= $('input[name="confirm"]').val();
   var suscribir= $('input[name="subscribe"]').attr("checked");
   alert(((suscribir=='checked')&&pass==confirm&&filter.test(mail)&&$("#name").attr("value").length>2&&$("#last_name").attr("value").length>1));
   alert(confirm);
   alert(suscribir=='checked');
}
function blowUp(){
$("center div").each(function(){
if($(this).css("color")=="rgb(192, 192, 192)"){
$(this).css('color','#000');
$(this).text("");}
});
}
function faceBookConnectShow(){

$("#facbookConnectButton").click(function (){ 
  $("#facebookPanelConnect").load("/faceBookConect.php",function(){$("#faceContainer").css("display","block");});
  $("#facbookConnectButton").css("display","none");
  
  });

}
function loadCintilloNuevo(dir){
var direccion;
if($.browser.webkit)
direccion=dir+'chrome .block-related-products';
else
direccion=dir+' .block-related-products';
$('#cintillo').load(direccion,function
(){ $('#example3').bxCarousel({
display_num: 5,
move: 1,
prev_image: 'LSCA-FEnBOOKS/imagenes/flechaprev.png',
next_image: 'LSCA-FEnBOOKS/imagenes/flechasigu.png',
margin: 15
})});
//$('.blockTD table').css("width","100%");
$('.block-custom-page-body').css("padding-left","25px");
$('.block-custom-page-body').css("width","95%");
//$('.backBtn').css("margin-left","-30px");
$('.backBtn').css("margin-top","-22px");
$('.titleTop').css("background","#F2EFEA");
$('.padding10px').css("border-bottom","solid 10px #F2EFEA");
$('.padding10px').css("border-left","solid 10px #F2EFEA");
$('.padding10px').css("border-right","solid 10px #F2EFEA");

}
function loadCintillo(dir){//deprecada
var direccion;
if($.browser.webkit)
direccion='product_details.php?item_id='+dir+'&nav=chrome .block-related-products';
else
direccion='product_details.php?item_id='+dir+' .block-related-products';
$('#cintillo').load(direccion,function
(){ $('#example3').bxCarousel({
display_num: 5,
move: 1,
prev_image: 'LSCA-FEnBOOKS/imagenes/flechaprev.png',
next_image: 'LSCA-FEnBOOKS/imagenes/flechasigu.png',
margin: 15
})});
//$('.blockTD table').css("width","100%");
$('.block-custom-page-body').css("padding-left","25px");
$('.block-custom-page-body').css("width","95%");
//$('.backBtn').css("margin-left","-30px");
$('.backBtn').css("margin-top","-22px");
$('.titleTop').css("background","#F2EFEA");
$('.padding10px').css("border-bottom","solid 10px #F2EFEA");
$('.padding10px').css("border-left","solid 10px #F2EFEA");
$('.padding10px').css("border-right","solid 10px #F2EFEA");

}
function autoSeeMore(){
  var str=String(window.location);
  var patt=/#a/g;
   if(str.indexOf("#a"))
  {

    var arrId = str.split('#');
    if(arrId[1]!=null){
    var id = arrId[1].substring(1,arrId[1].length);}
    else{var id ="1";}
    var selector="#link_see_more_"+id;
    $(selector).click();
    $("#tabla_"+id+" td").css("background","#D3E3F1");
    $("#tabla_"+id+" table").css("background","#D3E3F1");
    $("#tabla_"+id).css("background","#D3E3F1");
    
    $(".bloque").slideUp(5);
    $("#"+id+" a").click().parent().parent().slideDown();
    $("#preguntas a").not("#seccion6 a").css("color","#411600");
    
    var secc = id.split("pregunta");
    if(secc[1]!=null){
    $("#seccion"+secc[1].substring(1,0)+" a").css("color","#eb5e35");
    }
  }
}
function mostrarPreciosEnvio(){
  $("#precioEnvio").css("display","table-row");//delay(1000).slideDown("slow");
}

function seeMoreArticle(){ 
  $(".article_more").click(function(){
    var id=$(this).attr("rel");
    var article=$(this).attr("href");
    var loader= "#article_"+id+"_full";
    var nav="";
    
    if($.browser.webkit)
      nav="chrome";
    
    $(loader).load(article+"&nav="+nav+" #articleDescription_"+id,function(){
      $(loader).slideDown("slow");
      $("#article_"+id).css("display","none");
      $("#menos_"+id).css("display","block");
      $("#recomienda_"+id).attr("valign","top");
      $("#articleDescription_"+id).html($("#articleDescription_"+id).html());
      //$(".resenaCreada").html($(".resenaCreada").text());
    });
    return false;
  });
  
  $(".article_less").click(function(){
    var id=$(this).attr("rel");
    $("#article_"+id).slideUp("slow");
    $("#article_"+id).css("display","block");
    $("#menos_"+id).css("display","none");
    $("#articleDescription_"+id).css("display","none");
    return false;
  });  
}

function contenidoArticulo(eventoRecomendacion)
{
  var abreParrafo, cierraParrafo, abreParrafoSegundo;
  
  if(eventoRecomendacion == 1)
  {
    $('.articlePrev').each(function(){
      abreParrafo = $(this).html().replace('<p>', '');
      cierraParrafo = abreParrafo.replace('</p>', '');
      abreParrafoSegundo = cierraParrafo.replace('<p>', '');   
      $(this).html(abreParrafoSegundo.replace('</p>', ''));
    });
  }
  else if(eventoRecomendacion == 6)
  {
    $('.articlePrev').each(function(){
      abreParrafo = $(this).html().replace('<p>', '');
      $(this).html(abreParrafo.replace('</p>', ''));
    });
  }
}
/*
function pressEnter(){
  $('input:text').bind("keydown", function(e) {
    var n = $("input:text").length;
    if (e.which == 13) 
    { //Enter key
       e.preventDefault(); //to skip default behavior of the enter key
       var nextIndex = $('input:text').index(this) + 1;
       if(nextIndex < n)
         $('input:text')[nextIndex].focus();
       else
         $('input:text')[nextIndex-1].blur();
         
       return false;
    }
  });
}
*/
function redirectFromLoggin(){
  if(queryString("fromLoggin")=="true"){
    window.location="/index.php";
  }
}
function ocultarTextoError(){
  $(".errorbg b").each(function (){ 
    $(this).text( $(this).text().replace("Información de usuario",""));
    $(this).text( $(this).text().replace("Información personal",""));
    $(this).text( $(this).text().replace("Número de teléfono durante el día","Teléfono"));
  });
  $(".errorbg").each(function (){
    $(this).html( $(this).html().replace("Se requiere <b>Envío Calle y número</b><br>",""));
    $(this).html( $(this).html().replace("Se requiere <b>Envío Ciudad</b><br>",""));
    $(this).html( $(this).html().replace("Se requiere <b>Envío Código postal</b><br>",""));
  });
}

function user_country_id(){
  var paisUsuario=$("#user_country_id").val();
  if(paisUsuario){
    if(paisUsuario.length){
      $(".state option[value="+paisUsuario+"]").attr("selected",true);
    if($("#user_country_id").val() != 0)
      $("#pais").val($("#user_country_id").val());
    }
  }
   stateChange();
}

function commentsForm(){}

function generarAlerta(user_id,item_id){
  //alert("tep");
  $.ajax({
    url: '/admin/setAlarm.php',
    data: "userID="+user_id+"&productID="+item_id,
    success: function( data ) {
      alert("Se le enviara un mail cuando tengamos este producto disponible");
    }
  });
}

function stateChange()
{
  if($("#pais option:selected").val() == '')
    $("#field14").attr("disabled", "none");
  else if($("#pais option:selected").val() != 155)
  {
    $("#fieldEstadoMexico").css("display","none");
    $("#field14").css("display","table-row");
    $("#informacionFactura").css("display","none");
    $('#factura').attr('disabled','disabled');
    $('#factura').attr('checked', false);
  }
  else if($("#pais option:selected").val() == 155)
  {
    $("#fieldEstadoMexico").css("display","table-row");
    $("#field14").css("display","none");
    $('#factura').attr('disabled',false);
  }
      
  if($("#paisRemitente option:selected").val() == '')
    $("#estadoRemitente1").attr("disabled", "none");
  else if($("#paisRemitente option:selected").val() != 155)
  {
    $("#estadoRemitente").css("display","none");
    $("#estadoRemitente1").css("display","table-row");
  }
  else if($("#paisRemitente option:selected").val() == 155)
  {
    $("#estadoRemitente").css("display","table-row");
    $("#estadoRemitente1").css("display","none");
  }
}

function cambiarEstado(){
  $("#field14").css("display","none");
  $("#pais").change(function(){
    stateChange();
  });
  $("#paisRemitente").change(function(){
    $("#copiaPaisRemitente").val($("#paisRemitente").val());
    stateChange();
  });
}

function validarTelefono(){
  $(".phone").blur(function(){  
    var longitud = $(this).val().length;
    if(longitud > 0 && longitud < 5)
    {
      $(".mensajeErrorPhone").text("El teléfono debe tener más de 5 caracteres");
      $("#informacionFactura").css("display","none");
      $('#factura').attr('checked', false);
    }
    else
      $(".mensajeErrorPhone").text("");
  });
}    

function validarCodigoPostal(){
  $(".zipcode").blur(function(){
    var longitud = $(this).val().length;
    if((longitud > 0 && longitud < 5) || longitud > 5)
    {
      $(".mensajeErrorZipcode").text("El código postal debe ser de 5 caracteres");
      $("#informacionFactura").css("display","none");
      $('#factura').attr('checked', false);
    }
    else
      $(".mensajeErrorZipcode").text("");
  });
}

function validarCodigoPostal2(){
  $(".zipcode2").blur(function(){  
    var longitud = $(this).val().length;
    if((longitud > 0 && longitud < 5) || longitud > 5)
      $(".mensajeErrorZipcode2").text("El código postal debe ser de 5 caracteres");
    else
      $(".mensajeErrorZipcode2").text("");
  });
}

function validarRFC(){
  $(".class9").blur(function(){  
    var longitud = $(this).val().length;
    if(longitud > 0 && longitud < 12)
      $(".mensajeErrorRFC").text("El RFC debe ser de 13 caracteres");
    else
      $(".mensajeErrorRFC").text("");
  });
}
function seeMore(){
 $("#seeMore").click(function () {
  $("#seeMore").css("display","none");
  $("#viartReview").css("display","none");
  $("#descripcion2").css("display","block");
  $("#seeLess").css("display","block");
  $("#less").slideToggle("slow");
  return false;
  });  
   
  $("#seeLess").click(function () {
    $("#less").slideToggle("slow");
    $("#seeLess").css("display","none");
    $("#seeMore").css("display","block");
    $("#descripcion2").css("display","none");
    $("#viartReview").css("display","block");
    return false;
  });   
}
function verFactura(){
  $("#factura").change(function () {
    if($("#factura").attr("checked") == "checked")
      $("#informacionFactura").slideToggle("slow");
    else
      $("#informacionFactura").css("display","none");
    return false;
  });  
}

function popUps(){
//MPR 19/01/12 
  $("a[rel='tag'], .pop-up, a[rel='tag nofollow'],a[rel='pop-up'],a[rel='pop-up nofollow']").click(function () {
    if($(this).attr('class')=='popupsize')   
    { 
      var width  = 650;
      var height = 400;
    }
    else if($(this).attr('class')=='popupsize1' || $(this).attr('class')=='popupsize3 scroll pop-up' || $(this).attr('class')=='pop-up')
    { 
      var width  = 700;
      var height = 700;
    }
    else if($(this).attr('class')=='popupsize2')
    { 
      var width  = 435;
      var height = 435;
    }
    else
    {
      var width  = 600;
      var height = 500;
    }
    
    if($(this).attr('class')=='scroll'|| $(this).attr('class')=='popupsize3 scroll pop-up' || $(this).attr('class')=='pop-up')   
    { 
      var scroll  = 'yes';
      var resizable = 'yes';
    }
    else
    {
      var scroll  = 'no';
      var resizable = 'no';
    }
    var left   = (screen.width  - width)/2;
    var top    = (screen.height - height)/2;
    var params = 'width='+width+', height='+height;
    params += ', top='+top+', left='+left;
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable='+resizable;
    params += ', scrollbars='+scroll;
    params += ', status=no';
    params += ', toolbar=no';
 
    nueva=window.open($(this).attr("href"), 'Popup', params);

	if(parseInt(navigator.appVersion) >= 4)
      nueva.window.focus();

    return false;
 });
}

function tooltip(){	
	/* CONFIG */		
		xOffset = 10;
		yOffset = 20;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */		
	$(".tooltip").hover(function(e){											  
		this.t = this.title;
		this.title = "";		
						  
		$("body").append("<p id='tooltip'>"+ this.t +"</p>");
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.css("z-index","999")
			.delay(330)
			.fadeIn('fast');		
    },
	function(){
		this.title = this.t;		
		$("#tooltip").remove();
    });	
	$(".tooltip").mousemove(function(e){
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};

jQuery.fn.exists = function(){return this.length>0;}
function verifyMail(){

    $(".block-subscribe form").submit(function() {
    var mail=$("#mailSubscripcion").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (!filter.test(mail)) {
alert('Tu direción de email no parece válida, por favor verifícala');
$(this).focus;
return false;
}else{alert('¡Felicidades! Ya eres suscriptor de nuestro boletín.');$(".footerHTML").load("ConstantContac/signup/index.php?EmailAddress="+mail);return false;
}
}
);    
    }    
function fancyAllWindows()
 {
 $("a .prev img").click(fancy());
 }
function fancyUp(){
var libros=$(".upperDeck ul.thumb li").not('.placer');
libros.each(function (){
if(!$(this).find(".itemCaptionOuter").exists()&&$(this).find('img').attr('alt')){
$(this).find("a").after('<div class="itemCaptionOuter"><div class="carouselItemsCaption"><span class="title"><a href="'+$(this).find('a').attr('href')+'" >'+	$(this).find('img').attr('alt')+'</a></span><br/><span class="editorialRelacionados">'+	$(this).find('img').attr('title')+'</span></div></div>');
}
$(this).hover(function() {
	$(this).css({'z-index' : '10'});
	var esto=this;
	$(this).find('img').stop().delay(600)
		.animate({
				marginTop: '-60px', 
			marginLeft: '-80px', 
			top: '50%', 
			left: '50%', 
			width: '174px', 
			height: '209px'
		}, 100,function(){$(esto).find('.carouselItemsCaption').stop(true).css("display","block");});
	
	} , function() {
	$(this).css({'z-index' : '0'});
	$(this).find('.carouselItemsCaption').stop(true).css("display","none");
	$(this).find('img').stop(true)
		.animate({
			marginTop: '10px', 
			marginLeft: '10px',
			top: '0', 
			left: '0', 
			width: '80px', 
			height: '100px'
		}, 60);
});
});

}  
function fancy(){
$(".rssincl-backlink").css('max-height','2px');
$("ul.thumb li").css('margin-left','-10px');
$('.mainContentBgr .bx_container').not('.relatedCarouselBlock .bx_container').css("margin-left","0px").css("margin-right","0px").css("width","99%");
$(".upperDeck ul.thumb li").unbind('mouseenter mouseleave');
$(".centerDeck ul.thumb li").unbind('mouseenter mouseleave');
$(".bottomDeck ul.thumb li").unbind('mouseenter mouseleave');
fancyUp();
fancyDown();

var libros=$(".centerDeck ul.thumb li").not('.placer');
libros.each(function (){
if(!$(this).find(".itemCaptionOuterCenter").exists()&&$(this).find('img').attr('alt')){
$(this).find("a").after('<div class="itemCaptionOuterCenter"><div class="carouselItemsCaptionCenter"><span class="title"><a href="'+$(this).find('a').attr('href')+'" >'+	$(this).find('img').attr('alt')+'</a></span><br/><span class="editorialRelacionados">'+	$(this).find('img').attr('title')+'</span></div></div>');
}
$(this).hover(function() {
	$(this).css({'z-index' : '10'});
	var esto=this;
	$(this).find('img').stop().delay(600)
		.animate({
			marginTop: '-110px', 
			marginLeft: '-80px', 
			top: '50%', 
			left: '50%', 
			width: '174px', 
			height: '209px'
		}, 100,function(){$(esto).find('.carouselItemsCaptionCenter').stop(true).css("display","block");});
	
	} , function() {
	$(this).css({'z-index' : '0'});
	$(this).find('.carouselItemsCaptionCenter').stop(true).css("display","none");
	$(this).find('img').stop(true)
		.animate({
			marginTop: '10px', 
			marginLeft: '10px',
			top: '0', 
			left: '0', 
			width: '80px', 
			height: '100px'
		}, 60);
});
});
linksToBlank();
}
function fancyDown(){
var libros=$(".bottomDeck ul.thumb li").not('.placer');
libros.each(function (){
if(!$(this).find(".itemCaptionOuterBottom").exists()&&$(this).find('img').attr('alt')){
$(this).find("a").after('<div class="itemCaptionOuterBottom"><div class="carouselItemsCaptionBottom"><span class="title"><a href="'+$(this).find('a').attr('href')+'" >'+	$(this).find('img').attr('alt')+'</a></span><br/><span class="editorialRelacionados">'+	$(this).find('img').attr('title')+'</span></div></div>');
}
$(this).hover(function() {
	$(this).css({'z-index' : '10'});
	var esto=this;
	$(this).find('img').stop().delay(600)
		.animate({
			marginTop: '-220px', 
			marginLeft: '-80px',
			top: '50%', 
			left: '50%', 
			width: '174px', 
			height: '209px'
		}, 100,function(){$(esto).find('.carouselItemsCaptionBottom').stop(true).css("display","block");});
	
	} , function() {
	$(this).css({'z-index' : '0'});
	$(this).find('.carouselItemsCaptionBottom').stop(true).css("display","none");
	$(this).find('img').stop(true)
		.animate({
			marginTop: '10px', 
			marginLeft: '10px',
			top: '0', 
			left: '0', 
			width: '80px', 
			height: '100px'
		}, 60);
});
});

}   
function saltosdeLinea()
{
  var tablaHombres = "<table id='playeraLC'><tr><td>Talles</td><td>Alto (cm.)</td><td>Ancho (cm.)</td></tr><tr><td>M </td><td>67.5</td><td>51.0</td></tr>	<tr><td>G</td><td>68.5</td><td>53.0</td></tr>	<tr><td>XL</td><td>79.0</td><td>62.3</td></tr></table>";
  var tablaMujeres = "<table id='playeraLC'><tr><td>Talles</td><td>Alto (cm.)</td><td>Ancho (cm.)</td></tr><tr><td>M </td><td>57.5</td><td>41.0</td></tr>	<tr><td>G</td><td>61.5</td><td>44.0</td></tr>	<tr><td>XL</td><td>63.0</td><td>46.0</td></tr></table>";

  if($("#viartReview").html() != null)
  {
    $("#viartReview").html($("#viartReview").html().replace('[tabla_hombres]',tablaHombres).replace('[tabla_mujeres]',tablaMujeres).replace('``> reseña de usuario',""));
  
  }
  if( $("#descripcion2").html() != null)
  {
    $("#descripcion2").html($("#descripcion2").html().replace('[tabla_hombres]',tablaHombres).replace('[tabla_mujeres]',tablaMujeres).replace('``> reseña de usuario',""));
  }
  $(".resenaCreada").each(function (){
    $(this).html($(this).text());
  });
} 

 function cambiarTextoBusquedaDefault(textoDefault) {
 //changes text on the search box: to "" on focus
 $("#busqueda").focus(function(){ 
if($("#busqueda").attr('value')== textoDefault){
$("#busqueda").attr('value','');
$("#busqueda").css("color","black");
$("#busqueda").css("font-style","normal");
$("#busqueda").css("background","#FFF");
}
})
}
 function reestablecerTextoBusquedaDefault(textoDefault) {
//changes text on the search box to its default text if the textBox is empty on blur
$("#busqueda").focusout(function(){ 
if($("#busqueda").attr('value')=="")
{
$("#busqueda").attr('value',textoDefault);
$("#busqueda").css("font-style","oblique");
$("#busqueda").css("color","#7F7A5C");
$("#busqueda").css("background","#D8D4CA");
}})
}

function jqCheckAll( id, name )
{
   $("INPUT[@name=" + name + "][type='checkbox']").attr('checked', $('#' + id).is(':checked'));
}

function radio(name,value)
{
	alert(value+": "+$('input[@name='+name+'][type=checkbox]').attr('checked'));
}

function agregarCadenaBusqueda(textoDefault){
	//adds search parameter from pendu menu to search string if needed 
	$("#qm0 div a").click(function(){

	var link = $(this).attr("href");//recuperamos el valor del link
	if(link=="javascript:void(0);"){link="products_search.php";}

	if($("#busqueda").attr('value')!= textoDefault&&$("#busqueda").attr('value')!=""){
	//link=addLinkParameter(link,"search_string",$("#busqueda").attr('value'));
	//link=addLinkParameter(link,"search","+Adelante+");
	$("input[name='separacionExistencia'] ").attr('checked');
	$(this).attr("href",link);
	}
	});
}
function ligarBusqueda(){
}

function ocultarEditorMenus(){
//hides the current text box for search
$("#qmv_open_visual_interface").css("display","none");
}
function redireccionarServidor(siteURL){
}

function direccionarBusquedas(siteURL){
//links search parameters from clients side to avoid hardcoding
var uriBusquedas="products_search.php";
/*Search Categories*/
}
function addLinkParameter(link,name,parameter)
{
  var nuevoLink;
  var banner;
  
  if(link.indexOf("#") != -1)
  {
    nuevoLink = link.substring(0,link.indexOf("#")-5);
    banner = link.substring(link.indexOf("#")-5);
  }
  
  if(nuevoLink == undefined)
  {
    if(link.indexOf("?")==-1)
      link=link+"?";
    else
      link=link+"&";
      
    link=link+name+"="+escape(parameter);
  }
  else
    link=nuevoLink+name+"="+escape(parameter)+"&"+banner;
  
  return link;
}

function hideLabels(){
$("select[name='country_id'] option[value='155']").attr("text", "México");
$("select[name='country_id'] option[value='155']").attr("selected", true);
var texto=$(".loginForm").html();
if(texto.indexOf("Bienvenido")!=-1&&texto.indexOf("Bienvenido")<=10){
texto=texto.replace("Bienvenido","");
$(".loginForm").html(texto);

}
$(".mainLoginSearch").css("display","none");
$(".listTable th").addClass("headerSorter");
$(".sorter").css("background-color","#224757");
$(".headerSorter").css("background-color","#224757");
//$("#example1_wrap .bx_container").css("width","810px");

}
function changeCurrency(){
var str=String(window.location); 
$("#currencyMXN").wrap("<a href='"+addLinkParameter(str,"currency_code","MXN")+"'>");
$("#currencyUSD").wrap("<a href='"+addLinkParameter(str,"currency_code","USD")+"'>");
$("#currencyEUR").wrap("<a href='"+addLinkParameter(str,"currency_code","EUR")+"'>");
$("#langES").wrap("<a href='"+addLinkParameter(str,"language_code","es")+"'>");
$("#langEN").wrap("<a href='"+addLinkParameter(str,"language_code","en")+"'>");

}

function removeCustomAlert() {
	$("#modalContainer").fadeOut('slow');
}

/**Función que mapea y presenta la información de cada producto dentro de la página product details**/
function propertiesBlock(){
  //$(".propertiesBlock div").css("display", "none");
  $("#paddedDiv, #desc_data,#viartReview").css("display", "block");
  $("#reviews_data,#reviews_data div").css("display", "block");

  var texto=String($(".propertiesBlock div:contains('Idioma')").html());
  if(texto!="null")
    $("#descripcion_idioma").html(texto.replace("Idioma", "").replace(": No disponible", ""));
    
  texto=String($(".propertiesBlock div:contains('Publisher Name')").html());
  if(texto!="null")
    $("#descripcion_editorial").html(texto.replace("Publisher Name", "").replace(": No disponible", ""));
   
   texto=String($(".editoriales").html());
   if(texto.indexOf("sinEditorialPapeleria")==0)
   { 
      $(".editoriales").css('display','none');
      $(".idiomas").css('display','none');
   }
   
   texto=String($(".idiomas").html());
   if(texto.indexOf("SinIdioma")==0)
    $(".idiomas").css('display','none');
    
  texto=String($(".propertiesBlock div:contains('Nr of pages')").html());
  if(texto!="null")
    $("#descripcion_paginas").html(texto.replace("Nr of pages", "").replace(": No disponible", ""));
    
  texto=String($(".propertiesBlock div:contains('Código')").html());
  if(texto!="null")
    $(".propertiesBlock div:contains('Código')").html(texto.replace("Código", "").replace(": No disponible", ""));
    
  texto=String($(".propertiesBlock div:contains('SeriesTitle')").html());
  if(texto!="null")
    $("#descripcion_serie").html(texto.replace("SeriesTitle", "").replace(": No disponible", ""));
    
  texto=String($(".propertiesBlock div:contains('Width')").html());
  if(texto!="null")
    $("#descripcion_ancho").html(texto.replace("Width", "").replace(": No disponible", ""));
    
  texto=String($(".propertiesBlock div:contains('Height')").html());
  if(texto!="null")
    $("#descripcion_alto").html(texto.replace("Height", "").replace(": No disponible", ""));
    
  texto=String($(".propertiesBlock div:contains('Depth')").html());
  if(texto!="null")
    $("#descripcion_grueso").html(texto.replace("Depth", "").replace(": No disponible", ""));
    
  texto=String($(".propertiesBlock div:contains('Weight')").html());
  if(texto!="null")
    $("#descripcion_peso").html(texto.replace("Weight", "").replace(": No disponible", ""));

  /*texto=String($(".propertiesBlock div:contains('Nombre del Fabricante')").html());
  $(".propertiesBlock div:contains('Nombre del Fabricante')").html(texto.replace("Nombre del Fabricante", "Autor").replace("No disponible", ""));
  //MPR 27/01/12 No muestre el cuadro de comentarios cuando esté vacío*/
  texto=String($(".revComment").html());
  if(texto==""){
   $("#reviews_data").css('display','none');}
}

function showTipsImg(link,image,ISBN){

if(image==""||image==""){$(link).tinyTips('light', '<img src="'+image+'"/>');}
getGRimage(ISBN, $(".tdcol1 a"));
 $(".tdcol1 a").each(function(i){
      var link = $(this).attr("href");
    var ISBN = getUrlVars(link)["item_id"];
    getGRimage("leaves+of+grass", $(".tdcol1 a"));
   });
/**$(".tdcol1 a").each(function(){
alert($(this).attr("href"););

});**/
}
function decodeEditorial(word) {
 if(word!=null){
    word = word.replace('%E1','a');
    word = word.replace('%C1','A');
    word = word.replace('%E9','e');
    word = word.replace('%C9','E');
    word = word.replace('%ED','i');
    word = word.replace('%CD','I');
    word = word.replace('%F3','o');
    word = word.replace('%D3','O');
    word = word.replace('%FA','u');
    word = word.replace('%DA','U');}
    return word;}
function addTipoEditorial(link){
$(".sorter").find("img").removeAttr('height').removeAttr('width');
  var nombreEditorial=getUrlVars(link)["editorial_name"];
  var searchS=getUrlVars(link)["search_string"];
   if(searchS&&searchS!="undefined")
   $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'search_string',searchS);
      $(this).attr('href',unescape(link));
      });
   var manf=getUrlVars(link)["manf"];
   if(manf&&manf!="undefined")
   $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'manf',manf);
      $(this).attr('href',unescape(link));
      });
      var category_id=getUrlVars(link)["category_id"];
   if(category_id&&category_id!="undefined")
   $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'category_id',category_id);
      $(this).attr('href',unescape(link));
      });
        var editorial_id=getUrlVars(link)["editorial_id"];
   if(editorial_id&&editorial_id!="undefined")
   $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'editorial_id',editorial_id);
      $(this).attr('href',unescape(link));
      });
  if(nombreEditorial != '' && nombreEditorial != undefined)
  {
    nombreEditorial = decodeEditorial(nombreEditorial);
 $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'editorial_name',nombreEditorial);
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });

  }
  
  var nombreGeneroLit=getUrlVars(link)["generoLit_name"];
  var idioma=getUrlVars(link)["idioma"];
  
  if(nombreGeneroLit != '' && nombreGeneroLit != undefined)
  {
    nombreGeneroLit = decodeEditorial(nombreGeneroLit);
    if(true){
      $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      links=addLinkParameter(link,'generoLit_name',nombreGeneroLit);
      if(idioma != '' && idioma != undefined)
        link = links+'&idioma=1';
      else
        link = links;
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });
    }
  }
  
  var nombreGeneroObj=getUrlVars(link)["generoObj_name"];
  
  if(nombreGeneroObj != '' && nombreGeneroObj != undefined)
  {
    nombreGeneroObj = decodeEditorial(nombreGeneroObj);   
    if(true){
      $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'generoObj_name',nombreGeneroObj);
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });
    }
  }
  
  var nombreGeneroPel=getUrlVars(link)["generoPel_name"];
  
  if(nombreGeneroPel != '' && nombreGeneroPel != undefined)
  {
    nombreGeneroPel = decodeEditorial(nombreGeneroPel);
  if(true){
      $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'generoPel_name',nombreGeneroPel);
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });
    }
  }
  
  var nombreGeneroMus=getUrlVars(link)["generoMus_name"];
  
  if(nombreGeneroMus != '' && nombreGeneroMus != undefined)
  {
    nombreGeneroMus = decodeEditorial(nombreGeneroMus);
 if(true){
      $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'generoMus_name',nombreGeneroMus);
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });
    }
  }
  
  var nombreDisenadorObj=getUrlVars(link)["disenador_name"];
  
  if(nombreDisenadorObj != '' && nombreDisenadorObj != undefined)
  {
    nombreDisenadorObj = decodeEditorial(nombreDisenadorObj);
    
    if(true){
      $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'disenador_name',nombreDisenadorObj);
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });
    }
  }
  
  var nombreAutorObj=getUrlVars(link)["autor_name"];
  
  if(nombreAutorObj != '' && nombreAutorObj != undefined)
  {
    nombreAutorObj = decodeEditorial(nombreAutorObj);
    
    if(true){
      $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'autor_name',nombreAutorObj);
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });
    }
  }
  
  var nombreDirectorObj=getUrlVars(link)["director_name"];
  
  if(nombreDirectorObj != '' && nombreDirectorObj != undefined)
  {
    nombreDirectorObj = decodeEditorial(nombreDirectorObj);
    
    if(true){
      $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'director_name',nombreDirectorObj);
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });
    }
  }
  
  var tipo=getUrlVars(link)["tipo_id"];
  if(tipo != '' && tipo != undefined)
  {
    if(true){
      $('.sorter tbody tr td a').each(function(){
      var link=$(this).attr('href');
      link=addLinkParameter(link,'tipo_id',tipo);
      $(this).attr('href',unescape(link)+"&#bannerlibreria");
      });
    }
  }
  else
  {
    var editorial=getUrlVars(link)["editorial_id"];
    if(editorial != '' && editorial != undefined)
    {
      if(true){
        $('.sorter tbody tr td a').each(function(){
          var link=$(this).attr('href');
          link=addLinkParameter(link,'editorial_id',editorial);
          $(this).attr('href',unescape(link)+"&#bannerlibreria");
        });
      }
    }
  }
  
  var categoria_id1=getUrlVars(link)["categoria_id1"];
  var categoria_id2=getUrlVars(link)["categoria_id2"];
  
  if(categoria_id1 != '' && categoria_id1 != undefined)
  {
    $('.sorter tbody tr td a').each(function(){
    var link=$(this).attr('href');
    links=addLinkParameter(link,'categoria_id1',categoria_id1);
    link =links+'&categoria_id2='+categoria_id2;
    $(this).attr('href',unescape(link)+"&#bannerlibreria");
    });
  }
  
  var idioma=getUrlVars(link)["idioma"];
  var nombreGeneroLit=getUrlVars(link)["generoLit_name"];
  
  if(idioma != '' && idioma != undefined && (nombreGeneroLit == '' || nombreGeneroLit == undefined))
  {
    $('.sorter tbody tr td a').each(function(){
    var link=$(this).attr('href');
    link=addLinkParameter(link,'idioma',idioma);
    $(this).attr('href',unescape(link)+"&#bannerlibreria");
    });
  }
  
  if(/sort_ord=1/.test(link))
  {
    $('.mostrarFlechaTitulo').css("display","none");
    $('.mostrarFlechaAutor, .mostrarFlechaFormato, .mostrarFlechaCategoria,.mostrarFlechaEditorial,.mostrarFlechaPrecio').css("display","block");
  }
  else if(/sort_ord=3/.test(link))
  {
    $('.mostrarFlechaTitulo,.mostrarFlechaFormato,.mostrarFlechaCategoria,.mostrarFlechaEditorial,.mostrarFlechaPrecio').css("display","block");
    $('.mostrarFlechaAutor').css("display","none");
     }
  else if(/sort_ord=4/.test(link))
  {
    $('.mostrarFlechaTitulo,.mostrarFlechaAutor,.mostrarFlechaCategoria,.mostrarFlechaEditorial,.mostrarFlechaPrecio').css("display","block");
    $('.mostrarFlechaFormato').css("display","none");
   
  }
  else if(/sort_ord=5/.test(link))
  {
    $('.mostrarFlechaTitulo, .mostrarFlechaAutor, .mostrarFlechaFormato,.mostrarFlechaEditorial,.mostrarFlechaPrecio').css("display","block");
    $('.mostrarFlechaCategoria').css("display","none");  
  }
  else if(/sort_ord=6/.test(link))
  {
    $('.mostrarFlechaTitulo,.mostrarFlechaPrecio,.mostrarFlechaCategoria, .mostrarFlechaFormato,.mostrarFlechaAutor').css("display","block");
    $('.mostrarFlechaEditorial').css("display","none");

  }
  else if(/sort_ord=7/.test(link))
  {
    $('.mostrarFlechaTitulo,.mostrarFlechaEditorial,.mostrarFlechaCategoria,.mostrarFlechaFormato,.mostrarFlechaAutor').css("display","block");
    $('.mostrarFlechaPrecio').css("display","none");
  }
}

function ordenarBusqueda()
{
  if(/editorial_id=/.test(location.href) || /autor_name=/.test(location.href) || /editorial_name=/.test(location.href) || /generoLit_name=/.test(location.href) || 
      /disenador_name=/.test(location.href) || /generoObj_name=/.test(location.href) || /director_name=/.test(location.href) || /generoMus_name=/.test(location.href) || 
      /generoPel_name=/.test(location.href) || /tipo_id=/.test(location.href) || /category_id=/.test(location.href) || /categoria_id1/.test(location.href) || /idioma/.test(location.href))
  {
    var direccion = location.href.split('?');
    var url = direccion[1].split('&');
    var urlParametro;
    
    for(var i=0; i<=url.length; i++)
    {
      if(/editorial_id=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/autor_name=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/editorial_name=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/generoLit_name=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/disenador_name=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/generoObj_name=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/director_name=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/generoMus_name=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/generoPel_name=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/tipo_id=/.test(url[i]))
      {
        urlParametro = url[i];
        i == url.length;
      }
      else if(/categoria_id1=/.test(url[i]))
      {
        urlParametro = url[i]+"&"+url[i+1];
        i == url.length;
      }
      else if(/idioma=/.test(url[i]))
      {
        if(/generoLit_name=/.test(urlParametro))
          urlParametro += "&"+url[i];
        else
          urlParametro = url[i];
        i == url.length;
      }
    }
    
    for(var i=0; i<=url.length; i++)
    {
      if(/category_id=/.test(url[i]))
      {
        if(urlParametro != undefined)
          urlParametro += "&"+url[i];
        i == url.length;
      }
    }
    
    $('.mostrarFlechaTitulo').attr('href',direccion[0]+"?"+unescape(urlParametro)+"&sort_ord=1&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaAutor').attr('href',direccion[0]+"?"+unescape(urlParametro)+"&sort_ord=3&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaFormato').attr('href',direccion[0]+"?"+unescape(urlParametro)+"&sort_ord=4&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaCategoria').attr('href',direccion[0]+"?"+unescape(urlParametro)+"&sort_ord=5&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaEditorial').attr('href',direccion[0]+"?"+unescape(urlParametro)+"&sort_ord=6&sort_dir=asc&tipo=#bannerlibreria");    
    $('.mostrarFlechaPrecio').attr('href',direccion[0]+"?"+unescape(urlParametro)+"&sort_ord=7&sort_dir=asc&tipo=#bannerlibreria");
  }
  else
  {
    var direccion = location.href.split('&tipo=');
    
    if(direccion[1] == undefined)
    {
      direccion = location.href.split('&libertad=');
      
      if(direccion[1] == undefined)
        direccion = location.href.split('&#');
    }
    
    var url = direccion[0].split('&sort_ord=');

    $('.mostrarFlechaTitulo').attr('href',unescape(url[0])+"&sort_ord=1&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaAutor').attr('href',unescape(url[0])+"&sort_ord=3&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaFormato').attr('href',unescape(url[0])+"&sort_ord=4&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaCategoria').attr('href',unescape(url[0])+"&sort_ord=5&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaEditorial').attr('href',unescape(url[0])+"&sort_ord=6&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaPrecio').attr('href',unescape(url[0])+"&sort_ord=7&sort_dir=asc&tipo=#bannerlibreria");
  }
  
  if(urlParametro == undefined)
  {
    var direccion = location.href.split('&tipo=');
    
    if(direccion[1] == undefined)
    {
      direccion = location.href.split('&libertad=');
      
      if(direccion[1] == undefined)
        direccion = location.href.split('&#');
    }
    var url = direccion[0].split('&sort_ord=');
    $('.mostrarFlechaTitulo').attr('href',unescape(url[0])+"&sort_ord=1&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaAutor').attr('href',unescape(url[0])+"&sort_ord=3&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaFormato').attr('href',unescape(url[0])+"&sort_ord=4&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaCategoria').attr('href',unescape(url[0])+"&sort_ord=5&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaEditorial').attr('href',unescape(url[0])+"&sort_ord=6&sort_dir=asc&tipo=#bannerlibreria");
    $('.mostrarFlechaPrecio').attr('href',unescape(url[0])+"&sort_ord=7&sort_dir=asc&tipo=#bannerlibreria");
  }
}
function getGRimage(ISBN,link){
var isbn="nombreLibro="+ISBN;
var ref="error";
$.ajax({
       type: "GET",
       url: "getGRimage.php",
       data: isbn, 
       success: function(data){
       
      $(link).tinyTips('light', '<img src="'+data+'"/>');
      
    }}) 
    
return ref;
}
function getUrlVars(url)
{
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function agregarCaterorias(){
var ninguno=false;
if((queryString('importaciones')!="checked")&&(queryString('disponibles')!="checked")&&(queryString('ebooks')!="checked")){ninguno="checked";}
var todos =$("input[name='separacionEbooks'] ").attr('checked')&&$("input[name='separacionPedido'] ").attr('checked')&&$("input[name='separacionExistencia'] ").attr('checked');
var form = $('#formularioBusqueda').submit(function () {
if($("#busqueda").attr('value')== "")
      return false;
      
    $("<input>").attr({
        'type':'hidden',
        'name':'tipo',
        'value':$('input:radio[name=separacion]:checked').val()
    }).appendTo(form);
    
    
});
$("input[name='separacionExistencia'] ").attr('checked',(queryString('disponibles')=="checked"?true:false));
$("input[name='separacionPedido'] ").attr('checked',(queryString('importaciones')=="checked"?true:false));
$("input[name='separacionEbooks'] ").attr('checked',(queryString('ebooks')=="checked"?true:false));

$("input[name='checkAll'] ").attr('checked',todos);

}
function nombreBusqueda(textoDefault)
{
  /*var Nombre = queryString("search_string");
 
  if(typeof(Nombre) !== "undefined")
  {
    Nombre = unescape(Nombre);
    
    $("#busqueda").attr('value',replaceAll(Nombre,"+"," "));
    $("#nombreBusqueda").text('Resultados de búsqueda: "'+replaceAll(Nombre,"+"," ")+'"');
  }
  
  if(typeof(queryString("search_strings")) !== "undefined")
  {
    var Nombre = decodeURIComponent(queryString("search_strings").replace('+', ' '));
    
    if(typeof (Nombre) !== "undefined")
    {
      Nombre=unescape(Nombre);
      
      $("#busqueda").attr('value',replaceAll(Nombre,"+"," "));
    }
  }*/
  
  var Nombre = queryString("search_string");
 
  if(typeof(Nombre) !== "undefined")
  {
   try{ $("#nombreBusqueda").text('Resultados de búsqueda: "'+replaceAll(Nombre,"+"," ")+'"');
  
    Nombre = decodeURIComponent(queryString("search_string").replace('+', ' '));
    
    if(typeof (Nombre) !== "undefined")
    {
      Nombre = unescape(Nombre);
      
      $("#busqueda").attr('value',replaceAll(Nombre,"+"," "));
    }
  }catch(exception){}
  }
}

function queryString(parameter) { 
  var loc = location.search.substring(1, location.search.length);
  var param_value = false;

  var params = loc.split("&");
  for (i=0; i<params.length;i++) {
      param_name = params[i].substring(0,params[i].indexOf('='));
      if (param_name == parameter) {
          param_value = params[i].substring(params[i].indexOf('=')+1)
      }
  }
  if (param_value) {
      return param_value;
  }
}
function replaceAll( text, busca, reemplaza ){
  while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca,reemplaza);

  return text;
}
 
 
function fancyThumbnail() {
$(".imagenRecomendaciones img").hover(function() {
$(this).css({'z-index' : '1000'});
$(this).addClass("hover").stop()
.animate({
marginTop: '-110px',
marginLeft: '-110px',

height: '174px',
width:'140px',
padding: '16px'
}, 200);

} , function() {
$(this).css({'z-index' : '0'});
$(this).removeClass("hover").stop()
.animate({
marginTop: '0',
marginLeft: '0',

height: '100px',
width:'80px',
padding: '16px'
}, 400);

});}
 
function pulsar(obj) {
    if (!obj.checked) return
    elem=document.getElementsByName(obj.name);
    for(i=0;i<elem.length;i++) 
        elem[i].checked=false;
    obj.checked=true;
}
function ratingStars(){
$('.rating').each(function (){
   if($(this).text()!="") var rating=$(this).text()+1;
    var stars="";
    for(i=1;i<rating;i++)
    stars=stars+"&#9733;";
    stars=stars+"";
    for(i=0;i<(5-rating);i++)
    stars=stars+"&#9734;";
    $(this).html(stars);
 });
}
function copiarDatos(datos)
{
  $(".Nombre").text($(".name").attr("value"));
  $(".CalleNum").text($(".street").attr("value"));
  $(".EntreCalles").text($(".class6").attr("value"));
  $(".Colonia").text($(".colonia").attr("value"));
  $(".Ciudad").text($(".city").attr("value"));
  $(".CodigoPostal").text($(".zipcode").attr("value"));
  user_country_id();
  $(".Pais").text($('.country option:selected').html());
  
  if($("#pais option:selected").val() != 155)
    $(".Estado").text($(".class14").attr("value"));
  else
    $(".Estado").text($('.state option:selected').html());
    
  $(".Telefono").text($(".phone").attr("value"));
  
  if(datos == "infoRegalo" || datos == "facturaRegalo")
  {
    $("#nombre").css("display","none");
    $("#tituloDirec").css("display","none");
    $("#tituloDirec2").css("display","table-row");
    $("#para").css("display","table-row");
    $(".nombrePara").text($(".class18").attr("value"));
    $("#de").css("display","table-row");
    $(".nombreDe").text($(".class15").attr("value"));
    $("#mens").css("display","table-row");
    $("#tituloDireccionRemitente1").css("display","table-row");
    $("#calleRemitente1").css("display","table-row");
    $("#entreCallesRemitente").css("display","table-row");
    $("#coloniaRemitente").css("display","table-row");
    $("#ciudadRemitente").css("display","table-row");
    $("#CPRemitente").css("display","table-row");
    $("#paisRemitente1").css("display","table-row");
    $("#estadoRemitente2").css("display","table-row");
    $("#telefonoRemitente").css("display","table-row");
  }
  else
  {
    $("#nombre").css("display","table-row");
    $("#tituloDirec").css("display","table-row");
    $("#tituloDirec2").css("display","none");
    $("#para").css("display","none");
    $("#de").css("display","none");
    $("#mens").css("display","none");
    $("#tituloDireccionRemitente1").css("display","none");
    $("#calleRemitente1").css("display","none");
    $("#entreCallesRemitente").css("display","none");
    $("#coloniaRemitente").css("display","none");
    $("#ciudadRemitente").css("display","none");
    $("#CPRemitente").css("display","none");
    $("#paisRemitente1").css("display","none");
    $("#estadoRemitente2").css("display","none");
    $("#telefonoRemitente").css("display","none");
  }
  
  if(datos == "factura" || datos == "facturaRegalo")
  {
    $("#inforFactura").css("display","inline");
    $(".RazonSocial").text($("#razonSocial").attr("value"));
    $(".RFC").text($(".class9").attr("value"));
    $(".CalleNumFactura").text($(".calleNumero").attr("value"));
    $(".ColoniaFactura").text($(".colonia2").attr("value"));
    $(".DelegacionFactura").text($(".class12").attr("value"));
    $(".CodigoPostalFactura").text($(".zipcode2").attr("value"));
    $(".EstadoFactura").text($('.state2 option:selected').html());    
  }
  else
    $("#sinFactura").html("<br>Sin factura");
}

function copiarDireccion()
{
  $("#copiarDireccion").change(function(){
  //alert($("#copiarDireccion").attr('checked'));
    if($("#copiarDireccion").is(':checked'))
    {
      $("#calleRemitente").attr("value",$("[name=address1]").val());
      $("#callesRemitente").attr("value",$("[name=op_name_6]").val()); 
      $("#colonia").attr("value",$("[name=address2]").val());
      $("#ciudad").attr("value",$("[name=city]").val());
      $("#cp_remitente").attr("value",$("[name=zip]").val());
      $("#paisRemitente option[value="+$("[name=country_id] option:selected").val()+"]").attr("selected",true);
      
      if($("#pais option:selected").val() == 155)
      {
        $("#state_remitente option[value="+$("[name=state_id] option:selected").val()+"]").attr("selected",true);
        $("#estadoRemitente").css("display","table-row");
        $("#estadoRemitente1").css("display","none");
      }
      else
      {
        $("#est").val($(".class14").val());
        $("#estadoRemitente1").css("display","table-row");
        $("#estadoRemitente").css("display","none");
      }
      
      $("#tel_remitente").attr("value",$("[name=daytime_phone]").val());
    }
    else
    {  
      $("#calleRemitente").attr("value","");
      $("#callesRemitente").attr("value",""); 
      $("#colonia").attr("value","");
      $("#ciudad").attr("value","");
      $("#cp_remitente").attr("value","");
      /*$("#paisRemitente").val(155);
      $("#paisRemitente option:selected").text("México");*/
      $("#paisRemitente option[value=155]").attr("selected",true);
      $("#state_remitente").val("");
      $("#state_remitente option:selected").text("Seleccione un estado");
      $("#estadoRemitente").css("display","table-row");
      $("#estadoRemitente1").css("display","none");
      $("#tel_remitente").attr("value","");
    }
  });
}

function confirmarDatos(){
  $("#selectPayform").css("display","none");
  $("#paymentSelect").css("display","none");
  
  var banderaCupon = false;

  $("#changeDataExtra").click(function(){
    $("#confirmarOrden").css("display","none");
    $("#inforFactura").css("display","none");
    $(".block-order-info").css("display","inline");
    $("#paymentSelect").css("display","none");
    $("#step1BC").removeClass("nonactive");
    $("#step1BC").addClass("active");
    $("#step2BC").removeClass("active");
    $("#step2BC").addClass("nonactive");
    $("#cuponDiv").css("display","none");

    if($("#pais").val() != 155)
      $("#pais option[value=155]").removeAttr("selected");

    if($("#paisRemitente").val() != 155)
    {
      $("#paisRemitente option[value=155]").removeAttr("selected");
      $("#estadoRemitente").css("display","none");
      $("#estadoRemitente1").css("display","table-row");
    }
    else
    {
      $("#estadoRemitente").css("display","table-row");
      $("#estadoRemitente1").css("display","none");
    }
    banderaCupon = true;
    //$('#factura').attr('checked', false);
    
    if($('#factura').attr('checked'))
      $("#informacionFactura").css("display","inline");
    
    self.scrollTo(0, 0);
    return false;
  });
  
  $("#selectPayformButton").click(function(){
  
    var errores = '';
    var errores0 = '';
    var errores1 = '';
    var errores2 = '';
//alert($("#paisRemitente option:selected").val()+"<---");    
    if($("#pais option:selected").val() != 155)
      var estado = $(".class14").attr("value");
    else
      var estado = $(".state").attr("value");
     
    if($("#paisRemitente option:selected").val() != 155)
      var estado2 = $("#est").attr("value");
    else
      var estado2 = $("#state_remitente").attr("value");
      
    var numeros = /^([0-9\s])+$/
  
    if(($('[name="regalo"]:checked').val() == "si" && $(".class18").attr("value") != '' && $("#calleRemitente").attr("value") != '' && $("#callesRemitente").attr("value") != '' && 
      $("#colonia").attr("value") != '' && $("#ciudad").attr("value") != '' && $("#cp_remitente").attr("value") != '' && $("#paisRemitente option:selected").val() != '' && estado2 != '' && 
      $("#tel_remitente").attr("value") != '' && numeros.test($("#tel_remitente").attr("value")) && $(".street").attr("value") != '' && $(".class6").attr("value") != '' && $(".colonia").attr("value") != '' 
      && $(".city").attr("value") != '' && $(".zipcode").attr("value") != '' && $("#pais option:selected").val() != '' && estado != '' && $(".phone").attr("value") != '' && 
      numeros.test($(".phone").attr("value"))) || ($('[name="regalo"]:checked').val() == "no" && $(".street").attr("value") != '' && $(".class6").attr("value") != '' && 
      $(".colonia").attr("value") != '' && $(".city").attr("value") != '' && $(".zipcode").attr("value") != '' && $("#pais option:selected").val() != '' && estado != '' && 
      $(".phone").attr("value") != '' && numeros.test($(".phone").attr("value"))))
    {
      $('#factura').attr('checked', false);
      $("#informacionFactura").css("display","none");
      $("#confirmarOrden").css("display","none");
      $(".block-order-info").css("display","inline");
      changeState(document.order_info, 'delivery');
    }
    else
    {
      if($('[name="regalo"]:checked').val() == "si")
      {
        if($(".class18").attr("value") == '')
          errores0 = "Se requiere <b>Para </b>(Nombre de la persona a la que se le enviará el regalo)";
          
        if($("#calleRemitente").attr("value") == '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Se requiere <b>Calle y número</b>";
        }
        
        if($("#callesRemitente").attr("value") == '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Se requiere <b>Entre qué calles</b>";
        }
        
        if($("#colonia").attr("value") == '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Se requiere <b>Colonia</b>";
        }
        
        if($("#ciudad").attr("value") == '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Se requiere <b>Ciudad</b>";
        }
        
        if($("#cp_remitente").attr("value") == '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Se requiere <b>Código postal</b>";
        }
        else if($("#cp_remitente").val().length < 5)
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Se requieren 5 caracteres para <b>Código postal</b>";
        }

        if($("#paisRemitente option:selected").val() == '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1+= "Se requiere <b>País</b>";  
        }
        
        if(estado2 == '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1+= "Se requiere <b>Estado</b>";  
        }

        if($("#tel_remitente").attr("value") == '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Se requiere <b>Teléfono</b>";
        }
        else if(!(numeros.test($("#tel_remitente").attr("value"))) && $("#tel_remitente").attr("value") != '')
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Sólo se requieren números en <b>Teléfono</b>";
        }
        else if($("#tel_remitente").val().length < 5)
        {
          if(errores1 != '')
            errores1 += "<br />";
          errores1 += "Se requieren más de 5 dígitos en el <b>Teléfono</b>";
        }
      }

      if($(".street").attr("value") == '')
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2 = "Se requiere <b>Calle y número</b>";
      }
      
      if($(".class6").attr("value") == '')
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2 += "Se requiere <b>Entre qué calles</b>";
      }
      
      if($(".colonia").attr("value") == '')
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2 += "Se requiere <b>Colonia</b>";
      }
      
      if($(".city").attr("value") == '')
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2 += "Se requiere <b>Ciudad</b>";
      }
      
      if($(".zipcode").attr("value") == '')
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2 += "Se requiere <b>Código postal</b>";
      }
      else if($(".zipcode").val().length < 5)
      {
        if(errores1 != '')
          errores2 += "<br />";
        errores2 += "Se requieren 5 caracteres para <b>Código postal</b>";
      }
      
      if($("#pais option:selected").val() == '')
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2+= "Se requiere <b>País</b>";  
      } 

      if(estado == '')
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2+= "Se requiere <b>Estado</b>";  
      }  
      
      if($(".phone").attr("value") == '')
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2 += "Se requiere <b>Teléfono</b>";
      }
      else if($(".phone").attr("value") != '' && !(numeros.test($(".phone").attr("value"))))
      {
        if(errores2 != '')
          errores2 += "<br />";
        errores2 = "Sólo se requiere números en <b>Teléfono</b>";
      }
      
      if(errores0 != '')
          errores = errores0;
      
      if(errores2 != '')
      {
        if(errores != '')
          errores += "<br /><br />";
        
        if($('[name="regalo"]:checked').val() == "no")
          errores += errores2;
        else
          errores += "De la dirección del remitente:<br>"+errores2;
      }
          
      if(errores1 != '')
      {
        if(errores != '')
          errores += "<br /><br />";
        
        errores += "De la dirección de envío:<br/>"+errores1;
      }
      
      if(errores != '')
      {
        if($(".errorbg").text() != '')
        {
          $(".errorbg").html($(".errorbg").html()+errores);
        }
        else
        {
          $(".errorbg2").html(errores);
          $(".errorbg2").css("display","block");
        }
        
        return false;
      }
    }
  });

 if(($("#importeEnvio").text()||$("#shipping_cost_excl_tax_outter span").text() ) && (($(".errorbg").text()=="") && ($(".errorbg2").text()=="")))
  {
    $("#orderData").html($(".datosCompra").html());
    $("#confirmarOrden").css("display","inline");
    
    if(banderaCupon == false)
    {
      $("#cuponDiv").css("display","inline");
    }
      
    $("#hileraCostosEnvio, .basketGoods").css("display","");
    
    $(".block-order-info").css("display","none");
    $("#paymentSelect").css("display","none");
    $("#step1BC").removeClass("active");
    $("#step1BC").addClass("nonactive");
    $("#step2BC").removeClass("nonactive");
    $("#step2BC").addClass("active");
    
    var datos;
    
    if($('[name="regalo1"]:checked').val() == "si" && $("#factura").attr("checked") == "checked")
      datos = "facturaRegalo";
    else if($("#factura").attr("checked") == "checked")
      datos = "factura";
    else if($('[name="regalo1"]:checked').val() == "si")
      datos = "infoRegalo";
    else
      datos = "envio";
    
    copiarDatos(datos);
    
    return false;
  }else {}
}
function valorDefaultFormaPago(){
  
  $("#payment_id").val(6);  
}

function seleccionarFormadePago(){
  $("#confirmOrderExtra").click(function(){ 
    pagoCon();
    
    if(ordenTotal1==0)
    {
      $('[name="formadepago"]:checked').val(6);
      $("#continue").click();
      return false;
    }
    
    getCartId();
    $("#selectPayform").css("display","inline");
    $(".block-order-info").css("display","none");
    $("#paymentSelect").css("display","none");
    $("#confirmarOrden").css("display","none");
    $("#step1BC").removeClass("active");
    $("#step1BC").addClass("nonactive");
    $("#step2BC").removeClass("nonactive");
    $("#step2BC").addClass("active");
    //$("#procom").css("display","none");
    if($("#procomCartId").text()==""&&$("#usertypeID").html()=="2"){ 
  }
    //precio menor a 200
    //precioTotal=precioTotal.replace(",","");
    if(false){//parseInt(precioTotal)<200){
    $("#oxxo").attr('disabled','true');
    $("#costoInsuficiente").css("display","inline");
    }
    self.scrollTo(0, 0);
    return false;
    /*
    if(ordenTotal1=0){
    $('[name="formadepago"]:checked').val(2);
    $("#continue").click();
    }*/
  });
}

function cargarSlides(){

} 
function mostrarImagen(){
}

function getInternetExplorerVersion()
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
//radio con imagen ckeckbox
var checkboxHeight="25";
var radioHeight="25";
var selectWidth="190";
document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: '+selectWidth+"px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>");
var Custom={
  init:function(){
    var c=document.getElementsByTagName("input"),d=Array(),e,f,g;
    for(a=0;a<c.length;a++){
      if((c[a].type=="checkbox"||c[a].type=="radio")&&c[a].className=="styled"){
        d[a]=document.createElement("span");d[a].className=c[a].type;
        /*
        $('.radio').click(function(){
          if(!safariDetect() && $('[name="formadepago"]:checked').val() == 70)
            $('#pagarSinTarjeta').css("display","none");
          else if(!safariDetect() && $('[name="formadepago"]:checked').val() != 70)
            $('#pagarSinTarjeta').css("display","table-row");
        });*/
        
        if(c[a].checked==true){
          if(c[a].type=="checkbox"){
            position="0 -"+checkboxHeight*2+"px";
            d[a].style.backgroundPosition=position
          }
          else{
            position="0 -"+radioHeight*2+"px";
            d[a].style.backgroundPosition=position
          }
        }
        c[a].parentNode.insertBefore(d[a],c[a]);
        c[a].onchange=Custom.clear;
        if(!c[a].getAttribute("disabled")){
          d[a].onmousedown=Custom.pushed;d[a].onmouseup=Custom.check
        }
        else{
          d[a].className=d[a].className+=" disabled"
        }
      }
    }
    c=document.getElementsByTagName("select");
    for(a=0;a<c.length;a++){
      if(c[a].className=="styled"){
        f=c[a].getElementsByTagName("option");
        g=f[0].childNodes[0].nodeValue;
        e=document.createTextNode(g);
        for(b=0;b<f.length;b++){
          if(f[b].selected==true){
            e=document.createTextNode(f[b].childNodes[0].nodeValue)
          }
        }
        d[a]=document.createElement("span");
        d[a].className="select";
        d[a].id="select"+c[a].name;
        d[a].appendChild(e);
        c[a].parentNode.insertBefore(d[a],c[a]);
        if(!c[a].getAttribute("disabled")){
          c[a].onchange=Custom.choose
        }
        else{
          c[a].previousSibling.className=c[a].previousSibling.className+=" disabled"
        }
      }
    }
    document.onmouseup=Custom.clear
  },pushed:function()
  {
    element=this.nextSibling;
    if(element.checked==true&&element.type=="checkbox"){
      this.style.backgroundPosition="0 -"+checkboxHeight*3+"px"
    }
    else if(element.checked==true&&element.type=="radio"){
      this.style.backgroundPosition="0 -"+radioHeight*3+"px"
    }
    else if(element.checked!=true&&element.type=="checkbox"){
      this.style.backgroundPosition="0 -"+checkboxHeight+"px"
    }
    else{
      this.style.backgroundPosition="0 -"+radioHeight+"px"
    }
  },check:function(){
    element=this.nextSibling;
    if(element.checked==true&&element.type=="checkbox"){
      this.style.backgroundPosition="0 0";
      element.checked=false
    }
    else{
      if(element.type=="checkbox"){
        this.style.backgroundPosition="0 -"+checkboxHeight*2+"px"
      }
      else{
        this.style.backgroundPosition="0 -"+radioHeight*2+"px";
        group=this.nextSibling.name;
        inputs=document.getElementsByTagName("input");
        for(a=0;a<inputs.length;a++){
          if(inputs[a].name==group&&inputs[a]!=this.nextSibling){
            inputs[a].previousSibling.style.backgroundPosition="0 0"
          }
        }
      }
      element.checked=true
    }
  },clear:function(){
    inputs=document.getElementsByTagName("input");
    for(var a=0;a<inputs.length;a++){
      if(inputs[a].type=="checkbox"&&inputs[a].checked==true&&inputs[a].className=="styled"){
        inputs[a].previousSibling.style.backgroundPosition="0 -"+checkboxHeight*2+"px"
      }
      else if(inputs[a].type=="checkbox"&&inputs[a].className=="styled"){
        inputs[a].previousSibling.style.backgroundPosition="0 0"
      }
      else if(inputs[a].type=="radio"&&inputs[a].checked==true&&inputs[a].className=="styled"){
        inputs[a].previousSibling.style.backgroundPosition="0 -"+radioHeight*2+"px"
      }
      else if(inputs[a].type=="radio"&&inputs[a].className=="styled"){
        inputs[a].previousSibling.style.backgroundPosition="0 0"
      }
    }
  },choose:function(){
    option=this.getElementsByTagName("option");
    for(d=0;d<option.length;d++){
      if(option[d].selected==true){
        document.getElementById("select"+this.name).childNodes[0].nodeValue=option[d].childNodes[0].nodeValue
         }
    }
  }
};window.onload=Custom.init
 
 
function Linkify(inputText) {
replacedText="";
if(inputText){
    //URLs starting with http://, https://, or ftp://
    var replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    var replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with www. (without // before it, or it'd re-link the ones done above)
    var replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    var replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links
    var replacePattern3 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
    var replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
    
    }
    //var replacedText = replaceAll(replacedText,"\n", '<br>');

    return replacedText
}
function replaceAll( text, busca, reemplaza ){
  while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca,reemplaza);

  return text;
}
function changeProductTab(id) {
		if (id != 2 && id != 3 && id != 4) {
			id = 1;
		}
		for (var i = 1; i <= 3; i++) {
			var tab = document.getElementById("div_id_tab_" + i);
			if (tab) {
				var tab_name = document.getElementById("td_tab_"+i);
				var tab_link = document.getElementById("a_tab_"+i);
				if (i == id) {
					tab.style.display = "block";
					tab_name.className = "tabActive";
					tab_link.className = "tabActive";
				} else {
					tab.style.display = "none";
					tab_name.className = "tab";
					tab_link.className = "tab";
				}
			}
		}
	}
	function playerSWF(){
jQuery('#viartReview a,#descripcion2 a').each(function(){
  
  // Selection:
  if ( this.href.substr(-4).toLowerCase().indexOf('.mp3') < 0 ) return;

  // Definitions:
  var $this = jQuery(this);
  var flash_container_id;
  var flash_container;
  var player_swf;
  var flash_vars = {};
  var flash_param = { wmode: 'transparent' };
  var attributes = {};
  var width = 0;
  var height = 0;
  
  // create a new object
  // find a unique object name
  do {
    flash_container_id = 'flash_container_' + Math.round( Math.random() * 10000 );
  } while( jQuery('#' + flash_container_id).length > 0 );
  
  // generate an object code
  flash_container = '</br><span id="' + flash_container_id + '"></span></br>';
  
  // decide which player
  if(0) {
    // the link is an inline element in a floating text
    // position
        $this.replaceWith(flash_container);
        
    // Build a flash app
    player_swf = '../swf/player1.swf'; 
    flash_vars.song_url = encodeURIComponent(this.href);
    flash_vars.b_bgcolor = 'cccccc';
    flash_vars.b_fgcolor = '666666';
    flash_vars.b_colors = 'ff0000,0000ff,ff8e00,000000';
    flash_vars.autoplay = false;
    
    // in the xspf player these values are not variable
    width = 17;
    height = 17;
    
    // Add the player
    swfobject.embedSWF(player_swf, flash_container_id, width, height, "9.0.0", null, flash_vars, flash_param, attributes);    
  }
if ( 1){
    // the link is the only element in the paragraph / list item
    
    // Read the configuration
    height = 24;
        player_swf = '../swf/player1.swf'; 
    width = 200;
        
    // Read the title of the mp3 link
    if ($this.attr('title') == '') $this.attr('title', $this.text());
    var caption = $this.attr('title');
    if(!caption){caption="escucha";}
    // Collect flash vars and parameters
    flash_vars.soundFile = escape(this.href.replace(/,/g, '%2C'));
    flash_vars.titles = ' ';
    flash_vars.artists = caption.replace(/,/g, ' ');
    flash_vars.autostart = 'no';
    flash_vars.width = width;
    flash_vars.height = height;
    flash_vars.bg = '0xE5E5E5';
    flash_vars.leftbg = '0xCCCCCC';
    flash_vars.lefticon = '0x333333';
    flash_vars.voltrack = '0xF2F2F2';
    flash_vars.volslider = '0x666666';
    flash_vars.rightbg = '0xB4B4B4';
    flash_vars.rightbghover = '0x999999';
    flash_vars.righticon = '0x333333';
    flash_vars.righticonhover = '0xFFFFFF';
    flash_vars.loader = '0x009900';
    flash_vars.track = '0xFFFFFF';
    flash_vars.tracker = '0xDDDDDD';
    flash_vars.border = '0xCCCCCC';
    flash_vars.text = '0x333333';

    // Prepare the Flash Container for the player
        $this.replaceWith(flash_container);
    
    // Add the player:
    swfobject.embedSWF(player_swf, flash_container_id, width, height, "9.0.0", null, flash_vars, flash_param, attributes);
  }
    

  if ($this.text() == '' && $this.find('img').length == 1){
    // A linked image

    flash_vars.file = flash_vars.link = encodeURIComponent(this.href);
    flash_vars.image = $this.find('img:eq(0)').attr('src');
    flash_vars.autostart = false;
    //flash_vars.skin = 'http://revistacincoletras.com/wp-content/plugins/audio-link-player/jw_player/skin.swf';
    
    player_swf = '../swf/player1.swf';
    attributes.styleclass = $this.find('img').attr('class');
    
    height = $this.find('img').height() + 22; // The slider bar of the player has a hight of 22px
    width = $this.find('img').width();

    $this.replaceWith(flash_container)

    // Add the player:
    swfobject.embedSWF(player_swf, flash_container_id, width, height, "9.0.0", null, flash_vars, flash_param, attributes);
  }
  
}); // End of Each loop 
}

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
function __getIEVersion(){var rv=-1;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1)}return rv}function __getOperaVersion(){var rv=0;if(window.opera){var sver=window.opera.version();rv=parseFloat(sver)}return rv}var __userAgent=navigator.userAgent;var __isIE=navigator.appVersion.match(/MSIE/)!=null;var __IEVersion=__getIEVersion();var __isIENew=__isIE&&__IEVersion>=8;var __isIEOld=__isIE&&!__isIENew;var __isFireFox=__userAgent.match(/firefox/i)!=null;var __isFireFoxOld=__isFireFox&&((__userAgent.match(/firefox\/2./i)!=null)||(__userAgent.match(/firefox\/1./i)!=null));var __isFireFoxNew=__isFireFox&&!__isFireFoxOld;var __isWebKit=navigator.appVersion.match(/WebKit/)!=null;var __isChrome=navigator.appVersion.match(/Chrome/)!=null;var __isOpera=window.opera!=null;var __operaVersion=__getOperaVersion();var __isOperaOld=__isOpera&&(__operaVersion<10);function __parseBorderWidth(width){var res=0;if(typeof(width)=="string"&&width!=null&&width!=""){var p=width.indexOf("px");if(p>=0){res=parseInt(width.substring(0,p))}else{res=1}}return res}function __getBorderWidth(element){var res=new Object();res.left=0;res.top=0;res.right=0;res.bottom=0;if(window.getComputedStyle){var elStyle=window.getComputedStyle(element,null);res.left=parseInt(elStyle.borderLeftWidth.slice(0,-2));res.top=parseInt(elStyle.borderTopWidth.slice(0,-2));res.right=parseInt(elStyle.borderRightWidth.slice(0,-2));res.bottom=parseInt(elStyle.borderBottomWidth.slice(0,-2))}else{res.left=__parseBorderWidth(element.style.borderLeftWidth);res.top=__parseBorderWidth(element.style.borderTopWidth);res.right=__parseBorderWidth(element.style.borderRightWidth);res.bottom=__parseBorderWidth(element.style.borderBottomWidth)}return res}function getElementAbsolutePos(element){var res=new Object();res.x=0;res.y=0;if(element!==null){if(element.getBoundingClientRect){var viewportElement=document.documentElement;var box=element.getBoundingClientRect();var scrollLeft=viewportElement.scrollLeft;var scrollTop=viewportElement.scrollTop;res.x=box.left+scrollLeft;res.y=box.top+scrollTop}else{res.x=element.offsetLeft;res.y=element.offsetTop;var parentNode=element.parentNode;var borderWidth=null;while(offsetParent!=null){res.x+=offsetParent.offsetLeft;res.y+=offsetParent.offsetTop;var parentTagName=offsetParent.tagName.toLowerCase();if((__isIEOld&&parentTagName!="table")||((__isFireFoxNew||__isChrome)&&parentTagName=="td")){borderWidth=kGetBorderWidth(offsetParent);res.x+=borderWidth.left;res.y+=borderWidth.top}if(offsetParent!=document.body&&offsetParent!=document.documentElement){res.x-=offsetParent.scrollLeft;res.y-=offsetParent.scrollTop}if(!__isIE&&!__isOperaOld||__isIENew){while(offsetParent!=parentNode&&parentNode!==null){res.x-=parentNode.scrollLeft;res.y-=parentNode.scrollTop;if(__isFireFoxOld||__isWebKit){borderWidth=kGetBorderWidth(parentNode);res.x+=borderWidth.left;res.y+=borderWidth.top}parentNode=parentNode.parentNode}}parentNode=offsetParent.parentNode;offsetParent=offsetParent.offsetParent}}}return res}(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else{factory(jQuery)}}(function($){var pluses=/\+/g;function raw(s){return s}function decoded(s){return decodeURIComponent(s.replace(pluses,' '))}function converted(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\')}try{return config.json?JSON.parse(s):s}catch(er){}}var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}value=config.json?JSON.stringify(value):String(value);return(document.cookie=[config.raw?key:encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}var decode=config.raw?raw:decoded;var cookies=document.cookie.split('; ');var result=key?undefined:{};for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=decode(parts.join('='));if(key&&key===name){result=converted(cookie);break}if(!key){result[name]=converted(cookie)}}return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,'',$.extend({},options,{expires:-1}));return true}return false}}));