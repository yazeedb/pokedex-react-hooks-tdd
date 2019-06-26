import React from 'react';
import { actions, reducer, initialState } from './state';
import Header from '../Header';
import Component from './component';

const pokemonEntriesUrl = 'https://api.myjson.com/bins/b0rue';

const PokemonList = () => {
  const pageTitle = 'All Pokemon';
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // fetch(pokemonEntriesUrl)
    //   .then(res => res.json())
    //   .then(pokemon => {
    //     dispatch(
    //       actions.success({
    //         message: 'Success!',
    //         pokemon
    //       })
    //     );
    //   });
  }, []);

  return (
    <div className="pokemon-list">
      <Header title={pageTitle} />
      <Component pokemon={state.pokemon} />
    </div>
  );
};

export default PokemonList;
