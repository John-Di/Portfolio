import React from "react"
import Resume from "../components/resume";

export default function ResumeTemplate({ data, pageContext }) {
	// console.log(data, pageContext);

	return (
		<Resume data={data} pageContext={pageContext} />
	)
}
