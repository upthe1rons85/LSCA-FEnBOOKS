<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Carrito.aspx.cs" Inherits="LSCA_FEnBOOKS.Carrito" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
         <asp:GridView ID="GridView1" runat="server"
        AutoGenerateColumns="False" Width="48%">
        <Columns>
            <asp:BoundField DataField="ID_Libro"
                HeaderText="ID_Libro" />
            <asp:BoundField DataField="Titulo"
                HeaderText="Titulo" SortExpression="Titulo" />
            <asp:BoundField DataField="Costo"
                HeaderText="Costo" SortExpression="Costo" />
        </Columns>
    </asp:GridView>

         <asp:Button ID="btnComprar" runat="server" OnClick="btnComprar_Click" Text="Comprar" />

    </div>
    </form>
</body>
</html>
