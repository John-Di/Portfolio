import React from "react";
import Collapsible from 'react-collapsible';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trigger } from './styles';

export default function CollapsibleSection({ speed = 400, label, triggerStyles = {}, children, contentInnerClassName = '', triggerTagName = 'div', className = '' }) {
	const trigger = (
		<Trigger>
			{label} <FontAwesomeIcon className="Collapsible__trigger-icon" icon={faChevronDown} />
		</Trigger>
	);

	return (
		<Collapsible
			// contentContainerTagName={"details"}
			className={className}
			openedClassName={className}
			triggerTagName={triggerTagName}
			trigger={trigger}
			open={false}
			transitionTime={speed}
			triggerStyle={triggerStyles}
			contentInnerClassName={contentInnerClassName}
		>
			{children}
		</Collapsible>
	)
}
