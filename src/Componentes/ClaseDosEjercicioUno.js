import React,{Component} from 'react';

class ClaseDosEjercicioUno extends Component{


enviarMensaje(){
  alert('Hola desde una funcion');
}

obtenerUsuariosMicroServicio(){
  fetch('http://localhost:8280/api/v1/usuario')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
}

descargarArchivos(){
  fetch('facturacion_back_2.test:8081/v1/download-zip-cpe').then(res=>res.json()).then(data=>{
    console.log(data);
  });
}
  render(){
    return(
      <div>
        <h4>Obtener usuarios registrados en la base de Fernando Sialer</h4>
        <button onClick={this.obtenerUsuariosMicroServicio}>Obtener usuarios</button>

      </div>
    );
  }
}

export default ClaseDosEjercicioUno;
