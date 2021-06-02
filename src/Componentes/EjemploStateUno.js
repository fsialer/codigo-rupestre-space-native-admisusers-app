import React,{Component} from 'react';

class RegistrarVenta extends Component{
  constructor(){
    super();
    this.state={existencias:865}
  }

  registrarVenta=(e)=>{
    this.setState({existencias:this.state.existencias-1})
  }
  render(){
    const existencias=20;
    return(
        <div>
          <strong>Existencias del producto: {this.state.existencias}</strong>
          <button onClick={this.registrarVenta}>Realizar Venta</button>
        </div>
    )
  }
}


class EjemploStateUno extends Component {
  render(){
    return (
      <div>
        <p>Existencia de productos</p>
        <RegistrarVenta/>
      </div>
    )
  }
}

export default EjemploStateUno;
