import styled from 'styled-components';
import VisuallyHidden from '../../utils/VisuallyHidden';

const checkmarkHeight = 1.25;

export const LABEL = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input + span {
    background-color: #ccc;
  }

  input:checked + span {
    background-color: #2196F3;

    &::after {
      display: block;
    }
  }
`

export const INPUT = styled.input`
  ${VisuallyHidden}
  cursor: pointer;

  &:checked + span::after {
    display: block;
  }
`
export const CHECKMARK = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${checkmarkHeight}em;
  width: ${checkmarkHeight}em;
  background-color: #eee;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  &::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;


export const SPAN = styled.span`
  font-size: 0.875em;
  line-height: ${checkmarkHeight / 0.875};
`;