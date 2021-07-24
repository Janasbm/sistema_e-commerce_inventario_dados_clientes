import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Clientes from './pages/Clientes/clientes';
import Produtos from './pages/Produtos/produtos';
import SignUp from './pages/SignUp/SignUp';
import Menu from './pages/menu/menu';

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/clientes" exact component={Clientes} />
          <Route path="/produtos" exact component={Produtos} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;