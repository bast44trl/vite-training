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
        <div className="btn blow">
          <span>Gonfle moi !</span>
          <span id="mtn">(Maintenir)</span>
        </div>
        <div className="ball"></div>
      </div>
      <div className="container">
        <button className="btn boop">Transform!</button>
        <div className="box">
          <span>Boop!</span>
        </div>
      </div>
      <div className="container">
        <button className="btn rot">Rotate!</button>
        <div className="boxes">
          <div className="boxes__base boxes--rotDegrees">rotate (360deg)</div>
          <div className="boxes__base boxes--rotTurns">rotate (1turn)</div>
        </div>
      </div>
      <div className="container">
        <button className="btn combine">Rotate & transform!</button>
        <div>
          <span>Boop!</span>
        </div>
      </div>
      <div className="container">
        <button className="btn skew">Skew (40deg)</button>
        <div>
          <span>Skew</span>
        </div>
        <div>
          <span>SkewY</span>
        </div>
        <div>
          <span>SkewX</span>
        </div>
      </div>
    </div>
  );
}

export default CssAnimations;
