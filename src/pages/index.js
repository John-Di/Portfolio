import React from "react"
import Resume from "../components/resume";

export default function Index({ data, pageContext }) {
	return (
		<Resume data={data} pageContext={pageContext} />
	)
}
