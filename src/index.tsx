import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from './PokemonList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route
            exact
            path="/pokemon/:id"
            component={() => <h1>Page two!</h1>}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
