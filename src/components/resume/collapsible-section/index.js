import React from "react";
import Collapsible from 'react-collapsible';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trigger } from './styles';

export default function CollapsibleSection({ speed = 400, label, triggerStyles = {}, children, contentInnerClassName }) {
	const trigger = (
		<Trigger>
			{label} <FontAwesomeIcon className="Collapsible__trigger-icon" icon={faChevronDown} />
		</Trigger>
	);

	return (
		<Collapsible
			// contentContainerTagName={"details"}
			// triggerTagName={"summary"}
			trigger={trigger}
			open={true}
			transitionTime={speed}
			triggerStyle={triggerStyles}
			contentInnerClassName={contentInnerClassName}
		>
			{children}
		</Collapsible>
	)
}
