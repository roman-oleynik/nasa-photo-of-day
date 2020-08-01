import { PictureModel } from '../models';
import { ThunkDispatch } from 'redux-thunk';
import axios, { AxiosResponse } from 'axios';
import { ActionType, Action } from './types';


export const setPictureOnPage = (picture: PictureModel) => {
  return {
    type: ActionType.SET_PICTURE_ON_PAGE,
    body: picture
  };
};

export const fetchPictureOnPage = (url: string) => {
  return async (dispatch: ThunkDispatch<{}, {}, Action>) => {
    const res: AxiosResponse = await axios.get(url);
  
    try {
      dispatch(setPictureOnPage(res.data));
    }
    catch (err) {
      throw new Error("The request is failed.")
    }
  }
};

