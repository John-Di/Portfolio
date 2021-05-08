import styled from 'styled-components';
import Clearfix from '../../../utils/Clearfix';
import { FloatLeftHalf, FloatLeftThird } from '../../../utils/Float';

export const TITLE = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const LINEITEM = styled.div`
  ${Clearfix}
  width: 100%;
  padding: 1em 0;
`;

export const THUMBNAIL = styled.div`
  ${FloatLeftThird}
  width: 100%;
  max-width: 6em;
`;

export const DETAILS = styled.div`
  ${FloatLeftHalf}
  width: 100%;
  max-width: 50%;
`;

export const CONTAINER = styled.form`
  width: 100%;
`;

export const QUANTITYSTEPPER = styled.div`
  display: inline-block;
  margin-top: 1em;
`;