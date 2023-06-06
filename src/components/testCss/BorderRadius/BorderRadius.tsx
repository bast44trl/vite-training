import React, { useState } from 'react';

import InputAndSelect from '../../InputAndSelect/InputAndSelect';
import './borderRadius.css';

export default function BorderRadius() {
  const [number, setNumber] = useState<number>(5);
  const [radiusValue, setRadiusValue] = useState<string>('px');
  const [width, setWidth] = useState<number>(200);
  const [widthValue, setWidthValue] = useState<string>('px');
  const [height, setHeight] = useState<number>(100);
  const [heightValue, setHeightValue] = useState<string>('px');
  return (
    <>
      <h1>Border Radius</h1>
      <div className="borderRadius">
        <div className="borderRadiusTest">
          <p>
            <span>border-radius = </span>{' '}
            <InputAndSelect number={number} setNumber={setNumber} value={radiusValue} setValue={setRadiusValue} />
          </p>
          <p>
            <span>width =</span>{' '}
            <InputAndSelect number={width} setNumber={setWidth} value={widthValue} setValue={setWidthValue} />
          </p>
          <p>
            <span>height =</span>{' '}
            <InputAndSelect number={height} setNumber={setHeight} value={heightValue} setValue={setHeightValue} />
          </p>
        </div>
        <div
          className="borderRadiusBox"
          style={{
            borderRadius: `${number}${radiusValue}`,
            width: `${width}${widthValue}`,
            height: `${height}${heightValue}`,
          }}
        ></div>
      </div>
    </>
  );
}
