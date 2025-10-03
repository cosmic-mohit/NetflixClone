export type Movie = {
    id: number;
    name: string;
    poster_path: string;
}

export type MovieListProps = {
    movies: Movie[];
}