<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="LSCA_FEnBOOKS.Login" %>

<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="ie6 ielt8"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7 ielt8"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<title>LSCA-FE n' BOOKS - Iniciar Sesion / Registrarse</title>
<link rel="stylesheet" type="text/css" href="Login/style.css" />
</head>
<body style="background-image: url('LSCA-FEnBOOKS/imagenes/lib1.jpg'); background-repeat: no-repeat; background-attachment: fixed; background-color: #000000;">
<div class="container" >
	<section id="content">
		<form id="form1" runat="server">
			<h1>Login</h1>
			<div>
			     <label for="Usuario" style="text-align:left">Usuario</label>
				<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                 <%--<input type="text" placeholder="Username" required="" id="username" />--%>
			</div>
			<div>
			     <label for="Usuario" style="text-align:left">Contraseña</label>				<%--<input type="password" placeholder="Password" required="" id="password" />--%>
			    <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>
			</div>
			<div>
			    <asp:Button ID="Button1" runat="server" Text="Entrar" OnClick="Button1_Click" />
                <%--<input type="submit" value="Log in" />--%>
				<a href="#">
                <asp:CheckBox ID="chkPersistLogin" runat="server" Text="Recordarme" />
                <%--Perdiste tu password?--%></a>
				<%--<a href="#">               
                Registrarse</a>--%>
			</div>
            <br/><br/><br/><br/><br/><br/>
            <h1>Registrarse</h1>
			<div>
			     <label for="Usuario" style="text-align:left">Correo</label>
				<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                 <%--<input type="text" placeholder="Username" required="" id="username" />--%>
			</div>
			<div>
			     <label for="Usuario" style="text-align:left">Usuario</label>
				 <%--<input type="password" placeholder="Password" required="" id="password" />--%>
			    <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
			    <br />
                 <label for="Usuario" style="text-align:left">Contraseña</label>
			    <asp:TextBox ID="TextBox5" runat="server" TextMode="Password"></asp:TextBox>
			</div>
			<div>
			    <asp:Button ID="Button2" runat="server" Text="Registrarse" OnClick="Button2_Click" />
                <%--<input type="submit" value="Log in" />--%>
				<a href="#">Confirma tu correo</a>
				<%--<a href="#">               
                Registrarse</a>--%>
			</div>
		</form>
	</section>
    
</div>
</body>
</html>
