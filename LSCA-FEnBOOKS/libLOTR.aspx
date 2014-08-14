<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="libLOTR.aspx.cs" Inherits="LSCA_FEnBOOKS.libLOTR" MasterPageFile="~/index.Master"%>



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
		
		<div id="header">
		</div>
		
		<div id="content">
		<center><div class="content">
			<div id="unityPlayer">
				<div id="flipbook">
							<div class="hard"> 								 
								<img  src="LSCA-FEnBOOKS/imagenes/LOTR1.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">El Señor de los Anillos: La Comunidad del Anillo</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">J. R. R. Tolkien</a>
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
									<a href="" itemprop="publisher">Minotauro</a>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$299</span>
                                          <span class="etiquetaN" style="margin-left: -5px; color: #224757;">MX</span>
 
                                          <meta itemprop="currency" content="MXN">
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>                                    
                                          <br />
                                          <asp:ImageButton ID="ImageButton1" runat="server" Height="52px" ImageUrl="~/LSCA-FEnBOOKS/imagenes/cc.png" OnClick="ImageButton1_Click" Width="134px" />
                                      </td>
                                    </tr>									                          								
                                  </tbody>
								  </table></center>
								  
							</div>
								<div class="pag"> 
								<br>El Señor de los Anillos (título original: The Lord of the Rings) es una novela, obra cumbre del escritor John Ronald Reuel Tolkien, ambientada en un mundo fantástico llamado la Tierra Media hacia el final de su Tercera Edad.><br> 
								El título hace referencia a Sauron, el Señor Oscuro de Mordor, principal villano de la historia, creador del Anillo Único que utilizó para controlar el poder de los demás Anillos. El Señor de los Anillos constituye la continuación de un libro anterior de Tolkien, El Hobbit, que cuenta la historia de cómo el Anillo del Poder pasa a las manos de Bilbo Bolsón, el tío de Frodo Bolsón.<br><br>
								En un nivel más profundo, constituye la continuación de otro libro llamado El Silmarillion, que habla de la creación de la Tierra Media y de todas las criaturas que en ella habitan, así como del primer Señor Oscuro, maestro de Sauron, y de las luchas por los Silmarils.
							</div>
							<div class="pag"> 
								 <br><br>
								El Señor de los Anillos narra las aventuras de un grupo de seres: (elfos, hobbits, enanos, humanos), que forman la Comunidad del Anillo en su intento por destruir el Anillo Único, forjado por Sauron. Es la historia del héroe del pueblo llano, de aquella persona que aún sabiendo que su destino puede ser fatal, lucha por cumplirlo, pues de él depende la continuidad de su mundo.
							</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/jrrt.jpg" width="120" height="155"></center>
								John Ronald Reuel Tolkien, a menudo citado como J. R. R. Tolkien o JRRT, fue un escritor, poeta, filólogo y profesor universitario británico, conocido principalmente por ser el autor de las novelas clásicas de la alta fantasía El hobbit y El Señor de los Anillos.
De 1925 a 1945, Tolkien fue profesor de anglosajón, ocupando la cátedra Rawlinson y Bosworth en la Universidad de Oxford y, de 1945 a 1959, profesor de lengua y literatura inglesa en Merton. Era amigo cercano del también escritor C. S. Lewis y ambos eran miembros de un informal grupo de debate literario conocido como los Inklings.</div>
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

