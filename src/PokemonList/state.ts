import { FetchStatuses } from '../FetchStatuses';

const actionTypes = {
  fetch: 'FETCH-POKEMON',
  error: 'FETCH-ERROR',
  success: 'FETCH-SUCCESS',
  reset: 'RESET'
};

export type PokemonListEntry = {
  id: number;
  name: string;
  types: string[];
};

export type SuccessPayload = {
  pokemon: PokemonListEntry[];
  message: string;
};

export const actions = {
  fetch: () => ({
    type: actionTypes.fetch
  }),
  error: (message: string) => ({
    type: actionTypes.error,
    payload: message
  }),
  success: (payload: SuccessPayload) => ({
    type: actionTypes.success,
    payload
  }),
  reset: () => ({
    type: actionTypes.reset
  })
};

export const initialState = {
  status: FetchStatuses.fetching,
  message: 'Gotta fetch èm all!',
  pokemon: []
};

export type State = typeof initialState;

export const reducer = (state = initialState, action): State => {
  switch (action.type) {
    case actionTypes.fetch:
      return {
        ...state,
        status: FetchStatuses.fetching,
        message: initialState.message
      };

    case actionTypes.error:
      return {
        ...state,
        status: FetchStatuses.error,
        message: action.payload
      };

    case actionTypes.success:
      return {
        ...state,
        ...action.payload,
        status: FetchStatuses.success
      };

    case actionTypes.reset:
      return initialState;

    default:
      return state;
  }
};
