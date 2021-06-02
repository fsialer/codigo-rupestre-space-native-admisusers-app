import React,{Component} from 'react';

class Producto extends Component{

  render(){
    const items=[];

    return (
    <div>
      <h1>Categoria: {this.props.categoria}</h1>
      {this.props.items.map((value, index) => {
        if(value.categoria==this.props.categoria){
          return <div>
            <h3>{value.nombre}</h3>
            <p>stock: {value.stock}</p>
            <p>Precio: {value.precio}</p>
            <p>Descripcion: {value.descripcion}</p>
          </div>
        }
      })}
    </div>
  )

  }
}

Producto.defaultProps={
  categoria:'No existe categoria'
}

class Catalogo extends Component{
  render(){
    return(
      <Producto
      categoria='tecnologia'
      items={[{'nombre':'Zapatilla adidas','stock':96,'precio':5.5,'descripcion':'Zapatilla deportivas.','categoria':'deportivo'},
            {'nombre':'Buso completo adidas','stock':54,'precio':154,'descripcion':'Buso de uso deportivo.','categoria':'deportivo'},
            {'nombre':'Celular LG K22','stock':40,'precio':450,'descripcion':'Celular LG K22 con 24GB de almacenamineto y 3GB de RAM.','categoria':'tecnologia'},
            {'nombre':'TV LG 4K','stock':40,'precio':2690,'descripcion':'tv LG 4k con torres de parlantes.','categoria':'tecnologia'},
            {'nombre':'TABLET LENOVO YJAS44','stock':40,'precio':2690,'descripcion':'TABLET LENOVO YJAS44 DE 15 PULGADAS DE 18GB DE ALMACENAMIENTO Y 8GB DE RAM.','categoria':'tecnologia'}
      ]}/>
    );
  }
}

export default Catalogo;
