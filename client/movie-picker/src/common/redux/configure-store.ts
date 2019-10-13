import { combineReducers, createStore } from 'redux';
import { MovieDisplayReducerFunction } from './reducers/movie-display-reducer';

const rootReducer = combineReducers({
    display: MovieDisplayReducerFunction
})

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);