import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Source = styled.span`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  position: absolute;
  border-radius: 5px;
  opacity: 0;
  padding: 20px 10px 20px 10px;
  -webkit-transition: opacity 500ms;
  -moz-transition: opacity 500ms;
  -o-transition: opacity 500ms;
  transition: opacity 500ms;
  word-wrap: break-word;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;

  &:hover {
    opacity: 1;
  }
`;
