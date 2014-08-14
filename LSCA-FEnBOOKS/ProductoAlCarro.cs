using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LSCA_FEnBOOKS
{
    public class ProductoAlCarro
    {
        public int Cantidad { get; set; }
        private int _IdProducto;
        private Producto _producto = null;
        public int IdProducto
        {
            get { return _IdProducto; }
            set
            {
                _producto = null;
                _IdProducto = value;
            }
        }
        public Producto Producto
        {
            get
            {
                if (_producto == null)
                {
                    _producto = new Producto(IdProducto);
                }
                return _producto;
            }
        }
        public string Descripcion
        {
            get { return Producto.Libro; }
        }
        public decimal PrecioUnitario
        {
            get { return Producto.Precio; }
        }
        public decimal Total
        {
            get { return PrecioUnitario * Cantidad; }
        }
        public ProductoAlCarro(int pId)
        {
            IdProducto = pId;
        }
        public bool Equals(ProductoAlCarro pItem)
        {
            return pItem.IdProducto == IdProducto;
        }
    }
}