import React from "react";
import {
	HR,
	SKILL_LIST,
	SKILL,
	KEYWORDS,
	KEYWORD
} from './styles';

export default function Skills({ data }) {
	const skills = data;
	console.log(skills);

	return (
		<section>
			{/* <h2>Proficiencies</h2> */}
			<HR />
			<SKILL_LIST>
				{skills.map((category, i) => {
					return <SKILL key={`skill_section_${i}`}>
						<span><strong>{category.name}</strong>:</span>
						<br />
						<KEYWORDS>
							{
								category.keywords.map((skill, j) => (
									<KEYWORD key={`skill_name_${j}`}>{skill}</KEYWORD>
								))
							}
						</KEYWORDS>
						{/* <SocialLink data={skill}>
							{social[skill.platform]}
						</SocialLink> */}
					</SKILL>
				})}
			</SKILL_LIST>
		</section>
	)
}
