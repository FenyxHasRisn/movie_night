import ITitle from "../dtos/title";

const resultMapper = (movies: string): ITitle[] => {
    let titles: ITitle[] = []

    const json = JSON.parse(movies);
    console.log(json);
    (Object as any).values(json).forEach((title: ITitle) => {
        titles.push(title);
    })
    return titles;
}

export default resultMapper;