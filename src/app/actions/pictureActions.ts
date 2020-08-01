import { PictureModel } from '../models';
import { ThunkDispatch } from 'redux-thunk';
import axios, { AxiosResponse } from 'axios';
import { ActionType, Action } from './types';



export const setPicture = (picture: PictureModel) => {
  return {
    type: ActionType.SET_PICTURE,
    body: picture
  };
};

export const fetchPicture = (url: string) => {
  return async (dispatch: ThunkDispatch<{}, {}, Action>) => {
    const res: AxiosResponse = await axios.get(url);
  
    try {
      dispatch(setPicture(res.data));
    }
    catch (err) {
      throw new Error("The request is failed.")
    }
  }
};
