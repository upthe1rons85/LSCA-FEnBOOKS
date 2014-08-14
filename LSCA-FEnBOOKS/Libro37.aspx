<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro37.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro37" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/oli.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Oliver Twist</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">Charles Dickens</a>
									</span>
								</div>
								<div class="espacioEntreDatos">Formato: <span class="priceBlock">Libro</span>
									<img src="../images/icons/icono_mp3.png" style="height:25px;width:25px;display:none;position: relative;bottom: -8px;left:5px;" alt="tipo">
								</div>
								<div style="" class="espacioEntreDatos">Categoría: <span class="priceBlock">
									<a href="">Satira</a>
									</span>
								</div>
								<div class="editoriales">Editorial: <span class="priceBlock">
									<a href="" itemprop="publisher">Porrua</a>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$200</span>
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
								<br>Oliver Twist (Oliverio Twist en algunas ediciones en español) es la segunda novela del autor inglés Charles Dickens. Se publicó originalmente como novela por entregas de aparición mensual en la revista Bentley's Miscellany, entre febrero de 1837 y abril de 1839. En un principio, el autor tenía la intención de que formase parte de una obra más extensa, The Mudfog Papers.1 Es la primera novela en lengua inglesa que tiene a un niño como protagonista.2 Asimismo, destaca por su tratamiento del mundo de los criminales y sus sórdidas vidas, prácticamente carente de Romanticismo.3 Oliver Twist es una de las primeras novelas sociales de la historia de la literatura, pues llama la atención a sus lectores sobre varios males sociales de la época, tales como el trabajo infantil o la utilización de niños para cometer delitos. Dickens se burla de la hipocresía de su época tratando estos temas tan serios con sarcasmo y humor negro. 

							</div>
							<div class="pag"> 
								 <br><br>Oliver es un pequeño huérfano que ha perdido a ambos padres. Pasa sus primeros años en el asilo de la señora Mann. Al igual que el resto de niños en el orfanato , Oliver sufre continuamente de hambre . Los niños deciden entonces jugar a quién de ellos pedirá más comida y Oliver resulta ser el elegido. En la cena de esa noche, después de su ración normal, se dirige al director del orfanato y le pide más comida. Debido a este episodio es tachado de problemático por el Sr. Bumble, el bedel y el director, quien lo ofrece como aprendiz a cualquiera que lo quiera contratar. Así, Oliver se convierte en aprendiz del enterrador Sowerberry; sin embargo, se pelea con un empleado del enterrador y decide escapar a Londres .

En las afueras de la ciudad, cansado y hambriento, conoce a Jack Dawkins, quien le ofrece un lugar donde hospedarse en Londres. Lleno de inocencia, Oliver se ve inmerso en el mundo del hampa londinense y se encuentra en medio de una banda de chicos carteristas, dirigida por el malvado Fagin .

Londres es descrito como una sucesión de laberínticas calles y callejones, patios por lo que Oliver es arrastrado, y en los que percibe la pobreza, la suciedad o la delincuencia. 

						</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/dick.jpg" width="120" height="155"></center>
							Fue un famoso novelista inglés y uno de los más conocidos de la literatura universal, quien supo manejar con maestría el género narrativo, el humor, el sentimiento trágico de la vida, la ironía, con una aguda y álgida  crítica social así como las descripciones de gentes y lugares, tanto reales como imaginarios.
Pasó su infancia en Londres y en Kent, lugares descriptos frecuentemente en sus obras. </div>
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
