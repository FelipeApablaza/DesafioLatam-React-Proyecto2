import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './views/Home'
import Authentication from './views/NotLogged/Authentication'
import Episodes from './views/Logged/Episodes/Episodes'
import Characters from './views/Logged/Characters/Characters'
import SimilarTastes from './views/Logged/SimilarTastes/SimilarTastes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/authentication' component={Authentication} />
          <Route exact={true} path='/episodes' component={Episodes} />
          <Route exact={true} path='/characters' component={Characters} />
          <Route exact={true} path='/tastes' component={SimilarTastes} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// Campos Episodios : id, nombre, al aire
// Campos Personajes: nombre, status, especie, genero e imagen