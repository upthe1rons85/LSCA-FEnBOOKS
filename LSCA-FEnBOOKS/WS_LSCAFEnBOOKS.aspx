<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WS_LSCAFEnBOOKS.aspx.cs" Inherits="LSCA_FEnBOOKS.WS_LSCAFEnBOOKS" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
        <asp:GridView ID="GridView1" runat="server">
        </asp:GridView>
        <br />
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Generar WS" />
    </form>
</body>
</html>
