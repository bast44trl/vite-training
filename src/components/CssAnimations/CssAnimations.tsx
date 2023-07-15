import React from 'react';

import LightSaber from './lightSaber';
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
      <div className="container">
        <button className="btn perspective">Perspective</button>
        <div>
          <span>perspective(150px) rotateX(45deg)</span>
        </div>
        <div>
          <span>perspective(200px) rotate3d(-1, 0.5, -0.75, -75deg)</span>
        </div>
      </div>
      <div className="container">
        <div className="btn load">Charger!</div>
        <div className="progress">
          <div className="progress__bar"></div>
        </div>
      </div>
      <div className="container">
        <div className="button3d">
          <div className="btn3d">
            <div className="btn__flip">
              <div className="btn__flip--off">OFF</div>
              <div className="btn__flip--on">ON</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <LightSaber />
      </div>
      <div className="container">
        <span>Survolez les barres rouges pour les synchroniser avec leurs équivalents verts au dessus.</span>
        <div className="loadBars">
          <div className="loadBars__bar loadBars__bar--1"></div>
          <div className="loadBars__bar loadBars__bar--2"></div>
          <div className="loadBars__bar loadBars__bar--3"></div>
          <div className="loadBars__bar loadBars__bar--4"></div>
          <div className="loadBars__bar loadBars__bar--5"></div>
        </div>
        <div className="loadBars">
          <div className="loadBars__bar loadBars__bar--1-inv"></div>
          <div className="loadBars__bar loadBars__bar--2-inv"></div>
          <div className="loadBars__bar loadBars__bar--3-inv"></div>
          <div className="loadBars__bar loadBars__bar--4-inv"></div>
          <div className="loadBars__bar loadBars__bar--5-inv"></div>
        </div>
      </div>
      <div className="container">
        <div className="spin"></div>
      </div>
    </div>
  );
}

export default CssAnimations;
