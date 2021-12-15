import React, { useState } from 'react';
import { DropDownContainer, DropDownHeader, DropDownOption, DropDownOptions } from './styled';
import { DropDownProps as IProps } from './types';

const DropDown: React.FC<IProps> = ({ right, options, value, onClick }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleOnClick = (index: number) => {
    setOptionsVisible(false);
    onClick(index);
  };

  return (
    <DropDownContainer right={right} id="drop-down">
      <DropDownHeader
        optionsVisible={optionsVisible}
        onClick={() => setOptionsVisible(!optionsVisible )}
      >
        <span className="current-value">{value.toUpperCase()}</span>
        <span className="arrow"><i className="fas fa-angle-down"></i></span>
      </DropDownHeader>
      <DropDownOptions visible={optionsVisible}>
        {options.map((option, index) => <DropDownOption key={index} onClick={() => handleOnClick(index)}><span>{option.toUpperCase()}</span></DropDownOption>)}
      </DropDownOptions>
    </DropDownContainer>
  );
};

export default DropDown;
