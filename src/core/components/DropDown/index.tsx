import React from 'react';
import { DropDownContainer, DropDownHeader, DropDownOption, DropDownOptions } from './styled';
import { DropDownProps as IProps, DropDownState as IState } from './types';

class DropDown extends React.PureComponent<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = {
      optionsVisible: false,
    };
  }

  // componentDidMount() {
  //   document.addEventListener('click', (event: MouseEvent) => {
  //     const isValidElement = event.composedPath().find((target) => target === document.getElementById('drop-down'));
  //     if (!isValidElement && this.state.optionsVisible) {
  //       this.setState({ optionsVisible: false });
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('click', (event: MouseEvent) => {
  //     const isValidElement = event.composedPath().find((target) => target === document.getElementById('drop-down'));
  //     if (!isValidElement && this.state.optionsVisible) {
  //       this.setState({ optionsVisible: false });
  //     }
  //   });
  // }

  handleOnClick(index: number) {
    this.setState({ optionsVisible: false });
    this.props.onClick(index);
  }

  render () {
    const { 
      right,
      options,
      value,
    } = this.props;
    const {
      optionsVisible,
    } = this.state;
    return (
      <DropDownContainer right={right} id="drop-down">
        <DropDownHeader
          optionsVisible={optionsVisible}
          onClick={() => this.setState((prevState) => ({ optionsVisible: !prevState.optionsVisible }))}
        >
          <span className="current-value">{value.toUpperCase()}</span>
          <span className="arrow"><i className="fas fa-angle-down"></i></span>
        </DropDownHeader>
        <DropDownOptions visible={optionsVisible}>
          {options.map((option, index) => <DropDownOption key={index} onClick={() => this.handleOnClick(index)}><span>{option.toUpperCase()}</span></DropDownOption>)}
        </DropDownOptions>
      </DropDownContainer>
    );
  }
}

export default DropDown;
