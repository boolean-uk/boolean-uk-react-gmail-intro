import React, { useState } from "react";
import NavItemWrapper from "./NavItemWrapper";

export default function NavToggle(
	{ label, checked, onToggle, ...props } = {
		label: "",
		checked: false,
		onToggle: () => {},
	}
) {
	return (
		<NavItemWrapper
			className={"toggle"}
			action={onToggle}>
			<label htmlFor={label}>{label}</label>
			<input
				id={label}
				type="checkbox"
				checked={checked}
				readOnly
			/>
		</NavItemWrapper>
	);
}
