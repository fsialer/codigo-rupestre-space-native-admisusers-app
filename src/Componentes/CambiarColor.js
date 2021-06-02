import React,{Component} from 'react';

class Color extends Component{

  constructor(){
      super();
      this.state={color:'red'}
  }

  cambiarColor=(e)=>{
    this.setState({color:this.state.color==='red'?'blue':'red'})
  }

  render(){
    const divStyle = {
      color: this.state.color
    };
    return(
      <div>
        <h1 style={divStyle}>Este es un pequeño ejercicio con state</h1>
        <button onClick={this.cambiarColor}>Cambiar a color</button>
      </div>

    );
  }
}

class CambiarColor extends Component{

  render(){
    return(
      <Color/>
    )
  }
}

export default CambiarColor;
