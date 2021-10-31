export interface DropDownProps {
  right?: boolean,
  value: string,
  options: string[],
  onClick: (index: number) => void,
}

export interface DropDownState {
  optionsVisible: boolean,
}
