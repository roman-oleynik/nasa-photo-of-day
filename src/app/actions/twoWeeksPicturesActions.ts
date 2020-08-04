import { PictureModel } from '../models';
import { ActionType, Action } from './types';

export const setTwoWeeksPictures = (pictures: PictureModel[]) => {
    return {
        type: ActionType.SET_TWO_WEEKS_PICTURES,
        body: pictures
    };
};