import React, { useRef, useState, useEffect } from 'react';
import { RootState } from '../../../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPicture } from '../../../actions/pictureActions';
import { getAPIURL } from '../../../utils/getAPIURL';
import spinner from '../../../../assets/preloader.gif';
import './style.scss';
import { Link } from 'react-router-dom';



export function ViewerWithDatePicker() {
    const dispatch = useDispatch();
    const picture = useSelector((state: RootState) => state.picture);

    const storedDate = localStorage.getItem("date");
    const [date, setDate] = useState(storedDate ? storedDate : new Date().toISOString().slice(0,10));

    const datePickerRef = useRef(null);

    const [error, setError] = useState("");
    const [isPictureLoaded, setIsPictureLoaded] = useState(false);

    useEffect(() => {
      hidePreloaderAfterPictureLoading()
    }, [date]);

    async function hidePreloaderAfterPictureLoading() {
      await dispatch(fetchPicture(getAPIURL(date)));
      setIsPictureLoaded(true);
    }

    function changeDateInLocalStorage(isToday: boolean, date: string) {
        if (isToday) {
          localStorage.removeItem("date");
        } else {
          localStorage.setItem("date", date);
        }
    };

    async function loadPicture(date: string) {
      const isCorrectDate = new Date(date) <= new Date();
      const isToday = new Date(date).toISOString().slice(0,10) === new Date().toISOString().slice(0,10); 

      if (isCorrectDate) {
        setError("");
        changeDateInLocalStorage(isToday, date);

        setIsPictureLoaded(false);
        await dispatch(fetchPicture(getAPIURL(date)));
        setIsPictureLoaded(true);
      } else {
        setError("You did choose the incorrenct date.");
        return;
      }
    }

    function fetchPictureByDate(event: React.ChangeEvent<HTMLInputElement>) {
      const date = event.target.value;
      setDate(date);
      loadPicture(date);
    };

    return (
    <>
        <p>Choose a date:</p>
        <input 
            type="date" 
            defaultValue={date}
            ref={datePickerRef} 
            onChange={fetchPictureByDate}
        />
        <p className="App__Error">{error}</p>
        {
          isPictureLoaded
          ?
          <img
            src={picture.url} 
            className="App__Picture-Display"
            alt="NASA picture of a day"
          />
          :
          <img src={spinner} className="Preloader" />
        }
        <Link to={`/picture/${picture.date}`}>Show more info</Link>
    </>
    );
};