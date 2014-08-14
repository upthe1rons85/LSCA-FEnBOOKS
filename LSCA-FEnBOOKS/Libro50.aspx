<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro50.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro50" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/lucha.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Mi Lucha</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">Adolf Hitler</a>
									</span>
								</div>
								<div class="espacioEntreDatos">Formato: <span class="priceBlock">Libro</span>
									<img src="../images/icons/icono_mp3.png" style="height:25px;width:25px;display:none;position: relative;bottom: -8px;left:5px;" alt="tipo">
								</div>
								<div style="" class="espacioEntreDatos">Categoría: <span class="priceBlock">
									<a href="">Historia</a>
									</span>
								</div>
								<div class="editoriales">Editorial: <span class="priceBlock">
									<a href="" itemprop="publisher">Secker and Warburg</a>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$700</span>
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
								<br>Mi lucha (en alemán: Mein Kampf) es un libro escrito por Adolf Hitler, combinando elementos autobiográficos con una exposición de ideas propias de la ideología política del nacionalsocialismo. La primera edición fue lanzada el 18 de julio de 1925.
                                El libro perfila las ideas principales que el régimen alemán llevaría a término durante su gobierno. Especialmente prominente es el amor al pueblo alemán de Hitler, aceptando entre otras teorías Los protocolos de los sabios de Sion. Por ejemplo, denunciaba que el esperanto era parte de un complot judío, y argumenta sobre la vieja idea nacionalista alemana de Drang nach Osten: ('Incentiva hacia el Este') la necesidad de ganar Lebensraum ('espacio vital') hacia el Este, especialmente en Rusia.

Hitler empleaba las tesis principales del «peligro judío», que hablaba de una conspiración judía para ganar el liderazgo mundial. Aun así explica muchos detalles de la niñez de Hitler del proceso por el que se volvió cada vez más antisemita y militarista, especialmente durante sus años en Viena. En el segundo capítulo, escribe sobre cómo veía a los judíos en las calles de la ciudad, y entonces se pregunta: «¿Eran aquellos alemanes?».
							</div>
							<div class="pag"> 
								 <br><br>
                                Por lo que se refiere a las teorías políticas, Adolf Hitler describe su aversión a los que cree son los males gemelos del mundo: el comunismo y el judaísmo, y manifestaba que su propósito era erradicarlos de la Tierra. También anunció que Alemania necesitaba obtener nuevo territorio: Lebensraum. Esta tierra nueva alimentaría el «destino histórico» del pueblo alemán; esta meta explica por qué Hitler invade Europa, tanto por el este como por el oeste, antes de lanzar su ataque en la Unión Soviética.

Hitler se presentaba a sí mismo como el Übermensch, frecuentemente traducido como «superhombre», término que empleaba Friedrich Nietzsche en sus escritos, especialmente en el libro Así habló Zaratustra. Para Nietzsche el Übermensch es una persona capaz de generar su propio sistema de valores identificando como bueno todo lo que procede de su genuina voluntad de poder.
						</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/hitler.jpg" width="120" height="155"></center>
							Adolf Hitler (Braunau am Inn, Imperio austrohúngaro, 20 de abril de 1889 - Berlín, Alemania, 30 de abril de 1945) fue el presidente y canciller de Alemania entre 1933 y 1945. Llevó al poder el Partido Nazi,2 y lideró un régimen totalitario durante el periodo conocido como Tercer Reich o Alemania nazi. Además, fue quien dirigió a Alemania durante la Segunda Guerra Mundial, iniciada por él con el propósito principal de cumplir sus previos planes expansionistas en Europa.

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

