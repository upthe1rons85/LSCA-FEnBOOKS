<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Liricos.aspx.cs" Inherits="LSCA_FEnBOOKS.Liricos" MasterPageFile="~/index.Master"%>

<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">

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
        .Estil0,.Estil1,.Estil2,.Estil3{width:818px;color:white;font-family:Verdana,Helvetica, sans-serif;font-size:11px;-moz-box-shadow:0 5px 5px #888;-webkit-box-shadow:0 5px 5px #888;text-align:center;box-shadow:0 5px 5px #888;padding:5px}
		.Estil0{background-color:black}
		.Estil1{background-color:#12194d}
		.Estil2{background-color:#eb8d13}
		.Estil3{background-color:#870e17}
		div.content {
	width: 832px;
	height: 590px;
	background-color: #f1f2bd;
	-webkit-box-align:center;
	z-index: auto;
	background-repeat:no-repeat;
	margin: 5px;
    left: 203px;
	padding: 5px;
	position: absolute;
	overflow: visible;
		}
		h1{
			color: white;
			font-size:18px;
		}
        h2{
		color: white;
		font-size:12px;
		}
	</style>

	<div id="wrapper">
		
		<div id="header">
		</div>
		
		<center><div id="content">
		<div class="content">
			<div id="unityPlayer">			
<!-- Aqui se muestran las portadas de libros dividido en 3 partes -->	
	<table>
	<tbody>
	<tr>
	<td>
	<div class="Estil0">
	<h1>Género Lírico</h1>
	</div>
	<div class="Estil1">
	<h2>Poesía Latinoamericana</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="upperDeck">
	<ul class="thumb">
		<li class="fancyThumb" style="margin-left: -10px;"><a href="Libro21.aspx"><img title="Cien Sonetos de Amor" src="LSCA-FEnBOOKS/imagenes/sonetos.jpg" alt="Pablo Neruda" width="318" height="500"></a><div class="itemCaptionOuter"><div class="carouselItemsCaption"><span class="title"><a href="../libreria/9786071130525/memorial-del-engano/volpi-jorge/">Jorge Volpi</a></span><br><span class="editorialRelacionados">Memorial del engaÃ±o</span></div></div></li>
		<li class="fancyThumb"><a href="Libro22.aspx"><img title="Poeta en Nueva York" src="LSCA-FEnBOOKS/imagenes/pny.jpg" alt="Federico Garcia Lorca" height="479" width="314" /></a></li>
		<li class="fancyThumb"><a href="Libro23.aspx"><img title="La Centena" src="LSCA-FEnBOOKS/imagenes/cent.jpg" alt="Octavio Paz" height="500" width="356"></img></a></li>
		<li class="fancyThumb"><a href="Libro24.aspx"><img title="Salvo el Crepusculo" src="LSCA-FEnBOOKS/imagenes/crep.jpg" alt="Julio Cortazar" height="500" width="318" /></a></li>
		<li class="fancyThumb"><a href="Libro25.aspx"><img title="Antologia Esencial" src="LSCA-FEnBOOKS/imagenes/antp.jpg" alt="Cesar Vallejo" height="220" width="143" /></a></li>
		<li class="fancyThumb"><a href="Libro26.aspx"><img title="Antologia Poetica Benedetti" src="LSCA-FEnBOOKS/imagenes/ant.jpg" alt="Mario Benedetti" height="500" width="304" /></a></li>
	</ul>
	</td>
	</tr>
	<tr>
	<td>
	<div class="Estil2">
	<h2>Poesía Mundial</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="centerDeck">
	<ul class="thumb">
	<li class="fancyThumb"><a href="Libro27.aspx"><img title="Las Flores del Mal" src="LSCA-FEnBOOKS/imagenes/flores.jpg" alt="Charles Baudelaire" height="960" width="811" /></a></li>
	<li class="fancyThumb"><a href="Libro28.aspx"><img title="Hojas de Hierba" src="LSCA-FEnBOOKS/imagenes/hojas.jpg" alt="Walt Whitman" height="500" width="312" /></a></li>
	<li class="fancyThumb"><a href="Libro29.aspx"><img src="LSCA-FEnBOOKS/imagenes/son.jpg" alt="William Shakespeare" title="Sonetos" height="500" width="427" /></a></li>
	<li class="fancyThumb"><a href="Libro30.aspx"><img title="El Cuervo" src="LSCA-FEnBOOKS/imagenes/raven.jpg" alt="Edgar Allan Poe" height="320" width="222" /></a></li>
	<li class="fancyThumb"><a href="Libro31.aspx"><img src="LSCA-FEnBOOKS/imagenes/div.jpg" alt="Dante Alighieri" title="La Divina Comedia" height="320" width="273" /></a></li>
	<li class="fancyThumb"><a href="Libro32.aspx"><img title="Lobo Estepario" src="LSCA-FEnBOOKS/imagenes/lobo.jpg" alt="Hermann Hesse" height="237" width="168" /></a></li>
	</ul>
	</td>
	</tr>
	<tr>
	<td>
	<div class="Estil3">
	<h2>Sátira</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="bottomDeck">
	<ul class="thumb">
	<li class="fancyThumb"><a href="Libro33.aspx"><img title="Un Mundo Feliz" src="LSCA-FEnBOOKS/imagenes/mundo.jpg" alt="Aldous Huxley" height="500" width="312" /></a></li>
	<li class="fancyThumb"><a href="Libro34.aspx"><img title="Candido o el Optimismo" src="LSCA-FEnBOOKS/imagenes/can.jpg" alt="Voltaire" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro35.aspx"><img title="Rebelion en la Granja" src="LSCA-FEnBOOKS/imagenes/rebel.jpg" alt="George Orwell" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro36.aspx"><img title="Los Viajes de Gulliver" src="LSCA-FEnBOOKS/imagenes/gul.jpg" alt="Jonathan Swift" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro37.aspx"><img title="Oliver Twist" src="LSCA-FEnBOOKS/imagenes/oli.jpg" alt="Charles Dickens" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro38.aspx"><img title="Soliloquio del Rey Leopoldo" src="LSCA-FEnBOOKS/imagenes/leo.jpg" alt="Mark Twain" height="273" width="194" /></a></li>
	</ul>
	</td>
	</tr>
	</tbody>
	</table>
</div>
</div>				
			</div></center>			 
		
		
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
