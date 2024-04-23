import React from "react";
import backArrow from "/src/assets/icons/back-arrow.png";
import downloadButton from "/src/assets/icons/download-button.png";
import rubbishButton from "/src/assets/icons/rubbish-bin-delete-button.png";

import EmailActionsItem from "./EmailActionsItem";
import EmailActions from "./EmailActions";

const actionsList = [
	{ icon: backArrow, alt: "reply button" },
	{ icon: downloadButton, alt: "download button" },
	{ icon: rubbishButton, alt: "delete button" },
];
export default function EmailToolbar(
	{ items } = { items: [{ icon: "", action: () => {}, alt: "" }] }
) {
	const getEmailCount = () => {
		return { currentPage: 1, lastPage: 25 };
	};
	const { currentPage, lastPage } = getEmailCount();

	return (
		<nav className="email-toolbar">
			<EmailActions
				items={actionsList}
				uid="main-toolbar"></EmailActions>
			<div className="space"></div>
			<div>
				<p>
					{currentPage} of {lastPage}
				</p>
				<button>&lt;</button>
				<button>&gt;</button>
			</div>
		</nav>
	);
}
