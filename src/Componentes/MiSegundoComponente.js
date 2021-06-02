import React,{Component} from 'react';

function Saludo(){
  return <h2>¿Que necesito aprender para hacer buen desarrollador react?</h2>
}

function SaludoDinamico(props){
  return <h2>Mi nombre es {props.nombre} soy aprendiz de react</h2>
}
const SaludoDinamico2=(props)=><strong> mi nombre es {props.nombre} Este proyecto trabajara con el Back end en {props.back}</strong>

class SaludoDinamico3 extends Component{
  render(){
    return <h2>Facturas realizadas con el RFC {this.props.rfc}</h2>
  }
}

class MiSegundoComponente extends Component{

  render(){
    return (
      <SaludoDinamico3 rfc="CMSDSD1545"/>
    );
  }
}

export default MiSegundoComponente;
