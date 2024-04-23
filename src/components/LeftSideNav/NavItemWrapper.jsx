import React from "react";

export default function NavItemWrapper({ className, action, ...props }) {
	function handleAction(event) {
		console.log("Do something with: ", event);
		action && action();
	}

	return (
		<li
			className={"item " + className}
			onClick={handleAction}>
			{props.children}
		</li>
	);
}
