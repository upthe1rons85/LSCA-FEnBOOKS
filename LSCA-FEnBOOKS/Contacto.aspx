<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Contacto.aspx.cs" Inherits="LSCA_FEnBOOKS.Contacto" MasterPageFile="~/index.Master" %>


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
	height: 465px;
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
		<!-- <div id="map-canvas"/> -->
			<div id="P">	
			<div id="contacto">
			
						<h1>Contacto LSCA-FE n' BOOKS</h1>
						<p>Escríbenos tus dudas, sugerencias y quejas. Recuerda que entre más</p>
						<p>información nos proporciones, mejor será la atención que te brindaremos.</p>
							<div class="box" style="width:683px;">
							
								<script type="text/javascript">
								    var RecaptchaOptions = {
								        theme: 'clean'
								    };
								 </script>
                                <input type="hidden" value="internet" name="destinatario" />
									<table width="460px" border="0" cellspacing="0" cellpadding="0" style="margin-left: auto; margin-right: auto;">
										  <tr>
										    <td valign="middle"><span>Nombre:</span></td>
										    <td valign="middle"><p>
                                                <input id="Text1" type="text" /></p></td>
										  </tr>
										  <tr>
										    <td valign="middle"><span>E-mail:</span></td>
										    <td valign="middle"><p>
                                                <input id="Text2" type="text" /></p></td>
										  </tr>
										  <tr>
										    <td valign="middle"><span>Teléfono:</span></td>
										    <td valign="middle"><input type="text" name="tel" id="tel" size="58" maxlength="150" /></td>
										  </tr>
										  <tr>
										    <td valign="middle"><span>Asunto:</span></td>
										    <td valign="middle"><select name="asunto0" id="asunto0">
       								                             <option>Comentario</option>
    								                             <option>Sugerencia</option>
                                                                 <option>Pregunta</option>
     								                             <option>Queja</option>
      								                             <option>Solicitud</option>
     								                               </select></td>
										  </tr>
										  <tr>
										    <td valign="top"><span>Mensaje:</span></td>
										    <td rowspan="2"><textarea name="mensaje" id="mensaje" cols="45" rows="5"></textarea></td>
										  </tr>
										  <tr>
										    <td colspan="2">&nbsp;</td>
									  	</tr>
									  	<tr>
										    <td align="center" colspan="2">&nbsp;</td>
									  	</tr>
										<tr>
																						<td>&nbsp;</td>
											<td><strong> </strong><script type="text/javascript" src="https://www.google.com/recaptcha/api/challenge?k=6LcdnuMSAAAAAJYQ6QkHEdX8YF_bFsAbiuiBF6A5"></script>
											
											<noscript>
												<iframe src="https://www.google.com/recaptcha/api/noscript?k=6LcdnuMSAAAAAJYQ6QkHEdX8YF_bFsAbiuiBF6A5" height="300" width="500" frameborder="0"></iframe><br/>
												<textarea name="recaptcha_challenge_field" rows="3" cols="40"></textarea>
												<input type="hidden" name="recaptcha_response_field" value="manual_challenge"/>
											</noscript></td>
										</tr>
										  <tr>
										    <td>&nbsp;</td>
										    </tr>
										  <tr>
										    <td colspan="2" align="center">
												    <input id="Button1" type="button" value="Enviar" />
											</td>
										    </tr>
										</table>
							</div>
					</div>
			
			
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
