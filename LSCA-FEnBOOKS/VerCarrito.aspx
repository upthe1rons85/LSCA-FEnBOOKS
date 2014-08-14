<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="VerCarrito.aspx.cs" Inherits="LSCA_FEnBOOKS.VerCarrito" MasterPageFile="~/index.Master"%>


<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">	
    <div style="background-color: #FFF; padding: 15px; margin: 0 auto; width: 600px; font-weight: 700;">
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
			bottom:-170px;
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
	
	margin: 82px;
    left: 162px;
	padding: 5px;
	position: absolute;
	/*top: 1px;*/
	overflow: visible;
		}
		h1,p{
		color: black;
                text-align: center;
            }
	</style>
        <div id="wrapper">
		
		<div id="header"></div>
		
		<div id="content">
		 <h1>&nbsp; Carrito de Compras</h1>
            <br />
            <br />
            <asp:GridView runat="server" ID="gvCaritoCompras" AutoGenerateColumns="False" EmptyDataText="No hay nada en su carrito de compras."
            GridLines="None" Width="100%" CellPadding="5" ShowFooter="True" DataKeyNames="IdProducto"
            OnRowCommand="gvCaritoCompras_RowCommand" OnRowDataBound="gvCaritoCompras_RowDataBound" ForeColor="White" OnSelectedIndexChanged="gvCaritoCompras_SelectedIndexChanged">
                <HeaderStyle HorizontalAlign="Left" BackColor="#05152f" ForeColor="White" />
                <FooterStyle HorizontalAlign="Right" BackColor="#99CCFF" ForeColor="White" />
                <AlternatingRowStyle BackColor="White" />
                <Columns>
                    <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" />
                    <asp:TemplateField HeaderText="Cantidad">
                        <ItemTemplate>
                            <asp:TextBox runat="server" ID="txtCantidad" Columns="5" Text='<%# Eval("Cantidad") %>'></asp:TextBox>
                            <br />
                            <asp:LinkButton runat="server" ID="btnEliminar" Text="Eliminar" CommandName="Eliminar"
                            CommandArgument='<%# Eval("IdProducto") %>' Style="font-size: 12px;"></asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="PrecioUnitario" HeaderText="Precio" ItemStyle-HorizontalAlign="Right"
                    HeaderStyle-HorizontalAlign="Right" DataFormatString="{0:C}" >
<HeaderStyle HorizontalAlign="Right"></HeaderStyle>

<ItemStyle HorizontalAlign="Right"></ItemStyle>
                    </asp:BoundField>
                    <asp:BoundField DataField="Total" HeaderText="Total" ItemStyle-HorizontalAlign="Right"
                    HeaderStyle-HorizontalAlign="Right" DataFormatString="{0:C}" >
<HeaderStyle HorizontalAlign="Right"></HeaderStyle>

<ItemStyle HorizontalAlign="Right"></ItemStyle>
                    </asp:BoundField>
                </Columns>
                <PagerStyle ForeColor="Black" />
            </asp:GridView>
            <br />
            <asp:Button runat="server" ID="btActulizar" Text="Actualizar el Carrito"
            onclick="btActulizar_Click" Height="30px"/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<asp:Button ID="Button2" runat="server" Height="30px" OnClick="Button2_Click" Text="Seguir Comprando" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="Button1" runat="server" Text="Comprar" Height="30px" OnClick="Button1_Click" />
            &nbsp;&nbsp;&nbsp;<br />
            <asp:Label ID="Label1" runat="server"></asp:Label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
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
        
       
  
