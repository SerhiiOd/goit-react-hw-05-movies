import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BtnRevers = styled.button`
  font-family: inherit;

  padding: 10px 5px;
  margin-right: 10px;

  cursor: pointer;

  border-radius: 10px;

  border: none;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(100, 43, 115, 1) 0%,
    rgba(4, 0, 4, 1) 90%
  );

  color: #fff;

  &:hover {
    color: #ff4500;
  }
`;

export const TitleInform = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: calc(16 / 24);

  text-align: center;

  margin-bottom: 25px;
`;

export const LinkBox = styled.div`
  text-align: center;

  margin-bottom: 25px;
`;

export const LinkInform = styled(NavLink)`
  font-family: 'Permanent Marker', cursive;
  font-weight: 600;
  font-size: 24px;
  line-height: calc(16 / 24);

  text-decoration: none;

  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:not(:last-child) {
    margin-right: 100px;
  }

  &:hover {
    background-color: #4158d0;
    background-image: linear-gradient(
      290deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
