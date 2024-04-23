import React from "react";
import EmailActionsItem from "./EmailActionsItem";

export default function EmailActions(
	{ items, uid } = {
		items: [{ icon: "", action: () => {}, alt: "" }],
		uid: "",
	}
) {
	return (
		<ul>
			{items.map((e, i) => (
				<EmailActionsItem
					alt={e.alt}
					icon={e.icon}
					onClick={e.action}
					key={`${uid}-email-action-${e.alt}`}
				/>
			))}
		</ul>
	);
}
