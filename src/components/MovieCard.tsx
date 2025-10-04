import { 
    Card,
 } from "@/components/ui/card"

function MovieCard({ movie }) {
    return (
        <Card className="movie-card group overflow-hidden cursor-pointer transition-all duraton-300 hover:scale-105
         hover:shadow-xl outline-blue-200 p-0 border-0 w-[10rem] h-[15rem] rounded-sm">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.name} 
                className="w-full h-full object-cover transition-transform 
                duration-300 group-hover:scale-105 z-10"/>
        </Card>
    );
}

export default MovieCard;