import React, {useEffect, useState, useMemo} from 'react';
import axios, { AxiosResponse } from 'axios';
import { PictureModel } from '../../../models';
import { getAPIURL } from '../../../utils/getAPIURL';
import { createDatesList } from '../../../utils/createDatesList';
import { ViewerWithDatePicker } from '../ViewerWithDatePicker';
import { VideoLink } from '../VideoLink';
import { PhotoLink } from '../PhotoLink';
import spinner from '../../../../assets/preloader.gif';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducers';
import { setTwoWeeksPictures } from '../../../actions/twoWeeksPicturesActions';


export function Main() {
    const dispatch = useDispatch();
    const twoWeeksPictures = useSelector((state: RootState) => state.twoWeeksPictures);

    useEffect(() => {
      if (twoWeeksPictures.length !== 14) {
        getPicturesForLastTwoWeeks();
      }
    }, []);

    async function getPicturesForLastTwoWeeks() {
      try {
        const pictures: PictureModel[] = [];

        for await (let date of createDatesList()) {
          const res: AxiosResponse = await axios.get(getAPIURL(date));
          pictures.push(res.data);
        };

        dispatch(setTwoWeeksPictures(pictures))
      }
      catch (err) {
        throw new Error("The request is failed.");
      }
    };
  
    return (
      <div className="App">
        <h1>NASA picture of a day</h1>
        <ViewerWithDatePicker />
        
        <h2>Pictures for last 2 weeks</h2>
        <div className="Pictures-List">
          {
            twoWeeksPictures.length
            ?
            twoWeeksPictures.map((picture: PictureModel) => {
              if (picture.media_type === "video") {
                return (
                  <VideoLink
                    key = {picture.date}
                    url = {picture.url}
                  />
                );
              } else if (picture.media_type === "image") {
                return (
                  <PhotoLink
                    key = {picture.date}
                    date = {picture.date}
                    url = {picture.url}
                  />
                );
              }
            })
            :
            <img src={spinner} className="Preloader" />
          }
        </div>
      </div>
    );
}