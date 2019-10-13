import React, { useState } from 'react';
import { Grid, Box } from "@material-ui/core";
import { IMovieDisplayState } from '../../common/interfaces/states/IMovieDisplayState';
import './movie-display.css';
import ITitle from '../../common/dtos/title';

const MovieDisplay: React.FC<IMovieDisplay> = (props): JSX.Element => {
    const [selectedTitle, setSelectedTitle] = useState<number>(0);

    const handleSelectedTitleChange = (newTitleId: number): void => {
        if (selectedTitle === newTitleId) {
            setSelectedTitle(0);
        } else {
            setSelectedTitle(newTitleId);
        }
    }

    const handleInputChange = (value: string): void => {
        if (value.length > 2) {
            props.findTitleInformation(value);
        }
    }

    const renderTitleInfo = (title: ITitle, index: number): JSX.Element => {
        return (
            <Grid item key={index} style={{ border: '2px solid; blue' }} onClick={() => handleSelectedTitleChange(title.titleId!)}>
                <Box className='title'>{title.titleName}</Box>
                <Box hidden={selectedTitle !== title.titleId}>
                    {title.awards!.map((award, index) => {
                        return <p key={index}>{award.awardTitle}</p>
                    })}
                </Box>
            </Grid>
        )
    }
    return (
        <Grid container direction='column' alignContent='center'>
            <div>
                <input className='input' onChange={(event) => handleInputChange(event.target.value)} />
            </div>
            <div>
                {props.movieDisplayState.titles.map((movie, index) => {
                    return renderTitleInfo(movie, index)
                })}
            </div>
        </Grid>
    )
}

interface IMovieDisplay {
    movieDisplayState: IMovieDisplayState
    findTitleInformation: (title: string) => void
}

export default MovieDisplay