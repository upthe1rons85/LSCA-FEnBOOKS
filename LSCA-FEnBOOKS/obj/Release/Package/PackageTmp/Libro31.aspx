<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro31.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro31" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/div.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">La Divina Comedia</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">Dante Alighieri</a>
									</span>
								</div>
								<div class="espacioEntreDatos">Formato: <span class="priceBlock">Libro</span>
									<img src="../images/icons/icono_mp3.png" style="height:25px;width:25px;display:none;position: relative;bottom: -8px;left:5px;" alt="tipo">
								</div>
								<div style="" class="espacioEntreDatos">Categoría: <span class="priceBlock">
									<a href="">Poesia Epica</a>
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
                                          Precio: <span class="precioN" style="color: #224757;">$70</span>
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
								<br>La Divina Comedia (en italiano: Divina Commedia) es un poema escrito por Dante Alighieri. Se desconoce la fecha exacta en que fue escrito aunque las opiniones más reconocidas aseguran que el Infierno pudo ser compuesto entre 1304 y 1307 o 1308, el Purgatorio de 1307 o 1308 a 1313 o 1314 y por último, el Paraíso de 1313 o 1314 a 1321, fecha del fallecimiento del poeta. Libro más famoso de su autor, es una de las obras fundamentales de la transición del pensamiento medieval (teocentrista) al renacentista (antropocentrista). Es considerada la obra maestra de la literatura italiana y una de las cumbres de la literatura universal. Se considera por tanto que la redacción de la primera parte habría sido alternada con la redacción del Convivium y De Vulgari Eloquentia, mientras que De Monarchia pertenecería a la época de la segunda o tercera etapa, a la última de las cuales hay que atribuir sin duda la de dos obras de menor empeño: la Cuestión del agua y la tierra y las dos églogas escritas en respuesta a sendos poemas de Giovanni del Virgilio.

							</div>
							<div class="pag"> 
								 <br><br>
                                Dante Alighieri llamó sencillamente Commedia a su libro, pues, de acuerdo con el esquema clásico, no podía ser una tragedia, ya que su final es feliz. Fue Boccaccio quién añadió el adjetivo "divina" durante la época en la que se encargó de leerla y comentarla públicamente por diferentes ciudades italianas. El libro suele presentarse actualmente con un gran cuerpo de notas que ayudan a entender quiénes eran los personajes mencionados. Estos comentarios incluyen interpretaciones de las alegorías o significados místicos que contendría el texto, que otros prefieren leer como un relato literal. Esta tendencia se acentuó en el siglo XX entre los exégetas y críticos de la Divina comedia, muchos de los cuales sostienen que Dante narró una historia en el mundo material de ultratumba tal como se lo concebía en su tiempo.[cita requerida] Miguel Asín Palacios, por otra parte, destacó la importancia de la escatología musulmana en la estructura del Infierno dantesco

						</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/dante.jpg" width="120" height="155"></center>
							Poeta, prosista, teórico de la literatura, filósofo y pensador político italiano. Está considerado como una de las figuras más sobresalientes de la literatura universal, admirado por su espiritualidad y por su profundidad intelectual. Es también conocido como "el Poeta Supremo".
Dante nació en Florencia, en el seno de una familia que pertenecía a la pequeña nobleza. Su madre murió cuando todavía era pequeño, y su padre al cumplir los 18 años. 

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
