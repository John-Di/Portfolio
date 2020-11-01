import React from "react";
import SocialLink from "../social-link";
import LinkedIn from "../../../../static/svgs/linkedin.svg";
import Github from "../../../../static/svgs/github.svg";
import {
	HR,
	SOCIAL_LIST,
	SOCIAL
} from './styles';

export default function Social({ data }) {
	const profiles = data;
	const social = {
		linkedin: <LinkedIn />,
		github: <Github />
	}

	return (
		<div>
			{/* <h2>Find me on</h2> */}
			<HR />
			<SOCIAL_LIST>
				{profiles.map(profile => {
					return (
						<SOCIAL key={profile.network}>
							<SocialLink data={profile}>
								{social[profile.platform]}
							</SocialLink>
						</SOCIAL>
					)
				})}
			</SOCIAL_LIST>
		</div>
	)
}
