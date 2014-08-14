<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro61.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro61" MasterPageFile="~/index.Master"%>

<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">	
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<style type="text/css">
		.hard{
			background-color: #807166;
		}
		.hardb{
			background-color: #05152f;
		}
		.pag{
			background-color: #f2eacc;
		    color: black;
		}
		
</style>
<script src="LSCA-FEnBOOKS/js/JQuery.js" type="text/javascript"></script>
<script src="LSCA-FEnBOOKS/js/Turn.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $("#flipbook").turn({
            width: 600,
            height: 400,
            autoCenter: true
        });
    });
</script>

	<style type="text/css">
        body {
			margin:0;
			padding:0;
			height:100%;
			background:black;
			background-image: url(LSCA-FEnBOOKS/imagenes/fndb.jpg);
		}
		#wrapper {
			height:100%;
			position:relative;
		}
		#header {
			background:black;
			padding:0px;
		}
		 #content {
			padding-bottom:90px;
			
		} 
		#footer {
			background:black;
			width:100%;
			height:80px;
			position:absolute;
			bottom:-612px;
			left:0;
			text-align:center;
		}
		div.content {
	width: 735px;
	height: 398px;
	background-color: #f1f2bd;
	-webkit-box-align:center;
	z-index: auto;
	background-image: url(LSCA-FEnBOOKS/imagenes/bs.jpg);
	margin: 17px;
    left: 230px;
	padding: 5px;
	position: absolute;
	/*top: 1px;*/
	overflow: visible;
		}
		h1,p{
		color: black;
		}
	</style>

	<div id="wrapper">
		
		<div id="header"></div>
		
		<div id="content">
		<center><div class="content">
			<div id="unityPlayer">
				<div id="flipbook">
							<div class="hard"> 								 
								<img  src="LSCA-FEnBOOKS/imagenes/000.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">CeroCeroCero</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">Roberto Saviano</a>
									</span>
								</div>
								<div class="espacioEntreDatos">Formato: <span class="priceBlock">Libro</span>
									<img src="../images/icons/icono_mp3.png" style="height:25px;width:25px;display:none;position: relative;bottom: -8px;left:5px;" alt="tipo">
								</div>
								<div style="" class="espacioEntreDatos">Categoría: <span class="priceBlock">
									<a href="">Filosofia</a>
									</span>
								</div>
								<div class="editoriales">Editorial: <span class="priceBlock">
									<a href="" itemprop="publisher">Nube de Tinta</a>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$278</span>
                                          <span class="etiquetaN" style="margin-left: -5px; color: #224757;">MX</span>
                                          <meta itemprop="currency" content="MXN">
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>                                    
                                          <a class="button button-add" id="add_16631" href="" onclick=" return confirmBuy(document.form_16631, 'cart',null);" title="comprar ahora">
                                          &nbsp;</a><div id="avisoRegistro" style="position: relative; display:none;">
                                          <div id="aviso" style="position: absolute; right: 190px; left: -163px; background: white; border-radius: 5px; -moz-border-radius: 5px; border: 1px solid #666; font-size: 12px; max-width: 120px; max-height: 65px; padding: 4px; top: -20px;text-align:left;">
                                            <div id="avisoCerrado" style="position: relative; left: 105px; font-weight: 700; width: 10px; border-radius: 2px; -moz-border-radius: 2px;"><a href="javascript:void(0);" style="color:#224757;">X</a></div>
                                            <div id="avisoTexto"><a style="position: relative; top: -15px;" href="">Regístrate <b>aquí</b> para avisarte cuando esté disponible.</a></div>
                                          </div>
                                        </div>											
                                          <asp:ImageButton ID="ImageButton1" runat="server" Height="52px" ImageUrl="~/LSCA-FEnBOOKS/imagenes/cc.png" OnClick="ImageButton1_Click" Width="134px" />
                                      </td>
                                    </tr>									                          								
                                  </tbody>
								  </table></center>
								  
							</div>
							<div class="pag"> 
								<br>El libro más reciente de Roberto Saviano, La belleza y el infierno(Debate/ Random House Mondadori), que ya circula en México, reúne una serie de textos que trazan un recorrido por los leitmotiv literarios del narrador italiano y autor de Gomorra, obra sobre las bandas delincuenciales de Nápoles, debido a la cual el escritor recibió amenazas de muerte. Con autorización de la editorial, La Jornadaofrece a sus lectores este fragmento

