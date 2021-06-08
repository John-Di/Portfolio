import styled from 'styled-components';
import { FlexCentered } from '../../utils/Flex';

export const PRICE = styled.p`
  grid-area: price;
  font-size: 1.25em;
  text-align: right;
  margin: 0;
`;

export const BODY = styled.p`
  margin: 0.5em 0;
  grid-area: body;
  text-align: left;
  line-height: 1.33;
`;

export const CTA_WRAPPER = styled.div`
  ${FlexCentered}
  text-align: center;
  width: 100%;
  grid-area: cta;
  margin-top: 1em;
`;