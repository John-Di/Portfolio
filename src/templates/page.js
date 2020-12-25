import React from "react";
import Index from '../pages/index';

export default function Page({ data, pageContext }) {
	// console.log(data, pageContext);

	return (
		<Index data={data} pageContext={pageContext} />
	)
}
