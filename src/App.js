import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Home from './Componentes/Home'
import Cadastro from './Componentes/Cadastro/Cadastro'
import CadastroDoador from './Componentes/Cadastro/CadastroDoador'
import Section from './Componentes/Section'
import Aside from './Componentes/Aside'
import HomeCadastro from './Componentes/Cadastro/HomeCadastro'

function App() {
  return (
    <BrowserRouter>
      <Route path="/Cadastre-se" component={HomeCadastro} />
      <Route path="/CadastroEscola" component={Cadastro} />
      <Route path="/CadastroDoador" component={CadastroDoador} />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Section} />
      <Route exact path="/" component={Aside} />
    </BrowserRouter>
  );
}

export default App;
