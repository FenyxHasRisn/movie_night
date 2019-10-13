import { IMovieDisplayState } from '../../interfaces/states/IMovieDisplayState';
import { ImmerReducer, createActionCreators, createReducerFunction } from 'immer-reducer';
import ITitle from '../../dtos/title';

const initialState: IMovieDisplayState = {
    titles: []
};

class MovieDisplayReducer extends ImmerReducer<IMovieDisplayState> {
    public AddTitles(titles: ITitle[]): void {
        this.draftState.titles = titles;
    }
}

export const MovieDisplayActions = createActionCreators(MovieDisplayReducer);
export const MovieDisplayReducerFunction = createReducerFunction(
    MovieDisplayReducer,
    initialState
);