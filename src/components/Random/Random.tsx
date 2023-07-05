import React, { useState, useEffect } from 'react';

import './random.scss';

const Random: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const number = 68;
  const duration = 3;
  let cssInterval: number;
  useEffect(() => {
    if (counter >= number) {
      return;
    }
    cssInterval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, (duration / number) * 800);
    return () => {
      clearInterval(cssInterval);
    };
  }, [counter]);

  return (
    <div className="random">
      <div className="random__container">
        <ul className="courses">
          <li className="courses__course">
            <div className="courses__course__name">
              <div>Créez des animations CSS modernes</div>
            </div>
            <div className="courses__course__progress">
              <div className={`courses__course__progress__bar`}>
                <span>{counter}%</span>
                <style>{`@keyframes loading {
                    to {
                      transform: translateX(-${100 - number}%);
                      opacity: 1;
                    }
                  }`}</style>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Random;
