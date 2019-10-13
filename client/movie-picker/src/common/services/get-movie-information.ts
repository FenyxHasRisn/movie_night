import resultMapper from "./result-mapper";
import ITitle from "../dtos/title";

const getMovieInformation = async (movie: string): Promise<ITitle[]> => {
    let titles: string = '';
    let movies: ITitle[] = [];
    await fetch('http://localhost:5000/api/movies/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(response => response.text())
        .then(data => {
            titles = data;
        });

    movies = resultMapper(titles);

    return movies;
}

export default getMovieInformation;