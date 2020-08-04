import React from 'react';
import { setPictureOnPage, fetchPictureOnPage } from './pictureOnPageActions';
import { setPicture, fetchPicture } from './pictureActions';

import ReactDOM from 'react-dom';

import axiosMock from "axios";
import {Main} from '../components/Main/Wrapper';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';



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


