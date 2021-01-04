import React from "react";

const test = (length, content, fn) => {
	return fn();
}

export const contentMaker = (length, content) => test(length, content, () => reduceJSXList(
	Array.from(
		{ length },
		content.bind(this, length)
	)));

export const reduceJSXList = (list, delimiter = (<></>)) => list.reduce((acc, curr) => acc === null ? curr : (
	<>
		{acc}
		{delimiter}
		{curr}
	</>
), null);
