import React, { Dispatch, SetStateAction } from 'react';

type InputAndSelectProps = {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function InputAndSelect({ number, setNumber, value, setValue }: InputAndSelectProps) {
  return (
    <>
      <input
        style={{ width: '3em', height: '15px', marginRight: '5px' }}
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <select style={{ height: '21px', borderRadius: 'none' }} value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="px">px</option>
        <option value="%">%</option>
        <option value="em">em</option>
        <option value="vh">vh</option>
        <option value="vw">vw</option>
        <option value="vmin">vmin</option>
        <option value="vmax">vmax</option>
      </select>
    </>
  );
}
