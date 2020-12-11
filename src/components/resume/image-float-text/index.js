import React from "react";
import Moment from 'react-moment';
import Image from "../../image";
import { device } from '../../../utils/variables';
import {
	IMAGEFLOATTEXT,
	WRAPPER,
	CONTENT
} from './styles';

Moment.globalLocale = 'en-ca';

export default function ImageFloatText({ url, image, children }) {

	return (
		<IMAGEFLOATTEXT>
			<WRAPPER href={url} target="_blank" >
				<Image imgName={image} />
			</WRAPPER>
			<CONTENT>{children}</CONTENT>
		</IMAGEFLOATTEXT>
	)
}
