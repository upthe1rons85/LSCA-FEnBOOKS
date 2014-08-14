<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro63.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro63" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/tokio.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Tokio Blues: Norwegian Wood</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">Haruki Murakami</a>
									</span>
								</div>
								<div class="espacioEntreDatos">Formato: <span class="priceBlock">Libro</span>
									<img src="../images/icons/icono_mp3.png" style="height:25px;width:25px;display:none;position: relative;bottom: -8px;left:5px;" alt="tipo">
								</div>
								<div style="" class="espacioEntreDatos">Categoría: <span class="priceBlock">
									<a href="">Novela</a>
									</span>
								</div>
								<div class="editoriales">Editorial: <span class="priceBlock">
									<a href="" itemprop="publisher">Debolsillo</a>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$235</span>
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
								<br>Toru Watanabe, un ejecutivo de 37 años, escucha casualmente mientras aterriza en un aeropuerto europeo una vieja canción de los Beatles, y la música le hace retroceder a su juventud, al turbulento Tokio de finales de los sesenta. Toru recuerda, con una mezcla de melancolía y desasosiego, a la inestable y misteriosa Naoko, 
                                la novia de su mejor -y único- amigo de la adolescencia, Kizuki. El suicidio de este les distancia durante un año hasta que se reencuentran en la universidad. Inician allí una relación íntima; sin embargo, la frágil salud mental de Naoko se resiente y la internan en un centro de reposo. Al poco, Toru se enamora de Midori, una joven activa y resuelta. Indeciso, sumido en dudas y temores, experimenta el deslumbramiento y el desengaño allá donde todo parece cobrar sentido: 
                                el sexo, el amor y la muerte. La situación, para él, para los tres, se ha vuelto insostenible; ninguno parece capaz de alcanzar el delicado equilibrio entre las esperanzas juveniles y la necesidad de encontrar un lugar en el mundo. Con un fino sentido del humor, Murakami ha escrito el conmovedor relato de una educación sentimental, pero también de las pérdidas que implica toda maduración. 

							</div>
							<div class="pag"> 
								 <br><br>La acción se desarrolla en el Tokio de finales de los años sesenta, momento histórico en que los estudiantes japoneses, como muchos estudiantes en otros países, estaban involucrados en protestas contra el orden establecido. Estas protestas son el telón de fondo en el que la novela se desarrolla, y el autor (a través de los ojos de Toru y Midori), describe este movimiento estudiantil en general como pusilánime e hipócrita.

Ciertos fragmentos de la obra se publicaron originalmente en la colección Sauce ciego, mujer dormida con el título Luciérnaga.

La buena acogida que tuvo la obra Tokio Blues, Norwegian Wood entre la juventud japonesa convirtió a Murakami en una especie de ídolo de masas en Japón (lo que, al parecer, no fue de su agrado en aquel momento). A pesar de ser una obra muy conocida en su país, los lectores habituales recibieron la obra como una desviación poco grata de su estilo ya establecido de prosa enérgica aderezada con elementos de lo inesperado y lo sobrenatural,
							</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/haru.jpg" width="120" height="155"></center>
							Haruki Murakami (Kioto, 12 de enero de 1949) es un escritor y traductor japonés autor de novelas y relatos. Sus obras han generado críticas positivas y numerosos premios, incluyendo los premios Franz Kafka, Jerusalem y el Internacional Cataluña, entre otros.

La ficción de Murakami, a menudo criticada por la literatura tradicional japonesa, es surrealista y se enfoca en conceptos como la alienación y la soledad. Es considerado una figura importante en la literatura posmoderna. The Guardian ha situado a Murakami "entre los mayores novelistas de la actualidad". 
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
