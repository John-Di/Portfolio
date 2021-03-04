import styled from 'styled-components';
import { FlexCentered, VerticalLine } from '../../utils/Flex';
import { FancyButtonStyles } from '../../styles/CTAs';

export const WRAPPER = styled.div`
  width: 10.5em;
  margin: 0 auto;
`;

export const HEADER = styled.div`
  ${FancyButtonStyles}
`;

export const BODY = styled.div`
  ${VerticalLine}
`;

export const LIST = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ITEM = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;