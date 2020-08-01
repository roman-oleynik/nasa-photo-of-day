import React, {useEffect, useMemo, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { setPicture, fetchPicture } from '../../actions/pictureActions';
import './style.scss';
import { Link } from 'react-router-dom';


export function Main() {
    const dispatch = useDispatch();
    const picture = useSelector((state: RootState) => state.picture);
  
    const datePickerRef = useRef(null);

    const storedDate = localStorage.getItem("date");
    const [date, setDate] = useState(storedDate ? storedDate : new Date().toISOString().slice(0,10));
    const [error, setError] = useState("");
  
    function getAPIURL(date: string) {
      return `https://api.nasa.gov/planetary/apod?api_key=TdCcOumK7lyile0FzWeLOAa7YKBRZJL4zvnCVrUE&date=${date}`;
    };
  
    function changePicture(event: React.ChangeEvent<HTMLInputElement>) {
      const date = event.target.value;

      setDate(date);
  
      const isCorrectDate = new Date(date) <= new Date();
      
      if (isCorrectDate) {
        setError("");
        dispatch(fetchPicture(getAPIURL(date)));
        localStorage.setItem("date", date);
      } else {
        setError("You did choose the incorrenct date.");
        return;
      }
    };
  
    useEffect(() => {
        dispatch(fetchPicture(getAPIURL(date)));
    }, [date]);
  
    return (
      <div className="App">
        <h1>NASA picture of a day</h1>
        <p>Choose a date:</p>
        <input 
            type="date" 
            defaultValue={date}
            ref={datePickerRef} 
            onChange={changePicture}
        />
        <p className="App__Error">{error}</p>
        <img
          src={picture.url} 
          className="App__Picture-Display"
          alt="NASA picture of a day"
        />
        <Link to={`/picture/${picture.date}`}>Show more info</Link>
      </div>
    );
}