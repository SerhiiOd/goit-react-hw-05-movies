import styled from '@emotion/styled';

export const ListMovie = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  justify-content: center;
`;

export const CardLi = styled.li`
  text-align: center;

  border-radius: 10px;

  background-color: rgba(100, 43, 115, 1);
  border: 2px solid rgba(100, 43, 115, 1);

  &:hover {
    transform: scale(1.05);
  }
`;

export const NameFilm = styled.h3`
  font-family: 'Kablammo', cursive;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;

  display: inline-block;
  width: 200px;

  text-decoration: none;

  background-color: #f4d03f;
  background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background-color: #f4d03f;
    background-image: linear-gradient(315deg, #f4d03f 0%, #16a085 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
