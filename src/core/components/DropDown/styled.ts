import styled, { css } from 'styled-components';

export const DropDownContainer = styled.div<{right?: boolean}>`
  position: absolute;
  margin: 10px;
  top: 0;
  z-index: 10;
  ${(props) => props.right && css`
    right: 0;
  `}
`;

export const DropDownHeader = styled.button<{optionsVisible: boolean}>`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  background: transparent;
  padding: 8px 16px 8px 20px;
  border: none;
  outline: none;
  overflow: hidden;
  background-color: rgba(256, 256, 256, .5);
  border: 1px solid grey;
  border-radius: 15px 15px ${(props) => !props.optionsVisible ? '15px 15px' : '0 0'};
  transition: border-radius 250ms;
  ${(props) => !props.optionsVisible && css`
    transition-delay: 150ms;
  `}
  backdrop-filter: blur(5px);

  &:hover {
    cursor: pointer;
    background-color: rgba(256, 256, 256, .75);
  }
  
  .arrow {
    text-align: center;
    border-left: none;
    box-sizing: border-box;
    display: flex;
    height: 100%;

    .fa-angle-down {
      transition: transform 250ms;
      margin: auto;
      ${(props) => props.optionsVisible && css`
        transform: scaleY(-1);
      `}
    }
  }

  .current-value {
    line-height: 20px;
    text-align: center;
    margin-top: 2px;
  }
`;

export const DropDownOptions = styled.div<{visible: boolean}>`
  display: block;
  box-sizing: border-box;
  border-radius: 0 0 15px 15px;
  ${(props) => props.visible && 'border-bottom: 1px solid grey;'}
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  transition: 250ms;
  ${(props) => props.visible && css`
    transition-delay: 150ms;
  `}
  height: 81px;
  transform: scaleY(${(props) => props.visible ? '1' : '0'});
  transform-origin: top;
  overflow: hidden;
  backdrop-filter: blur(5px);
`;

export const DropDownOption = styled.button`
  width: 100%;
  display: flex;
  height: 39px;
  text-align: center;
  border: none;
  border-bottom: 1px solid grey;
  padding: 0;
  outline: 0;
  background-color: rgba(256, 256, 256, .5);

  &:last-child {
    border-bottom: none;
    height: 40px;
  }

  span {
    margin: auto;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(256, 256, 256, .75);
  }
`;
