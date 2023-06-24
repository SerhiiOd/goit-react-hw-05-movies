import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { fetchDetailsMovies } from 'services/moviesAPI';
import {
  BtnRevers,
  TitleInform,
  LinkBox,
  LinkInform,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({
    backdrop_path: '',
    genres: [],
    overview: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: '',
  });
  const [loader, setLoader] = useState(true);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [previousRoute, setPreviousRoute] = useState('/');

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await fetchDetailsMovies(movieId);

        if (Object.keys(movieDetails).length === 0) {
          return toast('Sorry, movie not found! Please try again later');
        }
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }

    fetchMovieDetails();

    if (location.state && location.state.from) {
      setPreviousRoute(location.state.from);
    }
  }, [movieId, location.state]);

  const onGoBack = () => {
    navigate(previousRoute);
  };

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/200x300?text=Poster+Not+Found';
  const year = release_date.slice(0, 4);
  const vote = Math.floor(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <main>
        <BtnRevers type="button" onClick={onGoBack}>
          Назад
        </BtnRevers>
        {movieDetails && (
          <MovieCard
            title={title}
            year={year}
            poster={poster}
            vote={vote}
            overview={overview}
            genres={movieGenres}
          />
        )}

        <TitleInform>Additional information</TitleInform>
        <LinkBox>
          <LinkInform to="cast">Cast</LinkInform>
          <LinkInform to="reviews">Reviews</LinkInform>
        </LinkBox>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {loader && <Loader />}
    </>
  );
}
