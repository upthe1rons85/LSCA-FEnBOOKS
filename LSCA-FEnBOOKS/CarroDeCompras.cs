using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LSCA_FEnBOOKS
{
    public class CarroDeCompras
    {
        public List<ProductoAlCarro> ListaProductos { get; private set; }
        public static CarroDeCompras CapturarProducto()
        {
            CarroDeCompras _carrito = (CarroDeCompras)HttpContext.Current.Session["ASPCarroDeCompras"];
            if (_carrito == null)
            {
                HttpContext.Current.Session["ASPCarroDeCompras"] = _carrito = new CarroDeCompras();
            }
            return _carrito;
        }
        protected CarroDeCompras()
        {
            ListaProductos = new List<ProductoAlCarro>();
        }
        public void Agregar(int pIdProducto)
        {
            ProductoAlCarro NuevoProducto = new ProductoAlCarro(pIdProducto);
            if (ListaProductos.Contains(NuevoProducto))
            {
                foreach (ProductoAlCarro item in ListaProductos)
                {
                    if (item.Equals(NuevoProducto))
                    {
                        item.Cantidad++;
                        return;
                    }
                }
            }
            else
            {
                NuevoProducto.Cantidad = 1;
                ListaProductos.Add(NuevoProducto);
            }
        }
        public void EliminarProductos(int pIdProducto)
        {
            ProductoAlCarro eliminaritems = new ProductoAlCarro(pIdProducto);
            ListaProductos.Remove(eliminaritems);
        }
        public void CantidadDeProductos(int pIdProducto, int pCantidad)
        {
            if (pCantidad == 0)
            {
                EliminarProductos(pIdProducto);
                return;
            }
            ProductoAlCarro updateProductos = new ProductoAlCarro(pIdProducto);
            foreach (ProductoAlCarro item in ListaProductos)
            {
                if (item.Equals(updateProductos))
                {
                    item.Cantidad = pCantidad;
                    return;
                }
            }
        }
        public decimal SubTotal()
        {
            decimal subtotal = 0;
            foreach (ProductoAlCarro item in ListaProductos)
            {
                subtotal += item.Total;
            }
            return subtotal;
        }
    }
}