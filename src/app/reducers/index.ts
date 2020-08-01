import { combineReducers } from 'redux';
import { pictureReducer, pictureOnPageReducer } from './reducers';
import { PictureModel } from '../models';

export interface RootState {
  picture: PictureModel,
  pictureOnPage: PictureModel
}

export const rootReducer = combineReducers<RootState>({
  picture: pictureReducer,
  pictureOnPage: pictureOnPageReducer
});
