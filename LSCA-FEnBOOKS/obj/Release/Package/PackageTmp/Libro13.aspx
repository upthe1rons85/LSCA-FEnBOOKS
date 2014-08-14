<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libro13.aspx.cs" Inherits="LSCA_FEnBOOKS.Libro13" MasterPageFile="~/index.Master"%>

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
								<img  src="LSCA-FEnBOOKS/imagenes/1984.jpg" width="300" height="400" itemprop="image">
							</div>
							<div class="hard"></div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">1984</h1><br>
								 <div class="espacioEntreDatos" style="padding-top:5px; ">Autor: <span class="priceBlock">
									<a href="" itemprop="seller">George Orwell</a>
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
                                          Precio: <span class="precioN" style="color: #224757;">$129</span>
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
								<br>La novela se localiza en una futura Londres, parte de una región llamada Franja Aérea 1, que "... alguna vez fue llamada Inglaterra o Britania"2 integrada, a su vez, en un inmenso estado colectivista: Oceanía. 
                                La sociedad de Oceanía está dividida en tres grupos. Los miembros "externos" del Partido Único, los miembros del Consejo dirigente, o círculo interior del partido, y una masa de gente a la que el Partido mantiene pobre y entretenida para que no puedan ni quieran rebelarse, los proles.
<br /><br />Los miembros "externos" constituyen la burocracia del aparato estatal (de ahí la necesidad de la estricta vigilancia), viven sometidos a un control asfixiante y a una propaganda alienante que los desmoraliza y les impide pensar críticamente. El estado suprime todo derecho y los condena a una existencia poco más que miserable, 
                                con riesgo de perder la vida o sufrir vejámenes espantosos, si no que demostrasen suficiente fidelidad y adhesión a la causa nacional. 

							</div>
							<div class="pag"> 
								 <br><br>Para ello se organizan numerosas manifestaciones donde se requiere la participación activa de los miembros, gritando las consignas favorables al partido, vociferando contra los supuestos traidores, dando rienda suelta al más desaforado fanatismo. Solo con fervor fanático se puede escapar a la omnipresente vigilancia de la policía del pensamiento.
                                <br /><br />La novela es una descripción analítica de los regímenes totalitarios, muy en particular del régimen stalinista. El título que se le da al gran dictador así lo sugiere: "Gran Hermano". Una alusión inequívoca a Stalin. Además se ridiculiza el derrotero político de éste ante la agresión nazi en la Segunda Guerra Mundial: Stalin pasó de ser virtual aliado de Hitler, a ser su más enconado enemigo. Y ese tremendo acto fallido pesaría sobre la credibilidad de los comunistas del mundo entero.
El personaje principal de la novela es Winston Smith, que trabaja en el Ministerio de la Verdad (uno de los cuatro ministerios que hay). Su cometido es reescribir la historia, ironizando así, el ideal declarado en el nombre del Ministerio.
						</div>
							<div class="pag"> 
								<center><br><h1 class="" style="margin-top:-7px" itemprop="name">Bio del autor</h1><br>
								<img src="LSCA-FEnBOOKS/imagenes/geo.jpg" width="120" height="155"></center>
							George Orwell, seudónimo de Eric Arthur Blair:fue un escritor y periodista británico, cuya obra lleva la marca de las experiencias personales vividas por el autor en tres etapas de su vida: su posición en contra del imperialismo británico que lo llevó al compromiso como representante de las fuerzas del orden colonial en 
                                Birmania durante su juventud; a favor de la justicia social, después de haber observado y sufrido las condiciones de vida de las clases sociales de los trabajadores de Londres y París; en contra de los totalitarismos nazi y stalinista tras su participación en la Guerra Civil Española. 
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
