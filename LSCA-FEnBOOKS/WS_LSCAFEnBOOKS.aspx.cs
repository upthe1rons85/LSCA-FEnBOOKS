using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using LSCA_FEnBOOKS.localhost;

namespace LSCA_FEnBOOKS
{
    public partial class WS_LSCAFEnBOOKS : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            localhost.Service1 ws = new Service1();
            ws.verLibros();
            GridView1.DataSource = ws.verLibros();
            GridView1.DataBind();
        }
    }
}