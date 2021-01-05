import React from "react";
import Banner from '../../components/banner';
import TextBlock from '../../components/text-block';
import {
	TEXT_BANNER
} from './styles';
export default function TextBanner({ children }) {
	console.log('TextBanner');
	return (
		<TEXT_BANNER
			textAlignment={'center'}>
			<TextBlock>
				{children}
			</TextBlock>
		</TEXT_BANNER>
	)
}
