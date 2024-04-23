import React, { useState } from "react";
import NavLink from "./NavLink";
import NavToggle from "./NavToggle";
export default function Nav() {
	const [checked, setChecked] = useState(false);

	return (
		<nav className="left-menu">
			<ul className="inbox-list">
				<NavLink
					label="Inbox"
					count="3"
					isActive={1}></NavLink>
				<NavLink
					label="Starred"
					count="2"></NavLink>
				<NavToggle
					label={"Hide Read"}
					checked={checked}
					onToggle={() => setChecked((prev) => !prev)}></NavToggle>
			</ul>
		</nav>
	);
}
