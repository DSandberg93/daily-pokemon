import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  max-width: 960px;
  max-height: 600px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: 'primary primary . . .' 'primary primary . . .';
  grid-gap: 1rem;
  margin: 1rem;

  .primary {
    grid-area: primary;
  }
`;

export const ExpandedCardCover = styled.div<{ expanded?: boolean }>`
  display: ${(props) => props.expanded ? 'flex' : 'none'};
  z-index: 20;
  background: #555555AA;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;

  .expanded-card {
    max-height: 0;
    max-width: 0;
    z-index: 30;

    ${(props) => props.expanded && `
      max-height: 600px;
      height: auto;
      max-width: 960px;
      width: 960px;
    `}
  }
`;
