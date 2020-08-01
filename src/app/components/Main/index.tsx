import React, {useEffect, useMemo, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { setPicture, fetchPicture } from '../../actions/pictureActions';
import './style.scss';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { PictureModel } from '../../models';


export function Main() {
    const dispatch = useDispatch();
    const picture = useSelector((state: RootState) => state.picture);
  
    const datePickerRef = useRef(null);

    const storedDate = localStorage.getItem("date");
    const [date, setDate] = useState(storedDate ? storedDate : new Date().toISOString().slice(0,10));
    const [error, setError] = useState("");
    const [picturesList, setPicturesList] = useState([] as PictureModel[]);
  
    function getAPIURL(date: string) {
      return `https://api.nasa.gov/planetary/apod?api_key=TdCcOumK7lyile0FzWeLOAa7YKBRZJL4zvnCVrUE&date=${date}`;
    };
  
    function changePicture(event: React.ChangeEvent<HTMLInputElement>) {
      const date = event.target.value;

      setDate(date);
  
      const isCorrectDate = new Date(date) <= new Date();
      const isToday = new Date(date).toISOString().slice(0,10) === new Date().toISOString().slice(0,10); 

      if (isCorrectDate) {
        setError("");
        dispatch(fetchPicture(getAPIURL(date)));
        if (isToday) {
          localStorage.removeItem("date");
        } else {
          localStorage.setItem("date", date);
        }
      } else {
        setError("You did choose the incorrenct date.");
        return;
      }
    };

    function createDatesList() {
      const datesArray = [];

      const nowInMs = Date.now();
      const dayInMs = 86400000;

      for (let i = 0; i < 14; i++) {
        const date = nowInMs-dayInMs*i;
        const dateISOStr = new Date(date).toISOString().slice(0,10);
        datesArray.push(dateISOStr);
      }

      return datesArray;
    }
  
    useEffect(() => {
      dispatch(fetchPicture(getAPIURL(date)));

    }, [date]);

    async function getPicturesForLastTwoWeeks() {
      const pictures: PictureModel[] = [];
      for await (let date of createDatesList()) {
        const res: AxiosResponse = await axios.get(getAPIURL(date));
        pictures.push(res.data);
      }
  
      try {
        setPicturesList(pictures);
      }
      catch (err) {
        throw new Error("The request is failed.")
      }
    }

    useEffect(() => {
      getPicturesForLastTwoWeeks();
    }, []);
  
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
        <h2>Pictures for last 2 weeks</h2>
        <div className="Pictures-List">
          {
            picturesList.length 
            ? 
            picturesList.map((picture: PictureModel) => {
              if (picture.media_type === "video") {
                return (
                  <div key={picture.date} className="Size-Wrapper">
                    <a href={picture.url} target="_blank" className="Link-To-Video">Video</a>
                  </div>
                );
              } else if (picture.media_type === "image") {
                return (
                  <div key={picture.date} className="Size-Wrapper">
                    <Link className="Link-To-Picture-Info" to={`/picture/${picture.date}`}>
                      <img className="App__Picture-Item" src={picture.url} alt="" />
                    </Link>
                  </div>
                    
                );
              }
            })
            :
            <div>Loading...</div>
          }
        </div>
      </div>
    );
}