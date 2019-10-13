import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import './App.css';
import { store } from './common/redux/configure-store';
import MovieDisplayWrapper from './movie-display/components/movie-display-wrapper';

function App() {
  return (
    <ReduxProvider store={store}>
      <MovieDisplayWrapper />
    </ReduxProvider>
  );
}

export default App;
