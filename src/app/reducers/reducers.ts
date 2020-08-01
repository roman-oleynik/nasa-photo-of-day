import { ActionType, Action } from '../actions/types';
import { PictureModel } from '../models';

export function pictureReducer(state: PictureModel = {} as PictureModel, action: Action) {
    switch (action.type) {
        case ActionType.SET_PICTURE:
            return {...action.body};
        default:
            return state;
    }
};

export function pictureOnPageReducer(state: PictureModel = {} as PictureModel, action: Action) {
    switch (action.type) {
        case ActionType.SET_PICTURE_ON_PAGE:
            return {...action.body};
        default:
            return state;
    }
};