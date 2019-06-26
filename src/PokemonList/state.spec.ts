import { actions, reducer, SuccessPayload } from './state';
import { FetchStatuses } from '../FetchStatuses';

describe('PokemonList state', () => {
  it('initializes in a loading state, with a message and no pokemon', () => {
    const initialState = reducer(undefined, {});

    expect(initialState).toEqual({
      status: FetchStatuses.fetching,
      message: 'Gotta fetch èm all!',
      pokemon: []
    });
  });

  it('can report fetch errors', () => {
    const errorMessage = 'Oops!';
    const state = reducer(undefined, actions.error(errorMessage));

    expect(state).toEqual({
      status: FetchStatuses.error,
      message: errorMessage,
      pokemon: []
    });
  });

  it('can report fetch success', () => {
    const payload: SuccessPayload = {
      message: 'Success!',
      pokemon: []
    };
    const state = reducer(undefined, actions.success(payload));

    expect(state).toEqual({
      status: FetchStatuses.success,
      ...payload
    });
  });

  it('can reset to initial state', () => {
    const successState = reducer(undefined, actions.error('Error!'));
    const resetState = reducer(successState, actions.reset());
    const initialState = reducer(undefined, {});

    expect(resetState).toEqual(initialState);
  });
});
