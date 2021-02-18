import React, { Children } from "react";

export const arrayToJSXList = (list, toJSXArray) => reduceJSXList(list.map(toJSXArray));
export const componentsListToSiblings = (list, toJSXArray) => reduceJSXList(list.map(toJSXArray));

export const childrenToJSXList = (children, toJSXArray) => arrayToJSXList(Children.map(children, child => React.cloneElement(child)), toJSXArray);

export const jsxCloneArray = (length, content) => Array.from(
  { length },
  content.bind(this, length)
);

export const jsxCloneArrayToJSX = (length, content) => reduceJSXList(
  jsxCloneArray(length, content)
);

export const reduceJSXList = (list, delimiter = (<></>)) => list.reduce((acc, curr) => acc === null ? curr : (
  <>
    {acc}
    {delimiter}
    {curr}
  </>
), null);
