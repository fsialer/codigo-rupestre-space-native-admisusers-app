import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MiPrimerComponente from './Componentes/MiPrimerComponente';
import MiSegundoComponente from './Componentes/MiSegundoComponente';
import Pedidos from './Componentes/Pedidos';
import Catalogo from './Componentes/Catalogo';
import ClaseDosEjercicioUno from './Componentes/ClaseDosEjercicioUno';
import EjemploStateUno from './Componentes/EjemploStateUno';
import CambiarColor from './Componentes/CambiarColor';

ReactDOM.render(
  <React.StrictMode>
    <CambiarColor />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
