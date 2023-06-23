import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ListMovie,
  CardLi,
  NameFilm,
} from 'components/MovieList/MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ListMovie>
      {movies.map(movie => (
        <CardLi key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/278x417?text=Poster+Not+Found'
              }
              alt={movie.title}
              width="250"
            />
            <NameFilm>{movie.title}</NameFilm>
          </Link>
        </CardLi>
      ))}
    </ListMovie>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};
