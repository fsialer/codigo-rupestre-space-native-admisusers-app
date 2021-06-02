import React,{Component} from 'react';

class Venta extends Component{
  render(){
    const {
      cliente,
      pais,
      precio,
      celular,
      producto,
      envioDomicilio,
      direccionEntrega,
      accesorios,
      precioAccesorios,
      datosfactura
    }=this.props;



    const informacionEntrega=envioDomicilio?'Se entregara a domicilio':'Se entregara en sucursal';
    var precioIVA;
    if(pais==='Mexico'){
      precioIVA=precio*.16;
    }else if (pais==='Peru'){
      precioIVA=precio*.19;
    }
    return (
      <div>
      <center>
        Cliente: {cliente}<br/>
        Celular: {celular}<br/>
        Pais: {pais}<br/>
        Producto: {producto}<br/>
        Precio: {precio}<br/>
        ================= Precios con IVA =========================<br/>
        Precios IVA: {precioIVA}<br/>

        Envia a Domicilio: {informacionEntrega}<br/>
        Envia a Domicilio:{JSON.stringify(envioDomicilio)}<br/>
        Direccion de Entrega:{direccionEntrega}<br/>

        Accesorios: {accesorios.join(', ')}<br/>
        Precios sin IVA: {precioAccesorios.join('-')}<br/>

        ================= DATOS PARA FACTURA ========<br/>
          Razon Social: {datosfactura.razonSocial}<br/>
          RFC: {datosfactura.rfc}<br/>
          Email: {datosfactura.email}<br/>
      </center>

      </div>
    )
  }
}

Venta.defaultProps={
  pais:'Producto sin pais asignado',
  producto:'Pedido sin producto',
  direccionEntrega:'Pedido no tiene direccion de entrega'
}

class Pedidos extends Component{
  render(){
    return (
      <Venta
      cliente="Juan"
      celular="989565415"
      pais="Peru"
      producto="Silla Gamer Ergonomica 2"
      precio={1000}
      envioDomicilio={true}
      direccionEntrega="Av. independencia 965"
      accesorios={['Almohadas',"Cojin","Alfombra de mouse"]}
      precioAccesorios={[10,20,30]}
      datosfactura={{rfc:'CAME2365454TR',razonSocial:'carpinteria perez',email:"cperez@yt.com"}}
      />
    )
  }
}

export default Pedidos;
