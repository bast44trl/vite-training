import React from 'react';

import './cssAnimations.scss';

function CssAnimations() {
  return (
    <div className="css-animations-page">
      <h1>CssAnimations</h1>
      <div className="container">
        <div className="form">
          <div className="form__group">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="btn">Gonfle moi !</div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

export default CssAnimations;
