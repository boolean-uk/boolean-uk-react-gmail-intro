import React from "react";
import NavItemWrapper from "./NavItemWrapper";

export default function NavLink(
	{ label, count, isActive, ...props } = { label: "", count: "" }
) {
	return (
		<NavItemWrapper
			className={isActive ? "active" : ""}
			action={() => console.log("navigate to", label)}>
			<span className="label">{label}</span>
			<span className="count">{count}</span>
		</NavItemWrapper>
	);
}
