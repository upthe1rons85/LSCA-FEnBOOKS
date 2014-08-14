<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Libros.aspx.cs" Inherits="LSCA_FEnBOOKS.Libros" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div>
    <asp:GridView ID="GridView1" runat="server"
        AllowPaging="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource1"
        Width="48%" OnSelectedIndexChanged="GridView1_SelectedIndexChanged"
        PageSize="5">
          <Columns>
              <asp:BoundField DataField="ID_Libro"
                HeaderText="ID_Libro"
                SortExpression="ID_Libro" />
            <asp:BoundField DataField="Titulo"
                HeaderText="Titulo"
                SortExpression="Titulo" />
            <asp:BoundField DataField="Costo"
                HeaderText="Costo"
                SortExpression="Costo" />
            <asp:CommandField SelectText="Agregar al carrito"
                ShowSelectButton="True" />
        </Columns>
    </asp:GridView>
        <%--  --%>
    <asp:HyperLink ID="HyperLink1" runat="server"
        NavigateUrl="~/Carrito.aspx" Font-Bold="True"
        Font-Size="Large">Ver Libros</asp:HyperLink>

    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="Provider=SQLNCLI11;Data Source=DEVCHUY\SQLEXPRESS;Integrated Security=SSPI;Initial Catalog=CatalogoLibros" ProviderName="System.Data.OleDb" SelectCommand="SELECT [ID_Libro], [Titulo], [Costo] FROM [Libros] WHERE ([ID_Libro] = ?)">
        <SelectParameters>
            <asp:QueryStringParameter DefaultValue="1" Name="ID_Libro" QueryStringField="1" Type="Decimal" />
        </SelectParameters>
        </asp:SqlDataSource>
</div>
    </div>
    </form>
</body>
</html>
