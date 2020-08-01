import React from 'react';
import { setPictureOnPage, fetchPictureOnPage } from './pictureOnPageActions';
import { setPicture, fetchPicture } from './pictureActions';

import ReactDOM from 'react-dom';
import {act, render, fireEvent, cleanup, waitForElement} from '@testing-library/react';

import axios from "axios";


// test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

it("The setPicture action creator should return an object with a type and a body", () => {
    const pictureObject = {
        date: "string",
        explanation: "string",
        hdurl: "string",
        media_type: "string",
        service_version: "string",
        title: "string",
        url: "string",
    };

    const result = setPicture(pictureObject);

    expect(result.type).toBe("SET_PICTURE");
    expect(result.body).toEqual(pictureObject);
});

it("The setPictureOnPage action creator should return an object with a type and a body", () => {
    const pictureOnPageObject = {
        date: "string",
        explanation: "string",
        hdurl: "string",
        media_type: "string",
        service_version: "string",
        title: "string",
        url: "string",
    };

    const result = setPictureOnPage(pictureOnPageObject);

    expect(result.type).toBe("SET_PICTURE_ON_PAGE");
    expect(result.body).toEqual(pictureOnPageObject);
});


