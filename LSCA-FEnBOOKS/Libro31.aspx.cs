using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LSCA_FEnBOOKS
{
    public partial class Libro31 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
        {
            CarroDeCompras carrito = CarroDeCompras.CapturarProducto();
            carrito.Agregar(31);
            Response.Redirect("VerCarrito.aspx");
        }
    }
}