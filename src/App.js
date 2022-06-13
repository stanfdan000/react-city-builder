import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  const [slogans, setSlogans] = useState([]);
  const [cityName, setCityName] = useState('spokane');
  const [castleId, setCastle] = useState(1);
  const [waterfrontId, setWaterfront] = useState(1);
  const [skylineId, setSkyline] = useState(1);


  return (
    <div className="App">
      <City SkylineId={skylineId} 
        waterfrontId={waterfrontId} 
        CastleId={castleId} 
      />
      <h1>
        Welcome to beautiful Portland! {cityName}
      </h1>
      <div className='bottom'>
        <CityNameInput setCityName={setCityName} />
        <section className='dropDowns'>
          <WaterfrontDropdown setWaterfront={setWaterfront} />
          <SkylineDropdown setSkyline={setSkyline} />
          <CastleDropdown setCastle={setCastle} />
        </section>
        <SloganForm setSlogans={setSlogans} slogans={slogans} />
        <SloganList slogans={slogans} />
      </div>
8    </div>
  );
}

export default App;

{/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
{/* here, the SloganList component takes the array of slogans that lives in state */}
{/* dynamically update the city name here using state */}
{/* here, the City component takes in skylineId, waterfrontId, castleId as prowps. It'll use those ids to render pictures correctly. */}
{/* here, the CityNameInput component takes in the setCityName state handler function */}
{/* 
render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 

In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
*/}
// track some state here.
// You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
// you'll need to track a city name, which starts as the city name of your choice.
// finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example