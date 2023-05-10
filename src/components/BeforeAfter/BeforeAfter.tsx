import React, { ReactNode, useState } from 'react';

import InputAndSelect from '../inputAndSelect/InputAndSelect';
import './beforeAfter.css';

type CssLineProps = {
  property: string;
  value: string | ReactNode;
};

function CssLine({ property, value }: CssLineProps) {
  return (
    <p style={{ marginBottom: '-1em' }}>
      <span className="blueText">{property} </span>
      <span className="whiteText">:</span> <span className="orangeText">{value}</span>
      <span className="whiteText">;</span>
    </p>
  );
}

/* const buttonCss = {
  background: 'none',
  position: 'relative',
  display: 'block',
  padding: '2vw',
  fontSize: '4em',
  fontFamily: 'lato',
  textDecoration: 'none',
  border: '2px solid',
  border-color: #45a29e,
  color: #45a29e,
  text-align: center,
  border-radius: 50px,
  text-transform: uppercase,
  overflow: hidden,
  transition: 0.5s all ease,
} */

export default function BeforeAfter() {
  const [fontSizeNumber, setFontSizeNumber] = useState<number>(4);
  const [fontSizeValue, setFontSizeValue] = useState<string>('em');
  const [paddingNumber, setPaddingNumber] = useState<number>(4);
  const [paddingValue, setPaddingValue] = useState<string>('px');
  const [borderRadiusNumber, setBorderRadiusNumber] = useState<number>(40);
  const [borderRadiusValue, setBorderRadiusValue] = useState<string>('px');

  return (
    <div className="body" id="body">
      <div className="css">
        <p className="goldenText">{`.btn {`}</p>
        <CssLine property="background" value="none" />
        <CssLine property="position" value="relative" />
        <CssLine property="display" value="block" />
        <CssLine
          property="padding"
          value={
            <InputAndSelect
              number={paddingNumber}
              setNumber={setPaddingNumber}
              value={paddingValue}
              setValue={setPaddingValue}
            />
          }
        />
        <CssLine
          property="font-size"
          value={
            <InputAndSelect
              number={fontSizeNumber}
              setNumber={setFontSizeNumber}
              value={fontSizeValue}
              setValue={setFontSizeValue}
            />
          }
        />
        <CssLine property="font-family" value="lato" />
        <CssLine property="text-decoration" value="none" />
        <CssLine property="border-color" value="#45a29e" />
        <CssLine property="color" value="#45a29e" />
        <CssLine property="text-align" value="center" />
        <CssLine
          property="border-radius"
          value={
            <InputAndSelect
              number={borderRadiusNumber}
              setNumber={setBorderRadiusNumber}
              value={borderRadiusValue}
              setValue={setBorderRadiusValue}
            />
          }
        />
        <CssLine property="border" value="2px solid" />
      </div>
      <div className="centre">
        <a
          href="#body"
          className="btn"
          style={{
            fontSize: `${fontSizeNumber}${fontSizeValue}`,
            padding: `${paddingNumber}${paddingValue}`,
            borderRadius: `${borderRadiusNumber}${borderRadiusValue}`,
          }}
        >
          Survol
        </a>
      </div>
    </div>
  );
}
