import React, { useEffect } from 'react';
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

    function getAPIURL(date: string) {
        return `https://api.nasa.gov/planetary/apod?api_key=TdCcOumK7lyile0FzWeLOAa7YKBRZJL4zvnCVrUE&date=${date}`;
    };

    useEffect(() => {
        dispatch(fetchPictureOnPage(getAPIURL(date)));
    }, []);

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