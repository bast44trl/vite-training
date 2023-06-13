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
        <div className="btn__blow">
          <span>Gonfle moi !</span>
          <span id="mtn">(Maintenir)</span>
        </div>
        <div className="ball"></div>
      </div>
      <div className="container">
        <button className="btn__boop">Transform!</button>
        <div className="box">
          <span>Boop!</span>
        </div>
      </div>
    </div>
  );
}

export default CssAnimations;
