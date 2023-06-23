import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px;
`;

export const Link = styled(NavLink)`
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
