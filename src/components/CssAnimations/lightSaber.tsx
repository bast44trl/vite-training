import React from 'react';

import './lightSaber.scss';

export default function lightSaber() {
  return (
    <div className="lightsaber-example">
      <div className="lightsaber">
        <div className="hilt">
          <div className="switch"></div>
        </div>
        <div className="plasma vader"></div>
      </div>
    </div>
  );
}
