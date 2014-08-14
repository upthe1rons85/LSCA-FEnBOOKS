<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro03.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro03" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/HP1.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Harry Potter y La Piedra Filosofal</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">J. K. Rowling</a>
									</span>
								</div>
								<div class="espacioEntreDatos">Formato: <span class="priceBlock">Libro</span>
		
									<img src="../images/icons/icono_mp3.png" style="height:25px;width:25px;display:none;position: relative;bottom: -8px;left:5px;" alt="tipo">
								</div>
								<div style="" class="espacioEntreDatos">Categoría: n class="priceBlock">
									<a href="">Literatura Fantastica</a>
									
								</div>
								<div class="editoriales">Editorial: <span class="priceBlock">
									<a href="" itemprop="publisher">Bloomsbury Publishing </a>
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
								<br>Las aventuras del héroe infantil Harry Potter, niño huérfano con poderes mágicos capaz de evadirse a voluntad a un mundo de fantasía,
                                 consiguieron batir todos los récords de ventas en la literatura del género, aunque muchos críticos se mostraban reacios a encasillar los libros de Rowling como cuentos para niños, como ocurriera con el famoso Tom Sawyer de Mark Twain. 
                                <br /><br />La persona que ha hecho posible que muchos niños y adolescentes prefieran leer un libro a pasar las horas muertas delante del televisor es una tímida británica que se propuso escribir siete entregas de la serie, que equivalen a los cursos que el 
                                protagonista debe superar en la escuela de magia y hechicería a la que asiste cuando se escapa de la horrible realidad cotidiana en casa de sus mezquinos tíos.
							</div>
							<div class="pag"> 
								 <br><br>
								La novela presenta a Harry Potter, un niño huérfano criado por sus tíos que descubre en su undécimo cumpleaños que es un mago. En la novela se narran sus primeros pasos en la comunidad mágica, su ingreso en el Colegio Hogwarts y cómo comienza a hacer amigos, que lo ayudan a enfrentarse a lord Voldemort, el brujo tenebroso que había asesinado a sus padres y cuyo espíritu busca un antiguo objeto legendario conocido como la piedra filosofal.

La novela fue rechazada por varias editoriales hasta que la editorial Bloomsbury se decidió a publicarla. La edición británica salió a la venta el día 30 de junio de 1997,2 seguida en Estados Unidos el 1 de septiembre de 1998 por la edición de Scholastic Corporation. La Editorial Salamandra obtuvo en el año 2000 los derechos para la publicación del libro en castellano. En el año 2007, una primera edición firmada por Rowling se subastó en Londres por 27.876 libras.3 Además, ese mismo año se comercializó una edición conmemorativa de la novela.
							</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/jr.jpg" width="120" height="155"></center>
								Joanne Rowling nació en julio de 1965 en el Yate General Hospital (Inglaterra) y creció en Chepstow (Gwent), donde estudió en la Wyedean Comprehensive. Jo dejó Chepstow para ir a la Universidad de Exeter, donde se licenció en Filología Francesa y Clásica. 
                                Una vez titulada, se trasladó a Londres. Comenzó a escribir la serie de Harry Potter durante un trayecto en tren con retraso de Manchester 
                                a la estación de King’s Cross, en Londres. Durante los cinco años siguientes esbozó los argumentos de cada uno de los libros y comenzó a escribir la primera novela.</div>
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
