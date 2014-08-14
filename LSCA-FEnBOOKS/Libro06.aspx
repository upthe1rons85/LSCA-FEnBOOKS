<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro06.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro06" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/CS1.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Cazadores de Sombras: Ciudad de Hueso</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">Cassandra Clare</a>
									</span>
								</div>
								<div class="espacioEntreDatos">Formato: <span class="priceBlock">Libro</span>
									<img src="../images/icons/icono_mp3.png" style="height:25px;width:25px;display:none;position: relative;bottom: -8px;left:5px;" alt="tipo">
								</div>
								<div style="" class="espacioEntreDatos">Categoría: <span class="priceBlock">
									<a href="">Literatura Fantastica</a>
									</span>
								</div>
								<div class="editoriales">Editorial: <span class="priceBlock">
									<%--<a href="" itemprop="publisher">Planeta </a>--%>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$230</span>
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
								<br>Clary descubre entonces que los chicos no son asesinos, sino Cazadores de Sombras, una antigua raza creada mediante una mezcla de sangre entre el ángel Raziel y un humano,los cuales con frecuencia usan runas marcadas en su piel con unos artefactos llamados “estelas” para ser invisibles al ojo humano, obtener extraordinarios dones y así ser protectores de la humanidad.
<br /><br />La siguiente noche, cuando Clary y Simon van al bar llamado Java Jones para ver el espectáculo de un amigo de estos, se encuentra a Jace, uno de los chicos de la noche anterior y lo sigue intentando aclarar ciertas dudas. En ese momento, Clary recibe una extraña llamada de su madre e, inmediatamente, se dirige a su apartamento y  lo encuentra vacío y destruido. Entonces es atacada por un demonio rapiñador y logra defenderse y matarlo,aunque Jace la encuentra herida y la lleva al Instituto, el lugar en donde vive y entrena para matar a los demonios.
En esos momentos, Clary solo quería encontrar a su madre y saber por qué la habían raptado. Allí Clary conoce a Isabelle y a Alec, que son hermanos, y a Hodge, el tutor del Instituto, que le explica que su madre fue una cazadora de sombras. 
							</div>
							<div class="pag"> 
								 <br><br>
								 La Copa Mortal, es el único objeto capaz de crear cazadores de sombras utilizando humanos, pues se dice que con ella el ángel Raziel hizo la primera mezcla desangre entre ángeles y mortales. El objetivo de Valentine es crear un ejército de cazadores de sombras para destruir a los subterráneos (hombres lobo,vampiros, hadas, brujos) y vengarse de La Clave, consejo que rige a los Cazadores de Sombras y residen en la Ciudad de Cristal. Simon decide unirse, en la búsqueda de su madre, por lo que Jace y los otros le permiten ver su mundo a regañadientes.

Por alguna razón, Clary no puede recordar nada de su infancia que pruebe su relación con los Cazadores de Sombras y determinan que tiene un hechizo que bloquea sus memorias. Por ello es enviada junto con Jace a la “Ciudad de Hueso”,lugar donde habitan los Hermanos Silenciosos; seres sin ojos y con la boca cosida que tienen un aspecto aterrador y hablan por la mente. Según Hodge, el Hermano Jeremiah, son los únicos capaces de ver en su mente y liberarla del hechizo. Pero al intentar obtener sus recuerdos, los Hermanos Silenciosos encontraron el hechizo de bloqueo muy poderoso y le dijeron a Clary que solo el brujo que la hechizó podría revertirlo. 
							</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/cas.jpg" width="120" height="155"></center>
								Clare nació el 27 de julio en Teherán con el nombre de Judith Rumelt, hija de padres estadounidenses.1 Antes de cumplir diez años de edad vivió en Suiza, Inglaterra y Francia. En sus años de instituto vivió en Los Ángeles y en Nueva York. Empezó a trabajar en su novela Ciudad de hueso en el año 2004, inspirada en el viaje urbano por Manhattan. Esta saga de libros ha sido propuesta para una película.

Antes de la publicación de Ciudad de hueso, Clare era conocida como escritora de fanfiction bajo el seudónimo de Cassandra Claire, muy parecido al que usa en la actualidad.
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
