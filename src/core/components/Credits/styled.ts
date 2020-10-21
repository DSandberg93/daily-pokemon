import styled from 'styled-components';

export const CreditsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: fit-content;
  padding: 15px;
  margin: 10px;
  background: rgba(255, 255, 255, .6);
  border-radius: 15px;

  .title {
    font-style: italic;
    margin-bottom: 5px;
    font-size: 18px;
  }

  ul {
    padding-left: 25px;
    margin: 0;
    li::marker {
      content: "-  ";
    }
  }
`;
