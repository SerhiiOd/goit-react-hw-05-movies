import styled from '@emotion/styled';

export const SearchForm = styled.form`
  padding: 10px;
  margin-bottom: 20px;
`;

export const SearchButton = styled.button`
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
`;

export const BtnSpan = styled.span`
  font-family: 'Lobster', cursive;
  font-weight: 400;
  font-size: 20px;
  line-height: calc(16 / 20);

  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background-color: #ffe53b;
    background-image: linear-gradient(315deg, #ffe53b 0%, #ff2525 74%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 5px;

  border-radius: 10px;
  outline: none;
`;
