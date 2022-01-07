import PropTypes from 'prop-types';
import React from 'react';

function Day({ props, index }) {
  const { main, weather } = props;
  const getWeather = (e) => {
    switch (e) {
      case 'Rain': return 'rainy';
      case 'Thunderstorm': return ' stormy';
      case 'Drizzle': return 'rainy';
      case 'Snow': return 'snowy';
      case 'Clear': return 'sunny';
      case 'Clouds': return 'cloudy';
      default: return 'partly-cloudy';
    }
  };
  const daysOfWeekMap = {
    0: 'SUN',
    1: 'MON',
    2: 'TUES',
    3: 'WED',
    4: 'THUR',
    5: 'FRI',
    6: 'SAT',
  };
  return (
    <div className="day">
      <div className="day-of-week">{daysOfWeekMap[(new Date().getDay() + index) % 7]}</div>
      <div className="date">{(new Date(new Date().setDate(new Date().getDate() + index))).getDate()}</div>
      <div className={`bar ${getWeather(weather[0].main)}`}>
        <div className="weather">
          <svg role="img">
            <use
              xlinkHref={`#${getWeather(weather[0].main)}`}
              width={264}
              height={166}
              viewBox="0 0 264 166"
            />
          </svg>
        </div>
        <div className="temperature">
          {(main.temp - 273.15).toFixed(0)}
          <span className="degrees">°</span>
        </div>
        <div className="content">
          <div className="precipitation">
            <svg role="img" className="icon">
              <use xlinkHref="#precipitation" />
            </svg>
            {main.humidity}
            %
          </div>
          <div className="low">
            <svg role="img" className="icon">
              <use xlinkHref="#low" />
            </svg>
            {(main.temp_min - 273.15).toFixed(0)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Day;
Day.propTypes = {
  index: PropTypes.number,
  props: PropTypes.objectOf(PropTypes.any),
  main: PropTypes.objectOf(PropTypes.any),
  weather: PropTypes.arrayOf(PropTypes.any),
};

Day.defaultProps = {
  index: 0,
  props: {},
  main: {},
  weather: [],
};
