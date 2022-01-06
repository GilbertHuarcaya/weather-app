import React, { useEffect } from 'react';
import Svgs from './components/Svgs';
import './App.scss';

function App() {
  const daysOfWeekMap = {
    0: 'SUN',
    1: 'MON',
    2: 'TUES',
    3: 'WED',
    4: 'THUR',
    5: 'FRI',
    6: 'SAT',
  };
  const setValue = (e, value) => {
    e.innerHTML = value;
  };
  useEffect(() => {
    const keys = document.querySelectorAll('div .day-of-week');
    keys.forEach((key, index) => {
      setValue(key, daysOfWeekMap[(new Date().getDay() + index) % 7]);
    });
  }, []);
  useEffect(() => {
    const keys = document.querySelectorAll('div .date');
    keys.forEach((key, index) => {
      setValue(key, (new Date(new Date().setDate(new Date().getDate() + index))).getDate());
    });
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="day">
          <div className="day-of-week" />
          <div className="date" />
          <div className="bar cloudy">
            <div className="weather">
              <svg role="img">
                <use
                  xlinkHref="#cloudy"
                  width={264}
                  height={166}
                  viewBox="0 0 264 166"
                />
              </svg>
            </div>
            <div className="temperature">
              72
              <span className="degrees">°</span>
            </div>
            <div className="content">
              <div className="precipitation">
                <svg role="img" className="icon">
                  <use xlinkHref="#precipitation" />
                </svg>
                84%
              </div>
              <div className="low">
                <svg role="img" className="icon">
                  <use xlinkHref="#low" />
                </svg>
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day-of-week" />
          <div className="date" />
          <div className="bar sunny">
            <div className="weather">
              <svg role="img" width={208} height={213} viewBox="0 0 208 213">
                <use xlinkHref="#sunny" />
              </svg>
            </div>
            <div className="temperature">
              65
              <span className="degrees">°</span>
            </div>
            <div className="content">
              <div className="precipitation">
                <svg role="img" className="icon">
                  <use xlinkHref="#precipitation" />
                </svg>
                84%
              </div>
              <div className="low">
                <svg role="img" className="icon">
                  <use xlinkHref="#low" />
                </svg>
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day-of-week" />
          <div className="date" />
          <div className="bar stormy">
            <div className="weather">
              <svg role="img" width={246} height={187} viewBox="0 0 246 187">
                <use xlinkHref="#stormy" />
              </svg>
            </div>
            <div className="temperature">
              67
              <span className="degrees">°</span>
            </div>
            <div className="content">
              <div className="precipitation">
                <svg role="img" className="icon">
                  <use xlinkHref="#precipitation" />
                </svg>
                84%
              </div>
              <div className="low">
                <svg role="img" className="icon">
                  <use xlinkHref="#low" />
                </svg>
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day-of-week" />
          <div className="date" />
          <div className="bar snowy">
            <div className="weather">
              <svg role="img" width={230} height={196} viewBox="0 0 230 196">
                <use xlinkHref="#snowy" />
              </svg>
            </div>
            <div className="temperature">
              32
              <span className="degrees">°</span>
            </div>
            <div className="content">
              <div className="precipitation">
                <svg role="img" className="icon">
                  <use xlinkHref="#precipitation" />
                </svg>
                84%
              </div>
              <div className="low">
                <svg role="img" className="icon">
                  <use xlinkHref="#low" />
                </svg>
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day-of-week" />
          <div className="date" />
          <div className="bar partly-cloudy">
            <div className="weather">
              <svg role="img" width={230} height={209} viewBox="0 0 230 209">
                <use xlinkHref="#partly-cloudy" />
              </svg>
            </div>
            <div className="temperature">
              57
              <span className="degrees">°</span>
            </div>
            <div className="content">
              <div className="precipitation">
                <svg role="img" className="icon">
                  <use xlinkHref="#precipitation" />
                </svg>
                84%
              </div>
              <div className="low">
                <svg role="img" className="icon">
                  <use xlinkHref="#low" />
                </svg>
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day-of-week" />
          <div className="date" />
          <div className="bar rainy">
            <div className="weather">
              <svg role="img" width={160} height={222} viewBox="0 0 160 222">
                <use xlinkHref="#rainy" />
              </svg>
            </div>
            <div className="temperature">
              63
              <span className="degrees">°</span>
            </div>
            <div className="content">
              <div className="precipitation">
                <svg role="img" className="icon">
                  <use xlinkHref="#precipitation" />
                </svg>
                84%
              </div>
              <div className="low">
                <svg role="img" className="icon">
                  <use xlinkHref="#low" />
                </svg>
                28°
              </div>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="day-of-week" />
          <div className="date" />
          <div className="bar sunny">
            <div className="weather">
              <svg role="img" width={208} height={213} viewBox="0 0 208 213">
                <use xlinkHref="#sunny" />
              </svg>
            </div>
            <div className="temperature">
              71
              <span className="degrees">°</span>
            </div>
            <div className="content">
              <div className="precipitation">
                <svg role="img" className="icon">
                  <use xlinkHref="#precipitation" />
                </svg>
                84%
              </div>
              <div className="low">
                <svg role="img" className="icon">
                  <use xlinkHref="#low" />
                </svg>
                28°
              </div>
            </div>
          </div>
        </div>
      </div>
      <Svgs />
    </>
  );
}

export default App;
