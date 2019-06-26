import React from 'react';
import { PokemonListEntry } from './state';
import mockData from './mockData';
import { colors, typesToColors } from '../colors';

type Props = {
  pokemon: PokemonListEntry[];
};
const Component: React.FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <ul
      style={{
        textAlign: 'center'
      }}
    >
      {/* {pokemon.map(p => ( */}
      {mockData.map(p => (
        <li
          key={p.name}
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px',
            minWidth: '180px',
            backgroundColor: colors.secondary,
            border: `1px solid ${colors.previewListItemBorderColor}`
          }}
        >
          <h3 style={{ float: 'left' }}>{p.id}</h3>

          <img
            src={`pokemon-icons/${p.id}.png`}
            alt={p.name}
            style={{
              width: '100px',
              display: 'inline-block',
              margin: '20px 0'
            }}
          />

          <h2>{p.name}</h2>

          {p.types.map(t => (
            <span
              style={{
                textTransform: 'uppercase',
                margin: '10px 5px',
                display: 'inline-block',
                padding: '10px',
                borderRadius: '20px',
                color: colors.text,
                backgroundColor: typesToColors[t]
              }}
            >
              {t}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Component;
