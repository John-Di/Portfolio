import React from "react";

const test = (length, content, fn) => {
	console.log(length, content)
	return fn();
}

export const contentMaker = (length, content) => reduceJSXList(
	Array.from(
		{ length },
		content.bind(this, length)
	));

export const reduceJSXList = (list, delimiter = (<></>)) => list.reduce((acc, curr) => acc === null ? curr : (
	<>
		{acc}
		{delimiter}
		{curr}
	</>
), null);
