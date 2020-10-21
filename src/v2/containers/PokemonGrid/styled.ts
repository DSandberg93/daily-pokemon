import styled from 'styled-components';

export const GridContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: auto;
  margin: auto;

  .aspect-ratio-box {
    width: 100%;
    padding-top: 80%;
    position: relative;
  }
`;

export const Grid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "primary primary . . ." "primary primary . . .";
  grid-gap: 5px;

  .pokemon-card:first-child {
    grid-area: primary;
  }
`;
