import React from "react";

const test = (length, content, fn) => {
	console.log(length, content)
	return fn();
}

export const jsxToArray = (length, content) => Array.from(
	{ length },
	content.bind(this, length)
);

export const arrayToJSX = (length, content) => reduceJSXList(
	jsxToArray(length, content)
);

export const reduceJSXList = (list, delimiter = (<></>)) => list.reduce((acc, curr) => acc === null ? curr : (
	<>
		{acc}
		{delimiter}
		{curr}
	</>
), null);
