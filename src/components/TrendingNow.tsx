import MovieList from './MovieList';
const MovieData = {
  "id": 10,
  "name": "Star Wars Collection",
  "original_language": "en",
  "original_name": "Star Wars Collection",
  "overview": "An epic space-opera theatrical film series, which depicts the adventures of various characters \"a long time ago in a galaxy far, far away….\"",
  "poster_path": "/22dj38IckjzEEUZwN1tPU5VJ1qq.jpg",
  "backdrop_path": "/4z9ijhgEthfRHShoOvMaBlpciXS.jpg",
  "parts": [
    {
      "adult": false,
      "backdrop_path": "/2w4xG178RpB4MDAIfTkqAuSJzec.jpg",
      "id": 11,
      "name": "Star Wars",
      "original_name": "Star Wars",
      "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 15.8557,
      "release_date": "1977-05-25",
      "video": false,
      "vote_average": 8.205,
      "vote_count": 21522
    },
    {
      "adult": false,
      "backdrop_path": "/dMZxEdrWIzUmUoOz2zvmFuutbj7.jpg",
      "id": 1891,
      "name": "The Empire Strikes Back",
      "original_name": "The Empire Strikes Back",
      "overview": "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
      "poster_path": "/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 6.7352,
      "release_date": "1980-05-20",
      "video": false,
      "vote_average": 8.395,
      "vote_count": 17713
    },
    {
      "adult": false,
      "backdrop_path": "/r2IOBOeg5wLfLtyOnT5Pur6Tl4q.jpg",
      "id": 1892,
      "name": "Return of the Jedi",
      "original_name": "Return of the Jedi",
      "overview": "Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.",
      "poster_path": "/jQYlydvHm3kUix1f8prMucrplhm.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 5.5117,
      "release_date": "1983-05-25",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 16334
    },
    {
      "adult": false,
      "backdrop_path": "/wDe8LzwuvHYYiuwyNfxdYQq8ti4.jpg",
      "id": 1893,
      "name": "Star Wars: Episode I - The Phantom Menace",
      "original_name": "Star Wars: Episode I - The Phantom Menace",
      "overview": "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
      "poster_path": "/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 7.1731,
      "release_date": "1999-05-19",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 15251
    },
    {
      "adult": false,
      "backdrop_path": "/msYmRFJfXy0zsFd73PAEqdetKpO.jpg",
      "id": 1894,
      "name": "Star Wars: Episode II - Attack of the Clones",
      "original_name": "Star Wars: Episode II - Attack of the Clones",
      "overview": "Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.",
      "poster_path": "/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 6.9779,
      "release_date": "2002-05-15",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 13807
    },

    {
      "adult": false,
      "backdrop_path": "/jniabJVBSW3EqLlyhjxWCZjVkiE.jpg",
      "id": 1895,
      "name": "Star Wars: Episode III - Revenge of the Sith",
      "original_name": "Star Wars: Episode III - Revenge of the Sith",
      "overview": "The evil Darth Sidious enacts his final plan for unlimited power – and the heroic Jedi Anakin Skywalker must choose a side.",
      "poster_path": "/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 7.0776,
      "release_date": "2005-05-17",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 14365
    },
    {
      "adult": false,
      "backdrop_path": "/8BTsTfln4jlQrLXUBquXJ0ASQy9.jpg",
      "id": 140607,
      "name": "Star Wars: The Force Awakens",
      "original_name": "Star Wars: The Force Awakens",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "poster_path": "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 10.9225,
      "release_date": "2015-12-15",
      "video": false,
      "vote_average": 7.256,
      "vote_count": 19985
    },
    {
      "adult": false,
      "backdrop_path": "/SPkEiZGxq5aHWQ2Zw7AITwSEo2.jpg",
      "id": 181812,
      "name": "Star Wars: The Rise of Skywalker",
      "original_name": "Star Wars: The Rise of Skywalker",
      "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
      "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 10.4568,
      "release_date": "2019-12-18",
      "video": false,
      "vote_average": 6.283,
      "vote_count": 10367
    },
    {
      "adult": false,
      "backdrop_path": "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
      "id": 181808,
      "name": "Star Wars: The Last Jedi",
      "original_name": "Star Wars: The Last Jedi",
      "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      "media_type": "movie",
      "original_language": "en",
      "genre_ids": [
        12,
        28,
        878
      ],
      "popularity": 8.732,
      "release_date": "2017-12-13",
      "video": false,
      "vote_average": 6.768,
      "vote_count": 15821
    }
  ]
}

function TrendingNow() {
  return (
    <div className="p-4 md:p-8">
      <h3>Trending Now</h3>

      {MovieData.parts.length > 0 ?
        <MovieList movies={MovieData.parts} /> :
        <p>No movies found</p>}

    </div>
  );
}

export default TrendingNow;
