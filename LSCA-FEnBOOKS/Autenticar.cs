using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Security.Cryptography;
using System.Text;

namespace LSCA_FEnBOOKS
{
    public class Autenticar
    {
        private bool Autentificar(string usuario, string password)
        {
            string sql = "SELECT Usuario, Contraseña FROM Usuario WHERE Usuario = @userName AND Contraseña = @Password";

            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);

            {
                conn.Open();

                SqlCommand command = new SqlCommand(sql, conn);
                command.Parameters.AddWithValue("@userName", usuario);

                MD5CryptoServiceProvider md5Hasher = new MD5CryptoServiceProvider();
                Byte[] hashedBytes;
                UTF8Encoding encoder = new UTF8Encoding();
                hashedBytes = md5Hasher.ComputeHash(encoder.GetBytes(password));
                command.Parameters.AddWithValue("@Password", hashedBytes);
            }

                //int count = Convert.ToInt32(command.ExecuteScalar());

                //if (count == 0)
                //    return false;
                //else
                   return true;
        }

    }
}