import styled from 'styled-components';
import Clearfix from '../../../utils/Clearfix';
import { FloatLeft, FloatLeftHalf, FloatLeftThird } from '../../../utils/Float';

export const TITLE = styled.p`
  font-weight: bold;
  margin: 0;
  display: inline-block;
  float: left;
  width: 100%;
  max-width: calc(100% - 2.5em);

  span {
    display: block;
    font-weight:  normal;
    font-size: 0.875em;
    text-transform: lowercase;
    margin-top: 0.25em;
  }
`;

export const LINEITEM = styled.article`
  ${Clearfix}
  width: 100%;
  padding: 1em;
`;

export const THUMBNAIL = styled.div`
  ${FloatLeftThird}
  width: 100%;
  max-width: 6em;
`;

export const DETAILS = styled.div`
  display: inline-block;
  float: left;
  flex: 1 ${(100 * 3 / 4) - 3}%;
  max-width: ${(100 * 3 / 4) - 3}%;
  width: 100%;
`;

export const CONTAINER = styled.form`
  ${Clearfix}
  width: 100%;
`;

export const OPTIONS = styled.div`
  display: inline-block;
  float: left;
  width: 100%;
  max-width: calc(100% - 2.5em);
`;

export const QUANTITYSTEPPER = styled.div`
  display: inline-block;
  margin-left: auto;
  width: 2em;
  vertical-align: bottom;

  > * {
    width: 100%;
  }
`;