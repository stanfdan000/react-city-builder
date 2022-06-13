import React from 'react';

export default function Slogan({ Slogan }) {
  return (
    <div className='slogan'>
      <p>
        {Slogan}
      </p> 
    </div>
  );
}
      

{/* this component takes in a slogan as a prop. Render it out here however you like */}