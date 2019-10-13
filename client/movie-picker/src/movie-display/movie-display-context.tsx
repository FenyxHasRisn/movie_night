import * as React from 'react';
import ITitle from '../common/dtos/title';

const MovieContext = React.createContext<ITitle[] | null>(null);

export const MovieContextProvider = MovieContext.Provider;

export const MovieContextConsumer = MovieContext.Consumer;

export default MovieContext