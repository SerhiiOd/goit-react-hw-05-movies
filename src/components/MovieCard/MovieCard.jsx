import PropTypes from 'prop-types';
import { CardFilms, CardInfo } from 'components/MovieCard/MovieCard.styled';

export const MovieCard = ({ poster, title, year, vote, overview, genres }) => {
  return (
    <CardFilms>
      <img src={poster} alt={title} width="250" />
      <CardInfo>
        <h2>
          {title} ({year})
        </h2>
        <p>User Score: {vote}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </CardInfo>
    </CardFilms>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};
