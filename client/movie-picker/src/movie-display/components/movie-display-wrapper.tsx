import { IMovieDisplayState } from '../../common/interfaces/states/IMovieDisplayState';
import MovieDisplay from '../layouts/movie-display';
import { AppState } from '../../common/redux/configure-store';
import { connect } from 'react-redux';
import React from "react";
import ITitle from '../../common/dtos/title';
import getMovieInformation from '../../common/services/get-movie-information';
import { MovieDisplayActions } from '../../common/redux/reducers/movie-display-reducer';

type Props = IMovieDisplayWrapperState & IMovieDisplayWrapperDispatches;

const MovieDisplayWrapper: React.FC<Props> = (props): JSX.Element => {
    const findTitleInformation = (titleName: string): void => {
        getMovieInformation(titleName).then(response => {
            props.addTitles(response);
        });
    }

    return (
        <MovieDisplay
            movieDisplayState={props.displayState}
            findTitleInformation={findTitleInformation}
        />
    )
}

interface IMovieDisplayWrapperState {
    displayState: IMovieDisplayState
}

interface IMovieDisplayWrapperDispatches {
    addTitles: (titles: ITitle[]) => void;
}

const mapStateToProps = (state: AppState): IMovieDisplayWrapperState => ({
    displayState: state.display
});

const mapDispatchToProps: IMovieDisplayWrapperDispatches = {
    addTitles: MovieDisplayActions.AddTitles
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDisplayWrapper);