using System;
using System.Collections.Generic;
using System.Data.Odbc;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Web;
using System.Web.Configuration;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Windows.Forms;
using TextBox = System.Web.UI.WebControls.TextBox;

namespace LSCA_FEnBOOKS
{
    public partial class VerCarrito : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
                BindData();
        }
        protected void BindData()
        {
            gvCaritoCompras.DataSource = CarroDeCompras.CapturarProducto().ListaProductos;
            gvCaritoCompras.DataBind();
        }
        protected void gvCaritoCompras_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.Footer)
            {
                e.Row.Cells[3].Text = "Total: " + CarroDeCompras.CapturarProducto().SubTotal().ToString("C");
            }
        }
        protected void gvCaritoCompras_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Eliminar")
            {
                int productId = Convert.ToInt32(e.CommandArgument);
                CarroDeCompras.CapturarProducto().EliminarProductos(productId);
            }
            BindData();
        }
        protected void btActulizar_Click(object sender, EventArgs e)
        {
            foreach (GridViewRow row in gvCaritoCompras.Rows)
            {
                if (row.RowType == DataControlRowType.DataRow)
                {
                    try
                    {
                        int productoId = Convert.ToInt32(gvCaritoCompras.DataKeys[row.RowIndex].Value);
                        int cantidad = int.Parse(((TextBox)row.Cells[1].FindControl("txtCantidad")).Text);
                        CarroDeCompras.CapturarProducto().CantidadDeProductos(productoId, cantidad);
                    }
                    catch (FormatException) { }
                }
            }
            BindData();
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Response.Redirect("index.aspx");
        }

        protected void gvCaritoCompras_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {

            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);
            foreach (GridViewRow item in gvCaritoCompras.Rows)
            {
                //int cantidad = int.Parse(((TextBox)item.Cells[1].FindControl("txtCantidad")).Text);
                SqlCommand com = new SqlCommand("INSERT INTO Ventas (Libro, Usuario) " +
                                                "VALUES('" + item.Cells[0].Text + "','" + User.Identity.Name + "')", conn);
                
                conn.Open();
                com.ExecuteNonQuery();
                conn.Close();
            }
            Label1.Text = ("Compra realizada correctamente, revisa tu correo para informacion de pago y formas de entrega.");
            
        }
    }
}