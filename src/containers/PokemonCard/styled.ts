import styled from 'styled-components';

export const PokemonCardContainer = styled.button<{ primaryColor: string, secondaryColor?: string, hasOnClick?: boolean }>`
  display: flex;
  height: 100%;
  width: 100%;
  border: 8px solid yellow;
  border-radius: 8px;
  ${(props) => props.secondaryColor ? `
    background: linear-gradient(${props.theme.colors[props.primaryColor]}, ${props.theme.colors[props.secondaryColor]} 120%);
  `
  :
  `
    background: ${props.theme.colors[props.primaryColor]};
  `
  }

  ${(props) => props.hasOnClick && `
    :hover {
      cursor: pointer;
    }
  `}

  .left {
    max-width: 360px;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
  }
`;
