<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro54.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro54" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/mun.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">El Mundo como Voluntad y Representación</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">Arthur Shopenhauer</a>
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
									<a href="" itemprop="publisher">Bookit</a>
									</span>
								</div></center>
								<br><br><br>
								
								<center><table style="background: #F2EFEA; height: 135px; width: 160px; margin-left: 20px;" id="tablaPrecio">
                                    <tbody><tr>
                                      <td>
                                        <div class="precioProductoN">
                                          Precio: <span class="precioN" style="color: #224757;">$205</span>
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
								<br>El mundo como voluntad y representación (Die Welt als Wille und Vorstellung, en el original alemán) es el título de la obra capital del filósofo alemán Arthur Schopenhauer. Fue publicada por primera vez en 1819, por la editorial Brockhaus, de Leipzig. El libro es considerado la más elaborada manifestación del pesimismo filosófico y ha influido en multitud de pensadores y escritores, de la categoría de Freud, Nietzsche, Karl Popper, Cioran y Borges, entre otros. Schopenhauer parte principalmente del idealismo de Kant, y de otros filósofos como Platón, Hume y Berkeley, pero también es tributario, en gran medida, de las filosofías hinduista (las Upanishads) y budista. Su propósito último es la explicación cabal del mundo en todos los aspectos y bajo todos los puntos de vista, tarea que el filósofo aborda a través de los conceptos de voluntad y representación. Todo su trabajo posterior no supondrá más que el desarrollo de las ideas fundamentales expuestas en esta obra.

							</div>
							<div class="pag"> 
								 <br><br>
                                «El mundo es mi representación» es la frase con la que se abre la obra. Schopenhauer parte de la premisa de la limitación del conocimiento humano, idea tradicional en filosofía: «Nadie puede salirse de sí mismo para identificarse directamente con las cosas distintas a él; todo aquello de que se tiene conocimiento cierto e inmediato se encuentra dentro de su conciencia.» Existe, por un lado, el sujeto de la representación (representación, en alemán: Vorstellung), que es el que conoce; por otra, el objeto, lo que se conoce, condicionado o estructurado por las formas a priori kantianas del espacio, el tiempo y la causalidad. El objeto, los seres naturales, orgánicos e inorgánicos, sin embargo, y esto es lo importante, carecen de existencia real fuera de la representación; no tienen más valor que el sueño de Calderón de la Barca, o el velo de Maya de los hinduistas. Lo que posee existencia verdadera es la cosa en sí, que para Schopenhauer viene expresada en el término voluntad.

						</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/sch.jpg" width="120" height="155"></center>
							Arthur Schopenhauer  (Danzig, 22 de febrero de 1788 — Fráncfort del Meno, Reino de Prusia, 21 de septiembre de 1860) fue un filósofo alemán.

Su filosofía, concebida esencialmente como un «pensar hasta el final» la filosofía de Kant, es deudora de Platón y Spinoza, sirviendo además como puente con la filosofía oriental, en especial con el budismo, el taoísmo y el vedanta. En su obra tardía, a partir de 1836, presenta su filosofía en abierta polémica contra los desarrollos metafísicos postkantianos de sus contemporáneos, y especialmente contra Hegel

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
