import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { logger, thunk } from '../middleware';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
