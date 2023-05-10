import React, { useState } from 'react';

import './calculateSalary.css';

export default function CalculateSalary() {
  const [brut, setBrut] = useState(0);
  const [yearBrut, setYearBrut] = useState(0);

  function calculateBrut(value: number) {
    if (isNaN(value)) {
      setBrut(0);
    } else setBrut(value);
  }
  function calculateMonth(value: number) {
    if (isNaN(value)) {
      setYearBrut(0);
    } else setYearBrut(value);
  }

  return (
    <div className="salary">
      <div className="salary-sections-container" id="salary">
        <h1>Cacculate your salary</h1>
        <section className="month">
          <div>
            Brut = <input min={0} value={brut} onChange={(e) => calculateBrut(parseInt(e.target.value))}></input>
          </div>
          <div>
            Net = <span>{brut - (22 * brut) / 100}</span>
          </div>
          <div>
            Brut Yearly = <span>{brut * 12}</span>
          </div>
          <div>
            Net Yearly = <span>{(brut - (22 * brut) / 100) * 12}</span>
          </div>
        </section>
        <section className="year">
          <div>
            Yearly Brut ={' '}
            <input min={0} value={yearBrut} onChange={(e) => calculateMonth(parseInt(e.target.value))}></input>
          </div>
          <div>
            Yearly Net = <span>{yearBrut - (22 * yearBrut) / 100}</span>
          </div>
          <div>
            Monthly Brut = <span>{yearBrut / 12}</span>
          </div>
          <div>
            Monthly Net = <span>{(yearBrut - (22 * yearBrut) / 100) / 12}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
