<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Configuracion.aspx.cs" Inherits="LSCA_FEnBOOKS.Configuracion" MasterPageFile="~/index.Master"%>


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
	height: 430px;
	background-color: #f1f2bd;
	-webkit-box-align:center;
	z-index: auto;
	background-repeat:no-repeat;
	margin: 82px;
    left: 162px;
	padding: 5px;
	position: absolute;
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
					<font size="4"color="blue"><label>Modificar los Datos</label></font><br><br>
<label for="edit-user-name-first-preferred">Nombre: </label>
<input type="text" maxlength="150" name="user[name_first_preferred]" id="edit-user-name-first-preferred" size="40" value="" class="form-text"/><br><br>
<label for="edit-user-name-last-preferred">Apellidos: </label>
<input type="text" maxlength="150" name="user[name_first_preferred]" id="edit-user-name-first-preferred" size="40" value="" class="form-text"/><br><br>
<label for="edit-user-name-first-preferred">Domicilio: </label>
<input type="text" maxlength="150" name="user[name_first_preferred]" id="edit-user-name-first-preferred" size="40" value="" class="form-text"/><br><br>
<label for="edit-user-population-preferred">Población: </label>
<select name="user[population]" class="form-select" id="edit-user-population" /><option value="1">Monterrey</option><option value="1">Distrito Federal</option><option value="1">Guadalajara</option><br><br>
<label for="edit-user-state-preferred">Estado: </label>
<select name="user[state]" class="form-select" id="edit-user-state" ><option value="0">Nuevo Leon - NL</option><option value="15">Mexico - MX</option><option value="2">Aguascalientes - Ags.</option></select><br />
                    <br>
                    <asp:ChangePassword ID="ChangePassword1" runat="server">
                    </asp:ChangePassword>
                    <br>
                    <br><br><br>
<div class="submit-buttons"><span class="submit-span-wrapper"><input type="submit" name="op" id="edit-submit" value="Guardar Cambios"  class="form-submit" />
</span></div>				
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
