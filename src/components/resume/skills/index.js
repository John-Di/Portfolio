import React from "react";
import Keyword from '../keyword';
import {
	HR,
	SKILL_LIST,
	SKILL,
	KEYWORDS,
	CATEGORY
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
						<CATEGORY><strong>{category.name}</strong>:</CATEGORY>
						<br />
						<KEYWORDS>
							{
								category.keywords.map((skill, j) => (
									<Keyword key={`skill_name_${j}`}>{skill}</Keyword>
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
