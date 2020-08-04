import { combineReducers } from 'redux';
import { pictureReducer, pictureOnPageReducer, twoWeeksPicturesReducer } from './reducers';
import { PictureModel } from '../models';

export interface RootState {
  picture: PictureModel,
  pictureOnPage: PictureModel,
  twoWeeksPictures: PictureModel[]
}

export const rootReducer = combineReducers<RootState>({
  picture: pictureReducer,
  pictureOnPage: pictureOnPageReducer,
  twoWeeksPictures: twoWeeksPicturesReducer
});
