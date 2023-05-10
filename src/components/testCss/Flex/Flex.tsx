import React, { useState, useEffect } from 'react';

import './flex.css';

type FlexDirection =
  | 'column'
  | 'inherit'
  | '-moz-initial'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'
  | undefined;

type Styles = {
  flexDirection: FlexDirection;
  alignItems: string;
  justifyContent: string;
};

type Boxes = {
  alignSelf: string;
  background: string;
};

export default function Flex() {
  const [flexDirectionValue, setFlexDirectionValue] = useState<FlexDirection>('row');
  const [justifyContentValue, setJustifyContentValue] = useState<string>('flex-start');
  const [alignItemsValue, setAlignItemsValue] = useState<string>('flex-start');
  const [alignSelfPosition, setAlignSelfPosition] = useState<string>('flex-start');
  const [boxesToSelfAlign, setBoxesToSelfAlign] = useState<number[]>([]);

  const boxes: Boxes[] = [
    { alignSelf: 'auto', background: 'brown' },
    { alignSelf: 'auto', background: 'lightgrey' },
    { alignSelf: 'auto', background: 'lightgreen' },
    { alignSelf: 'auto', background: 'lightcyan' },
    { alignSelf: 'auto', background: 'gold' },
  ];

  function onAlignSelfValueChange(index: number) {
    const indexNumber: number = index;
    if (boxesToSelfAlign.length > 0 && boxesToSelfAlign.includes(indexNumber)) {
      boxes[indexNumber].alignSelf = 'auto';
      const updated: number[] = boxesToSelfAlign.filter((num: number) => num !== indexNumber);
      setBoxesToSelfAlign(updated);
    } else {
      setBoxesToSelfAlign([...boxesToSelfAlign, indexNumber]);
    }
  }

  function onAlignSelfPositionChange(position: string) {
    setAlignSelfPosition(() => position);
  }
  useEffect(() => {
    handleAlignSelf();
  }, [alignSelfPosition, boxesToSelfAlign]);

  function handleAlignSelf() {
    boxesToSelfAlign.forEach((box) => (boxes[box].alignSelf = alignSelfPosition));
    return boxesToSelfAlign;
  }

  const styles: Styles = {
    flexDirection: flexDirectionValue,
    justifyContent: justifyContentValue,
    alignItems: alignItemsValue,
  };

  return (
    <div className="flexContainer">
      <h1>FlexBox</h1>
      <p>
        <span>flex-direction = </span>{' '}
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setFlexDirectionValue(e.target.value as FlexDirection);
          }}
        >
          <option value="row">row</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column-reverse</option>
        </select>
        <span>justify-content = </span>{' '}
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setJustifyContentValue(e.target.value)}>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
        <span>align-items = </span>{' '}
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAlignItemsValue(e.target.value)}>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="stretch">stretch</option>
          <option value="baseline">baseline</option>
        </select>
      </p>
      <div className="selfAlignDiv">
        <span>align-self = </span>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            onAlignSelfPositionChange(e.target.value);
          }}
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="self-start">self-start</option>
          <option value="self-end">self-end</option>
        </select>
        {boxes.map((b: Boxes, i: number) => (
          <label key={i} htmlFor={`box${i}`} style={{ marginRight: '10px' }}>
            <input
              name={`box${i}`}
              value={i}
              type={'checkbox'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onAlignSelfValueChange(parseInt(e.target.value))}
            />
            {`Box ${i + 1}`}
          </label>
        ))}
      </div>
      <div className="boxesContainer" style={styles}>
        {boxes.map((box: Boxes, i: number) => {
          return (
            <div
              key={i}
              className="smallBox"
              style={{
                background: box.background,
                alignSelf: boxesToSelfAlign.includes(i) ? alignSelfPosition : alignItemsValue,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
