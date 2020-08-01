import React from 'react';
import { render } from '@testing-library/react';
import { pictureReducer, pictureOnPageReducer } from './reducers';
import { ActionType, Action } from '../actions/types';
import { PictureModel } from '../models';


// test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

it("The pictureReducer should return a plain object as default", () => {
    const result = pictureReducer({}, {type: "HELLO_WORLD"});
    expect(result).toEqual({});
});

it("The pictureReducer should return an updated state", () => {
    const action = {
        type: "SET_PICTURE",
        body: {
            date: "string",
            explanation: "string",
            hdurl: "string",
            media_type: "string",
            service_version: "string",
            title: "string",
            url: "string",
        }
    };
    const result = pictureReducer({}, action);
    expect(result).toEqual(action.body);
});



it("The pictureOnPageReducer should return a plain object as default", () => {
    const result = pictureReducer({}, {type: "HELLO_WORLD"});
    expect(result).toEqual({});
});

it("The pictureOnPageReducer should return an updated state", () => {
    const action = {
        type: "SET_PICTURE_ON_PAGE",
        body: {
            date: "string",
            explanation: "string",
            hdurl: "string",
            media_type: "string",
            service_version: "string",
            title: "string",
            url: "string",
        }
    };
    const result = pictureOnPageReducer({}, action);
    expect(result).toEqual(action.body);
});