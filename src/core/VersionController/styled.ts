import styled from 'styled-components';
import { typeStylesV1, typeStylesV2 } from '../TypeStyling';

export const VersionControllerContainer = styled.div<{ version: string }>`
  ${(props) => props.version === 'v1' && typeStylesV1}
  ${(props) => props.version === 'v2' && typeStylesV2}
`;