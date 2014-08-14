using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.Services.Description;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Security.Cryptography;
using System.Text;
using System.Windows.Forms;

namespace LSCA_FEnBOOKS
{
    public partial class Login : System.Web.UI.Page
    {
        int Filas;
        String usu;
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            string email = TextBox3.Text;
            string userName = TextBox4.Text;
            string password = TextBox5.Text;
            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);
            SqlCommand cmd = new SqlCommand("INSERT INTO Usuario(Email, Usuario, Password) VALUES (@email, @userName, @Password)", conn);
            cmd.CommandType = CommandType.Text;
            cmd.Parameters.AddWithValue("@email", email);
            cmd.Parameters.AddWithValue("@userName", userName);
            cmd.Parameters.AddWithValue("@Password", password);
            using (conn)
            {
                conn.Open();
                cmd.ExecuteNonQuery();
            }        
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
           
            if (Autentificar(TextBox1.Text, TextBox2.Text))
            {
                if (Filas == 1)
                {
                    FormsAuthentication.RedirectFromLoginPage(TextBox1.Text, chkPersistLogin.Checked);
                    Session["Usuario"] = TextBox1.Text;
                }
                else
                {
                    Response.Redirect("Login.aspx");
                }        
            }
            
        }
        private bool Autentificar(string usuario, string password)
        {
            string sql = "SELECT Usuario, Password FROM Usuario WHERE Usuario = @userName AND Password = @Password";
            SqlDataReader Dr;        
            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);
            {
                conn.Open();
                SqlCommand command = new SqlCommand(sql, conn);
                command.Parameters.AddWithValue("@userName", usuario);
                command.Parameters.AddWithValue("@Password", password);
                Dr = command.ExecuteReader();
                Filas = Convert.ToInt32(Dr.HasRows);
                if (Dr.Read())
                    usu = Convert.ToString(Dr[1]);
                conn.Close();
                Dr.Close();
                return true;
            }
            
        }
        
    }
}