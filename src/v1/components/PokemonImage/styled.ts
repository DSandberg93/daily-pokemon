import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  max-width: 400px;
  width: auto;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Source = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: inline-block;
  color: white;
  width: 100%;
  max-width: 400px;
  position: absolute;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-radius: 5px;
  opacity: 0;
  padding: 20px;
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
