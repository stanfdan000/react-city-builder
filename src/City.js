import React from 'react';

export default function City({ waterfrontId, SkylineId, CastleId }) {
  return (
    <div className="city">
      <img src={`/waterfront-${waterfrontId}.jpeg`} />
      <img src={`/Skyline-${SkylineId}.jpeg`} />
      <img src={`/Castle-${CastleId}.jpeg`} />
    </div>
  );
}

{/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
{/* use these 3 ids in img tags load approriate images that live in the public directory */}