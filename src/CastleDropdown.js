import React from 'react';

export default function CastleDropdown(props) {
  return (
    <div>
      Select a Castle
      <select onChange={e => props.setCastle(e.target.value)}>
        <option value="1">Serious</option>
        <option value="2">Mysterious</option>
        <option value="3">Regal</option>
      </select>
    </div>
  );
}
{/* this component should have a prop called setCastle, which is a function */}
{/* on change, this component should use e.target.value to pass the correct id to the setCastle function */}
{/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
