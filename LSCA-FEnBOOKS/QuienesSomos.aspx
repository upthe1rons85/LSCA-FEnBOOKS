<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="QuienesSomos.aspx.cs" Inherits="LSCA_FEnBOOKS.QuienesSomos" MasterPageFile="~/index.Master" %>

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
		div.content {
	width: 760px;
	height: 435px;
	background-color: #f1f2bd;
	-webkit-box-align:center;
	z-index: auto;
	background-image: url(LSCA-FEnBOOKS/imagenes/perg.jpg);
	background-repeat:no-repeat;
	margin: 82px;
    left: 162px;
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
		
		<div id="header">
		
		</div><!-- #header -->
		
		<div id="content">
		<center><div class="content">
			<div id="unityPlayer">
			<center><img src="LSCA-FEnBOOKS/imagenes/qslogo.png" height="95px" width="240px"/></center>
		   <p>NUESTRA LIBRERIA VIRTUAL CONTIENE INFORMACION PARA TODO TIPO DE LECTORES
			  DESDE REVISTAS, NOVELAS Y LIBROS PARA TODOS LOS GENEROS.<br><br>

			UNA DE LAS VENTAJAS QUE TIENE ESTA HERRAMIENTA ES LA REDUCCION DE COSTOS EN PAPEL Y AYUDAR AL MEDIO AMBIENTE, 
			ADEMAS EL LECTOR TIENE LA OPORTUNIDAD DE COMPRAR, CAMBIAR EL LIBRO POR EL MISMO PRECIO POR MEDIO DE UNA LOGIN
			QUE SE REGISTRARA Y DARA UNA CONTRASEÑA PARA TODO LOS USUARIOS .
			EL REGISTRO SERA GRATUITO POR MEDIO DE LA PAGINA.</p>
			<center><img src="LSCA-FEnBOOKS/imagenes/lib1.jpg" height="205px" width="300px"/></center>					
			</div>			 
		</div></center>
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