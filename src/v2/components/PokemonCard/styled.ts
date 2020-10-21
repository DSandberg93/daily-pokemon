import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 5px solid yellow;
  box-sizing: border-box;
  padding: 12px;
  // font-family: 'Indie Flower', cursive;
  font-family: 'Nunito', sans-serif;


  &:first-child {
    padding: 20px;
    
    .name-id {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }

  img {
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    border: 5px solid yellow;
    box-sizing: border-box;
    background: white;
  }

  .name-id {
    width: fit-content;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
  }
`;
