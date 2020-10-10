import styled, { css } from 'styled-components';

export const DropDownContainer = styled.div<{right?: boolean}>`
  position: absolute;
  width: 100px;
  margin: 10px;
  top: 0;
  ${(props) => props.right && css`
    right: 0;
  `}
`;

export const DropDownHeader = styled.div<{optionsVisible: boolean}>`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 40px;
  background: transparent;
  
  .arrow {
    text-align: center;
    border: 1px solid grey;
    border-radius: 0 15px 15px 0;
    display: flex;

    .fa-angle-down {
      transition: transform 500ms;
      margin: auto;
      ${(props) => props.optionsVisible && css`
        transform: scaleY(-1);
      `}
    }
  }

  .current-value {
    padding-top: 9px;
    padding-bottom: 9px;
    line-height: 20px;
    text-align: center;
    border-radius: 15px 0 0 ${(props) => !props.optionsVisible ? '15px' : '0'};
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
    transition: border-radius 500ms;
    ${(props) => !props.optionsVisible && css`
      transition-delay: 300ms;
    `}
  }

  &:hover {
    cursor: pointer;
  }
`;

export const DropDownOptions = styled.div<{visible: boolean}>`
  width: calc(100% - 39px);
  display: block;
  box-sizing: border-box;
  border-radius: 0 0 15px 15px;
  ${(props) => props.visible && 'border-bottom: 1px solid grey;'}
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  transition: 500ms;
  ${(props) => props.visible && css`
    transition-delay: 300ms;
  `}
  height: 81px;
  transform: scaleY(${(props) => props.visible ? '1' : '0'});
  transform-origin: top;
  // height: ${(props) => props.visible ? '81px' : '0'};
  // margin-top: ${(props) => props.visible ? '0' : '-81px'};
  overflow: hidden;
`;

export const DropDownOption = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  height: 39px;
  text-align: center;
  border-bottom: 1px solid grey;

  &:last-child {
    border-bottom: none;
    height: 40px;
  }

  span {
    margin: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;
