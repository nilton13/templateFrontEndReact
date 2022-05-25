import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Cadastro } from '../pages/Cadastro';
import { Clientes } from '../pages/Clientes';
import { Gestao } from '../pages/Gestao';
import { Home } from '../pages/Home';

export const Routes:React.FC = () => {
  return (
    <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={Cadastro} path="/cadastro"/>
        <Route component={Gestao} path="/gestao"/>
    </Switch>
  );
}
