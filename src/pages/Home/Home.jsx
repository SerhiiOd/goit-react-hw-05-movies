import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { HomeTitle } from 'pages/Home/Home.styled';
import { fetchTrendingMovies } from 'services/moviesAPI';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchListMovies() {
      try {
        const movies = await fetchTrendingMovies();

        if (movies && movies.length === 0) {
          return toast('Sorry, try again later');
        }
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }

    fetchListMovies();
  }, []);

  return (
    <main>
      <HomeTitle>Trending today</HomeTitle>
      {movies && <MovieList movies={movies} />}
      {loader && <Loader />}
    </main>
  );
}
