import styled from 'styled-components';

export const DataContainer = styled.div`
  text-align: left;
  font-family: 'Indie Flower', cursive;

  .name {
    text-transform: capitalize;
    font-size: 3em;
  }
  .header {
    margin: 0;
  }

  .entry-container {
    padding: .5rem 0;
    border-top: 1px grey solid;
    border-bottom: 1px grey solid;

    .data-entry {
      margin: .25rem;
      font-size: 1.3em;
      
      .data-span {
        text-transform: capitalize;
        font-size: 1.1em;
      }
    }
  }
  
  .resource-link {
    margin-top: 4px;
    font-size: 1rem;

    .fa-external-link-alt {
      font-size: .75rem;
    }
  }
`;
