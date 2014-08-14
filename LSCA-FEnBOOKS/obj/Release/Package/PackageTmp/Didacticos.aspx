<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Didacticos.aspx.cs" Inherits="LSCA_FEnBOOKS.Didacticos" MasterPageFile="~/index.Master"%>

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
	<h1>Género Didactico</h1>
	</div>
	<div class="Estil1">
	<h2>Consulta</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="upperDeck">
	<ul class="thumb">
		<li class="fancyThumb"><a href="Libro39.aspx"><img title="Programacion Orientada a Objetos" src="LSCA-FEnBOOKS/imagenes/poo.gif" alt="Varios" height="960" width="811" /></a></li>
		<li class="fancyThumb"><a href="Libro40.aspx"><img title="Algebra Lineal" src="LSCA-FEnBOOKS/imagenes/alg.jpg" alt="Stanley Grossman" height="500" width="312" /></a></li>
		<li class="fancyThumb"><a href="Libro41.aspx"><img src="LSCA-FEnBOOKS/imagenes/so.jpg" alt="Andrew Tanenbaum" title="Sistemas Operativos Modernos" height="500" width="427" /></a></li>
		<li class="fancyThumb"><a href="Libro42.aspx"><img src="LSCA-FEnBOOKS/imagenes/linux.jpg" alt="Varios" title="Linux & Open Source" height="320" width="273" /></a></li>
		<li class="fancyThumb"><a href="Libro43.aspx"><img title="ASP.NET MVC" src="LSCA-FEnBOOKS/imagenes/asp.jpg" alt="Dino Esposito" height="220" width="143" /></a></li>
		<li class="fancyThumb"><a href="Libro45.aspx"><img title="HTML5 y CSS3: Revolucione el Diseño de sus sitios Web" src="LSCA-FEnBOOKS/imagenes/html.jpg" alt="Christophe Aubry" height="500" width="304" /></a></li>
	</ul>
	</td>
	</tr>
	<tr>
	<td>
	<div class="Estil2">
	<h2>Pensamiento Historico</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="centerDeck">
	<ul class="thumb">
	<li class="fancyThumb"><a href="Libro46.aspx"><img title="Capital, Trabajo y Plusvalia" src="LSCA-FEnBOOKS/imagenes/cap.jpg" alt="Karl Marx" height="960" width="811" /></a></li>
	<li class="fancyThumb"><a href="Libro47.aspx"><img title="Manifiesto del Partido Comunista" src="LSCA-FEnBOOKS/imagenes/man.jpg" alt="Karl Marx / Friederich Engels" height="500" width="312" /></a></li>
	<li class="fancyThumb"><a href="Libro48.aspx"><img src="LSCA-FEnBOOKS/imagenes/nat.jpg" alt="Ralph Waldo Emerson" title="El Espiritu de la Naturaleza" height="500" width="427" /></a></li>
	<li class="fancyThumb"><a href="Libro49.aspx"><img title="Dios y el Estado" src="LSCA-FEnBOOKS/imagenes/dios.jpg" alt="Mijhail Bakunin" height="320" width="222" /></a></li>
	<li class="fancyThumb"><a href="Libro50.aspx"><img src="LSCA-FEnBOOKS/imagenes/lucha.jpg" alt="Adolf Hitler" title="Mi Lucha" height="320" width="273" /></a></li>
	<li class="fancyThumb"><a href="Libro51.aspx"><img title="El Estado y La Revolucion" src="LSCA-FEnBOOKS/imagenes/lenin.jpg" alt="Lenin" height="237" width="168" /></a></li>
	</ul>
	</td>
	</tr>
	<tr>
	<td>
	<div class="Estil3">
	<h2>Filosofia</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="bottomDeck">
	<ul class="thumb">
	<li class="fancyThumb"><a href="Libro52.aspx"><img title="La Gaya Ciencia" src="LSCA-FEnBOOKS/imagenes/gaya.jpg" alt="Friederich Nietzche" height="500" width="312" /></a></li>
	<li class="fancyThumb"><a href="Libro53.aspx"><img title="Etica" src="LSCA-FEnBOOKS/imagenes/etica.jpg" alt="Baruch Spinoza" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro54.aspx"><img title="El Mundo como Voluntad y Representación" src="LSCA-FEnBOOKS/imagenes/mun.jpg" alt="Arthur Shoppenhauer" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro55.aspx"><img title="Discurso del Metodo" src="LSCA-FEnBOOKS/imagenes/dis.jpg" alt="Rene Descartes" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro56.aspx"><img title="Crítica de la razon pura" src="LSCA-FEnBOOKS/imagenes/crit.jpg" alt="Immanuel Kant" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="Libro57.aspx"><img title="Mi Punto de Vista" src="LSCA-FEnBOOKS/imagenes/pto.jpg" alt="Søren Kierkegaard" height="273" width="194" /></a></li>
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


