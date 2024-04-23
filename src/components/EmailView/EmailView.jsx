import React from "react";
import EmailToolBar from "./EmailToolbar/EmailToolbar";
import Email from "./Email/Email";

export default function EmailView({ data, ...props }) {
	return (
		<main className="email-view">
			<EmailToolBar></EmailToolBar>
			<Email></Email>
		</main>
	);
}
