import React from "react";

export const contentMaker = (length, content) => reduceJSXList(
	Array.from(
		{ length },
		content.bind(this)
	));

export const reduceJSXList = (list, delimiter = (<></>)) => list.reduce((acc, curr) => acc === null ? curr : (
	<>
		{acc}
		{delimiter}
		{curr}
	</>
), null);
