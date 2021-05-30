import styled from 'styled-components';
import Clearfix from '../../../utils/Clearfix';
import { FloatLeft, FloatLeftHalf, FloatLeftThird } from '../../../utils/Float';

export const TITLE = styled.p`
  font-weight: bold;
  margin: 0;
  width: 100%;

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
`;

export const CONTAINER = styled.div`
  ${Clearfix}
  width: 100%;
`;

export const OPTIONS = styled.div`
  display: inline-block;
  float: left;
  width: 100%;
  max-width: calc(100% - 2.5em);

  label,
  label:hover,
  label:focus {
    cursor: auto;
    border-width: 1px;
    outline: 0;
  }
`;

export const QUANTITYSTEPPER = styled.form`
  display: inline-block;
  float: right;
  width: 2em;
  vertical-align: bottom;

  > * {
    width: 100%;
  }
`;