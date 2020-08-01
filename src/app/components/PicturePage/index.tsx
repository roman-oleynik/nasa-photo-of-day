import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { fetchPictureOnPage } from '../../actions/pictureOnPageActions';
import './style.scss';

type Props = {
    match: {
        params: {
            date: string
        }
    }
}

export function PicturePage(props: Props) {
    const dispatch = useDispatch();
    const picture = useSelector((state: RootState) => state.pictureOnPage);
    const date = props.match.params.date;
    const [isLoaded, setIsLoaded] = useState(false);

    function getAPIURL(date: string) {
        return `https://api.nasa.gov/planetary/apod?api_key=TdCcOumK7lyile0FzWeLOAa7YKBRZJL4zvnCVrUE&date=${date}`;
    };

    async function getDataAndStopLoading() {
        await dispatch(fetchPictureOnPage(getAPIURL(date)));
        setIsLoaded(true);
    }

    useEffect(() => {
        getDataAndStopLoading();
    }, []);


    if (!isLoaded) {
        return <div>Loading...</div>
    }
    return (
        <div className="Picture-Page">
            <h1>{picture.title}</h1>
            <img 
                src={picture.url} 
                className="Picture-Page__Picture"
                alt="NASA picture of a day" 
            />
            <p>{picture.explanation}</p>
        </div>
    );
}