using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

namespace LSCA_FEnBOOKS
{
    public partial class Carrito : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            GridView1.DataSource = (DataSet)Session["sCart"];
            GridView1.DataBind();
        }

        protected void btnComprar_Click(object sender, EventArgs e)
        {

            int id = Int32.Parse(GridView1.SelectedRow.Cells[0].Text);
            string libro = "SELECT Titulo FROM Libros WHERE ID_Libro='" + id + "'";
            string query;
            query = "INSERT INTO Ventas (Libro, Usuario) VALUES (@Libro, @Usuario)";

            using (SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString))
            using (SqlCommand command = new SqlCommand(query, conn))
            using (SqlCommand command1 = new SqlCommand(libro, conn))
            {
                conn.Open();
                command1.CommandType = CommandType.Text;
                libro = command1.ExecuteScalar().ToString();
                command.Parameters.Add("@Libro", SqlDbType.VarChar, 50).Value = libro;
                command.Parameters.Add("@Usuario", SqlDbType.VarChar, 50).Value = User.Identity.Name;
                command.ExecuteNonQuery();
                conn.Close();
            }
        }
    }
}