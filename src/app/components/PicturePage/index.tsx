import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { fetchPictureOnPage } from '../../actions/pictureOnPageActions';
import { getAPIURL } from '../../utils/getAPIURL';
import spinner from '../../../assets/preloader.gif';
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

    async function getDataAndStopLoading() {
        await dispatch(fetchPictureOnPage(getAPIURL(date)));
        setIsLoaded(true);
    }

    useEffect(() => {
        getDataAndStopLoading();
    }, []);


    return (
        <div className="Picture-Page">
            {
                !isLoaded
                ?
                <img src={spinner} className="Preloader" />
                :
                <>
                    <h1>{picture.title}</h1>
                    <img 
                        src={picture.url} 
                        className="Picture-Page__Picture"
                        alt="NASA picture of a day" 
                    />
                    <p>{picture.explanation}</p>
                </>
            }
        </div>
    );
}