using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;

namespace LSCA_FEnBOOKS
{
    public class Producto
    {
        public int Id { get; set; }
        public decimal Precio { get; set; }
        public string Libro { get; set; }
        public Producto(int pId)
        {           
            string query;
            SqlConnection conn = new SqlConnection(WebConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);
            //query = "SELECT Titulo FROM Libros WHERE ID_Libro='" + Id + "'";
            SqlCommand command;
            ////command = new SqlCommand(query, conn);
            //command.CommandType = CommandType.Text;
            conn.Open();
            //Id = Convert.ToInt32(command.ExecuteScalar());
            Id = pId;
            switch (pId)
            {
                case 1:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=1";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();                    
                    Precio = 299.00m;
                    break;
                case 2:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=2";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 399.00m;
                    break;
                case 3:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=3";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 230.00m;
                    break;
                case 4:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=4";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 275.00m;
                    break;
                case 5:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=5";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 395.00m;
                    break;
                case 6:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=6";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 230.00m;
                    break;
                case 7:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=7";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 129.0m;
                    break;
                case 8:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=8";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 263.00m;
                    break;
                case 9:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=9";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 950.00m;
                    break;
                case 10:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=10";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 379.00m;
                    break;
                case 11:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=11";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 120.00m;
                    break;
                case 12:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=12";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 390.00m;
                    break;
                case 13:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=13";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 129.00m;
                    break;
                case 14:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=14";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 299.00m;
                    break;
                case 15:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=15";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 199.00m;
                    break;
                case 16:
                     query = "SELECT Titulo FROM Libros WHERE ID_Libro=16";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 45.00m;
                    break;
                case 17:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=17";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 158.00m;
                    break;
                case 18:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=18";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 194.00m;
                    break;
                case 19:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=19";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 56.00m;
                    break;
                case 20:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=20";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 332.00m;
                    break;
                case 21:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=21";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 72.00m;
                    break;
                case 22:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=22";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 229.00m;
                    break;
                case 23:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=23";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 92.00m;
                    break;
                case 24:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=24";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 72.00m;
                    break;
                case 25:
                     query = "SELECT Titulo FROM Libros WHERE ID_Libro=25";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 120.00m;
                    break;
                case 26:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=26";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 209.00m;
                    break;
                case 27:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=27";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 208.00m;
                    break;
                case 28:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=28";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 250.00m;
                    break;
                case 29:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=29";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 399.00m;
                    break;
                case 30:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=30";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 159.00m;
                    break;
                case 31:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=31";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 70.00m;
                    break;
                case 32:
                       query = "SELECT Titulo FROM Libros WHERE ID_Libro=32";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 45.00m;
                    break;
                case 33:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=33";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 47.00m;
                    break;
                case 34:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=34";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 80.00m;
                    break;
                case 35:
                      query = "SELECT Titulo FROM Libros WHERE ID_Libro=35";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 99.00m;
                    break;
                case 36:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=36";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 108.00m;
                    break;
                case 37:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=37";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 200.00m;
                    break;
                case 38:
                        query = "SELECT Titulo FROM Libros WHERE ID_Libro=38";                   
                    command = new SqlCommand(query, conn);              
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose(); 
                    Precio = 62.00m;
                    break;
                case 39:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=39";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 245.00m;
                    break;
                case 40:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=40";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 199.00m;
                    break;
                case 41:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=41";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 300.00m;
                    break;
                case 42:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=42";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 200.00m;
                    break;
                case 43:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=43";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 122.00m;
                    break;
                case 44:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=44";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 299.00m;
                    break;
                case 45:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=45";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 350.00m;
                    break;
                case 46:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=46";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 167.00m;
                    break;
                case 47:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=47";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 180.00m;
                    break;
                case 48:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=48";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 190.00m;
                    break;
                case 49:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=49";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 120.00m;
                    break;
                case 50:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=50";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 700.00m;
                    break;
                case 51:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=51";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 350.00m;
                    break;
                case 52:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=52";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 82.00m;
                    break;
                case 53:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=53";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 92.00m;
                    break;
                case 54:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=54";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 205.00m;
                    break;
                case 55:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=55";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 222.00m;
                    break;
                case 56:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=56";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 122.00m;
                    break;
                case 57:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=57";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 300.00m;
                    break;
                case 58:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=58";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 93.00m;
                    break;
                case 59:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=59";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 89.00m;
                    break;
                case 60:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=60";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 345.00m;
                    break;
                case 61:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=61";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 278.00m;
                    break;
                case 62:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=62";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 249.00m;
                    break;
                case 63:
                    query = "SELECT Titulo FROM Libros WHERE ID_Libro=63";
                    command = new SqlCommand(query, conn);
                    command.CommandType = CommandType.Text;
                    Libro = command.ExecuteScalar().ToString();
                    command.Dispose();
                    Precio = 235.00m;
                    break;
            }
            conn.Close();
        }
    }
}