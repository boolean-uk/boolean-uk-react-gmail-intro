import React from "react";

export default function EmailActionsItem({ onClick, icon, alt }) {
	return (
		<li onClick={onClick}>
			<img
				className="icon"
				src={icon}
				alt={alt}
			/>
		</li>
	);
}
