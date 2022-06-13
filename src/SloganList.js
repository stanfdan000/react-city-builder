import React from 'react';
import Slogan from './Slogan';
export default function SloganList({ slogans }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      {slogans.map((slogan, i) => 
        <Slogan Slogan={slogan} key={slogan + i} 
        />)}
    </section>
  );
}

