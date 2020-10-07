import styled from 'styled-components';

export const DataContainer = styled.div`
  text-align: left;
  font-family: 'Indie Flower', cursive;

  hr {
    margin-top: 0;
  }
`;

export const DataEntry = styled.div`
  margin: 5px;
  font-size: 1.3em;

  .data-span {
    text-transform: capitalize;
    font-size: 1.1em;
  }
`;

export const Name = styled.span`
  text-transform: capitalize;
  font-size: 3em;
`;

export const Header = styled.h2`
  margin: 0;
`;
