<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro62.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro62" MasterPageFile="~/index.Master"%>


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
								<img  src="LSCA-FEnBOOKS/imagenes/maze.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Maze Runner: Correr o Morir</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">James Dashner</a>
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
									<a href="" itemprop="publisher">Planeta</a>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$249</span>
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
								<br>«Bienvenido al Claro. Verás que, una vez a la semana, siempre el mismo día y a la misma hora, nos llegan víveres. Una vez al mes, siempre el mismo día y a la misma hora, aparece un nuevo chico, como tú. Siempre un chico. Como ves, este lugar está cercado por muros de piedra... Has de saber que estos muros se abren por la mañana y se cierran por la noche, siempre a la hora exacta. Al otro lado se encuentra el laberinto. De noche, las puertas se cierran... y, si quieres sobrevivir, no debes estar allí para entonces».

Todo sigue un orden... y, sin embargo, al día siguiente suena una alarma. Significa que ha llegado alguien más. Para asombro de todos, es una chica.

Su llegada vendrá acompañada de un mensaje que cambiará las reglas del juego.
                                Cuando Thomas aparece en el Claro, lo único que recuerda es su nombre, lo demás son imágenes borrosas de una vida a la que no puede ponerle ningun rostro; no recuerda a sus padres ni sus amigos, pero ahora deberá enfrentarse a una nueva vida rodeado de chicos de entre los doce y diecisiete años que él cree aparentar. Las reglas del Claro son muy obvias, pero hay una que nunca debe romperse, en especial cuando uno es el chico nuevo: "Jamás entres en el laberinto, mucho menos de noche".
							</div>
							<div class="pag"> 
								 <br><br>En el Claro, Thomas conoce a Alby (el jefe), Newt (el segundo al mando), Chuck (el más joven de ellos) y Gally entre otros. Los dos primeros se encargarán de mostrarle cómo es la vida diaria en su nuevo hogar; Chuck, por su parte se convierte en su único amigo y en la única persona en que puede confiar relativamente; y, por último, Gally parece detestarle, ya que, como Thomas descubre, él ha pasado por lo que los habitantes llaman el Cambio (es decir, la recuperación parcial de los recuerdos como consecuencia de un accidente en el Laberinto). Desde su llegada en la Caja, Thomas siente por alguna extraña razón que conoce el lugar, que ya había estado allí antes. Aunque no logra comprender o recordar nada, se hace un propósito: será corredor, acompañará a los chicos que todos los días corren por el Laberinto para descifrar algún patrón que los conduzca a la salida.

Cuando Newt se entera del objetivo de Thomas le explica algo para disuadirle: el Laberinto no está vacío. Lo habitan criaturas extrañas que deambulan por él durante, sobre todo, la noche. A Thomas le aterra lo que le muestra con su explicación, pero en su interior no se arredra.
							</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/dashner.png" width="120" height="155"></center>
							James Dashner (nacido el 26 de noviembre de 1972) es un escritor estadounidense, autor de varios libros de fantasía para niños y libros para adultos, incluyendo las series The 13th Reality y Jimmy Fincher Saga. El también escribió el primer y séptimo libro de la serie Infinity Ring
                                James Dashner nació en Austell (Georgia) el 26 de noviembre de 1972. Estudió en la Universidad Brigham Young en donde obtuvo una maestría de contabilidad. Después de esto, decidió dedicarse a la escritura y en 2003 logró publicar el primer libro de la serie Jimmy Fincher que atrajo a muchos lectores lo cual le motivó a seguir adelante.
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

