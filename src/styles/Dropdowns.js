import {
  conditionalProp
} from '../utils/AssessProps';
import { ButtonReset, ListReset } from '../utils/Resets';
import { VerticalLine } from '../utils/Flex';
import BasicContrast from '../utils/BasicContrast';

export const ChicDropdownStyles = ({
  modest = { isModest: false },
  maxWidth = '15em',
  backgroundColor = false,
  textColor = '#000000',
  accentColor
}) => `
  ${ListReset}
  ${VerticalLine}

`;