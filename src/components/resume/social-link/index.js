import React from "react"
import {
	LINK
} from './styles';

export default function SocialLink({ data, children }) {
	const { url, color, flavor, network } = data;
	console.log(data);
	return (
		<LINK
			color={color}
			href={url}
			target="_blank"
			title={flavor.replace(`{network}`, network)}>
			{children}
		</LINK>
	)
}
