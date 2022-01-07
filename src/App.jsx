import React, { useState, useEffect } from 'react';
import Svgs from './components/Svgs';
import Day from './components/Day';
import './App.scss';

function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (long && lat) {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&cnt=7&appid=${process.env.REACT_APP_API_KEY}`);
        const resdata = await res.json();
        setData(resdata);
      }
    };
    fetchData();
  }, [long]);
  return (
    <>
      <div className="wrapper">
        {data ? data.list.map((e, index) => <Day props={e} key={e.dt} index={index} />) : null}
      </div>
      <Svgs />
    </>
  );
}

export default App;
