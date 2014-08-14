<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro04.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro04" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/HG1.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Los Juegos del Hambre</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">Suzanne Collins</a>
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
									<a href="" itemprop="publisher">Oceano </a>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$275</span>
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
								<br>Los juegos del hambre se desarrolla en un país llamado Panem, lo que es en realidad una civilización postapocalíptica ubicada en lo que antes era América del Norte. El territorio se comprende de El Capitolio, que es la central del país, y trece estados que están bajo su control, 
                                los cuales son llamados distritos. Hace cerca de 100 años, el Distrito 13 inició una rebelión ante El Capitolio, donde se perdieron una enorme cantidad de vidas, además de la destrucción total de dicho distrito. Como castigo para evitar otros futuros levantamientos, El Capitolio creó un evento llamado «Los Juegos del Hambre», en donde anualmente los doce distritos 
                                sobrantes deben enviar dos tributos, un chico y una chica con edades entre los doce y los dieciocho para que lucharan a muerte en una arena hasta que solamente quedara uno, mientras todo Panem los observa a través de televisión.
<br /><br />La historia es narrada en primera persona desde la perspectiva de Katniss Everdeen, una adolescente de dieciséis años que vive en el Distrito 12, el más pobre de todos y el encargado de la actividad minera. Posee una hermana menor llamada Primrose Everdeen, la cual acaba de cumplir doce años. 
							</div>
							<div class="pag"> 
								 <br><br>
								Sin embargo, la actitud protectora de Katniss hacia su hermana provocan que ella se ofrezca como tributo para salvar la vida de Prim. Peeta Mellark, quien fue compañero de clases de Katniss en la infancia, resulta ser elegido como tributo masculino, así que ambos se dirigen a El Capitolio para su preparación. En el viaje, conocen a su mentor Haymitch Abernathy, 
                                único ganador de los juegos con vida salido del Distrito 12. Él los aconseja y empieza a explicarles todo lo que deberán hacer en los días posteriores. Haymitch resalta el hecho de que deben conseguir patrocinadores para recibir ayuda en la arena. Previo a los entrenamientos, Katniss conoce a su estilista Cinna, quien es la única persona de El Capitolio con quien ella se siente bien. Él le explica que se acerca el desfile de los tributos, un evento donde los participantes de los juegos son presentados ante el público. Cinna planea que Katniss y Peeta utilicen un traje que emane fuego para así llamar la atención y conseguir patrocinadores. Luego de que ambos aparecieran en el desfile, recibieron una ovación de pie por parte del público, y Katniss en concreto fue apodada como «la chica en llamas». 
							</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/suz.jpg" width="120" height="155"></center>
								La carrera de Suzanne empezó en 1991, como guionista en programas de televisión para niños. Trabajó para canales como Nickelodeon (Bob esponja), "Los Misteriosos Archivos de Shelby Woo", "Pequeño Oso" y "Oswald". Recibió una nominación de la Hermandad de Escritores de América (Writers Guild of America) por coescribir el aclamado especial de Navidad, "Santa, Baby!".
							Collins alcanzó fama mundial gracias a su novela Los juegos del hambre, la primera de una trilogía, que fue publicada en 2008 por la editorial Scholastic Press en Estados Unidos, y en España por la editorial Molino.
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