Escribir, en estos años, me ha dado la posibilidad de existir. Artículos y reportajes. Relatos y editoriales. Un trabajo que para mí no ha sido un simple trabajo. Ha coincidido con mi propia vida. Si alguien esperaba que vivir en una situación dificilísima me obligaría a esconder mis palabras, se ha equivocado. No las he escondido, no las he perdido. Pero esto también ha coincidido con una lucha, una lucha diaria, un cuerpo a cuerpo silencioso, como un combate en la sombra. Escribir, no prescindir de mis palabras, ha significado no perderme. No darme por vencido. No desesperar.

							</div>
							<div class="pag"> 
								 <br><br>He escrito en una decena de casas distintas, en ninguna de las cuales he vivido más de unos meses. Todas pequeñas o muy pequeñas, todas, sin excepción, condenadamente oscuras. Me habrían gustado más espaciosas, más luminosas, quería tener por lo menos un balcón, una azotea: lo anhelaba tanto como en otro tiempo los viajes, los horizontes lejanos. Una posibilidad de salir, respirar, mirar a mi alrededor. Pero nadie me las alquilaba. No podía escoger, no podía patear para buscarlas, ni siquiera podía decidir yo solo dónde iba a vivir. Y si se llegaba a saber que yo estaba en esa calle, en esa casa, no tenía más remedio que marcharme. Es la situación de muchos que viven en las mismas condiciones que yo. Te presentas para ver un piso que los carabineros han seleccionado cuidadosamente, después de sondear al casero, pero en cuanto él te reconoce sus respuestas siempre son las mismas:Le aprecio muchísimo, señor, pero es que no puedo crearme más problemas, ya tengo bastantes, o: Si por mí fuera no habría problema, pero tengo hijos, una familia, ya sabe, tengo que velar por su seguridad y –tercera y última–:Yo se lo dejaría ya, incluso gratis, pero la comunidad de propietarios me crucificaría

							</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/sav.jpg" width="120" height="155"></center>
							Roberto Saviano (nacido en Nápoles, 22 de septiembre de 1979) es un periodista y escritor italiano.1 En sus escritos utiliza el reportaje y la literatura para contar la realidad económica y territorial de la Camorra en Italia y del crimen organizado en general.

Principalmente influenciado por autores como Giustino Fortunato, Gaetano Salvemini, Errico Malatesta, Mijaíl Bakunin y Rocco Scotellaro, Saviano, que estudió filosofía moderna en la Universidad de Nápoles Federico II, saltó a la fama en 2006 con la publicación de Gomorra, en el que describe los negocios de la Camorra. 
							</div>
							<div class="hard"></div>
							<div class="hardb"></div>
						</div>	
			</div>
			
		
			 
	</div>	</center>
		</div>
		
		<div id="footer">
		<div class="footer"> 
          <span class="smallText1">Copyright &copy; LSCA-FE n' BOOKS 2014</span>
          <span>|</span>
         <a href="" rel="tag">
            <a href="https://www.paypal.com/mx/webapps/mpp/home"><img src="LSCA-FEnBOOKS/imagenes/paypal.gif" alt="payPal" id="imagenFootPaypal"/></a>
            <a href="https://www.mastercard.com/mx/gateway.html"><img src="LSCA-FEnBOOKS/imagenes/vma.png" alt="MasterCard" height="13px" width="53px"/></a>
          </a>             
    </div>
		</div>
		
	</div>
	
 </asp:Content>	

