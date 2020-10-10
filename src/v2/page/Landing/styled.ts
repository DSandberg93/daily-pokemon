import styled from 'styled-components';

export const LandingContainer = styled.div`
  max-width: 900px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 600px;
  grid-areas: ". history";
`;

export const PokemonCard = styled.div<{primary?: boolean}>`
  ${(props) => props.primary && 'grid-area: primary;'}
  height: 100%;
  width: 100%;
`;

export const HistoryContainer = styled.div`
  grid-area: history;
  width: 100%;
  height: 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
