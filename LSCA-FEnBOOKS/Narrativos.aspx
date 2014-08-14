<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Narrativos.aspx.cs" Inherits="LSCA_FEnBOOKS.Narrativos" MasterPageFile="~/index.Master"%>


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
		
		
		<center><div id="content">
		<div class="content">
			<div id="unityPlayer">			
<!-- Aqui se muestran las portadas de libros dividido en 3 partes -->	
	<table>
	<tbody>
	<tr>
	<td>
	<div class="Estil0">
	<h1>Género Narrativo</h1>
	</div>
	<div class="Estil1">
	<h2>Fantasia</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="upperDeck">
	<ul class="thumb">
		<li class="fancyThumb"><a href="Libro01.aspx"><img title="Cancion de Hielo y Fuego: Juego de Tronos" src="LSCA-FEnBOOKS/imagenes/CHF1.jpg" alt="George R.R. Martin" height="960" width="811" /></a></li>
		<li class="fancyThumb"><a href="libLOTR.aspx"><img title="El Señor de los Anillos: La Comunidad del Anillo" src="LSCA-FEnBOOKS/imagenes/LOTR1.jpg" alt="Tolkien" height="500" width="312" /></a></li>
		<li class="fancyThumb"><a href="Libro03.aspx"><img src="LSCA-FEnBOOKS/imagenes/HP1.jpg" alt="J.K. Rowling" title="Harry Potter y La Piedra Filosofal" height="500" width="427" /></a></li>
		<li class="fancyThumb"><a href="Libro05.aspx"><img src="LSCA-FEnBOOKS/imagenes/N1.jpg" alt="C.S. Lewis" title="Narnia: El Leon, La Bruja y el Armario" height="320" width="273" /></a></li>
		<li class="fancyThumb"><a href="Libro19.aspx"><img title="Alicia en el Pais de las Maravillas" src="LSCA-FEnBOOKS/imagenes/ali.jpg" alt="Lewis Carrol" height="220" width="143" /></a></li>
		<li class="fancyThumb"><a href="Libro20.aspx"><img title="La Historia Interminable" src="LSCA-FEnBOOKS/imagenes/hist.jpg" alt="Michael Ende" height="500" width="304" /></a></li>
	</ul>
	</td>
	</tr>
	<tr>
	<td>
	<div class="Estil2">
	<h2>Terror</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="centerDeck">
	<ul class="thumb">
	<li class="fancyThumb"><a href="Libro07.aspx"><img title="La Llamada de Cthulhu" src="LSCA-FEnBOOKS/imagenes/cthulhu.jpg" alt="H.P. Lovecraft" height="960" width="811" /></a></li>
	<li class="fancyThumb"><a href="Libro08.aspx"><img title="El Resplandor" src="LSCA-FEnBOOKS/imagenes/shine.jpg" alt="Stephen King" height="500" width="312" /></a></li>
	<li class="fancyThumb"><a href="Libro09.aspx"><img src="LSCA-FEnBOOKS/imagenes/drac.jpg" alt="Bram Stoker" title="Dracula" height="500" width="427" /></a></li>
	<li class="fancyThumb"><a href="Libro10.aspx"><img title="El Exorcista" src="LSCA-FEnBOOKS/imagenes/exo.jpg" alt="William Batty" height="320" width="222" /></a></li>
	<li class="fancyThumb"><a href="Libro11.aspx"><img src="LSCA-FEnBOOKS/imagenes/leye.jpg" alt="Richard Matheson" title="Soy Leyenda" height="320" width="273" /></a></li>
	<li class="fancyThumb"><a href="Libro12.aspx"><img title="Otra Vuelta de Tuerca" src="LSCA-FEnBOOKS/imagenes/turn.jpg" alt="Henry James" height="237" width="168" /></a></li>
	</ul>
	</td>
	</tr>
	<tr>
	<td>
	<div class="Estil3">
	<h2>Novela</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="bottomDeck">
	<ul class="thumb">
	<li class="fancyThumb"><a href="Libro13.aspx"><img title="1984" src="LSCA-FEnBOOKS/imagenes/1984.jpg" alt="George Orwell" height="500" width="312" /></a></li>
	<li class="fancyThumb"><a href="Libro14.aspx"><img title="Don Quijote de la Mancha" src="LSCA-FEnBOOKS/imagenes/qui.jpg" alt="Miguel de Cervantes Saavedra" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro15.aspx"><img title="Los Miserables" src="LSCA-FEnBOOKS/imagenes/mis.jpg" alt="Victor Hugo" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro16.aspx"><img title="Veinte Mil Leguas de Viajes Submarinos" src="LSCA-FEnBOOKS/imagenes/veinte.jpg" alt="Julio Verne" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro17.aspx"><img title="Fahrenheit 451" src="LSCA-FEnBOOKS/imagenes/451.jpg" alt="Ray Bradbury" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro18.aspx"><img title="Crimen y Castigo" src="LSCA-FEnBOOKS/imagenes/crim.jpg" alt="Fiodor Dostyevski" height="273" width="194" /></a></li>
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

