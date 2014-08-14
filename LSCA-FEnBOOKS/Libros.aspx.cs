using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LSCA_FEnBOOKS
{
    public partial class Libros : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            DataSet ds = null;
            if (Session["sCart"] == null)
            {
                ds = new DataSet();
                DataTable dt = new DataTable();
                dt.Columns.Add(new DataColumn("ID_Libro", typeof(System.Int32)));
                dt.Columns.Add(new DataColumn("Titulo"));
                dt.Columns.Add(new DataColumn("Costo", typeof(System.Decimal)));
                ds.Tables.Add(dt);
                Session["sCart"] = ds;
            }
            else
            {
                ds = (DataSet)Session["sCart"];
            }
            DataRow row = ds.Tables[0].NewRow();
            row["ID_Libro"] = GridView1.Rows[GridView1.SelectedIndex].Cells[0].Text; 
            row["Titulo"] = GridView1.Rows[GridView1.SelectedIndex].Cells[1].Text;
            row["Costo"] = GridView1.Rows[GridView1.SelectedIndex].Cells[2].Text;        
            ds.Tables[0].Rows.Add(row);
        }
    }
}