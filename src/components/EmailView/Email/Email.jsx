import React from "react";
import flaticonWelcomeImage from "/src/assets/images/flaticon-welcome-image.png";
import EmailActions from "../EmailToolbar/EmailActions";
import backArrow from "/src/assets/icons/back-arrow.png";
import rubbishButton from "/src/assets/icons/rubbish-bin-delete-button.png";
import rateStarButton from "/src/assets/icons/rate-star-button.png";
export default function Email({ ...data }) {
	/**
	 * NOTE: use data obj to populate fields
	 */

	const DUMMY_CONTENT = (
		<img
			src={flaticonWelcomeImage}
			alt="Flaticon welcome message"
		/>
	);

	return (
		<article className="email-content">
			<EmailTitle>Welcome to Flaticon</EmailTitle>
			<EmailHeader
				sender={{
					name: "Freepik Company",
					email: "no-reply@freepik.com",
				}}
				cc="nicolas@boolean.co.uk"
				timestamp="17 March 2021, 09:33"></EmailHeader>
			<EmailBody></EmailBody>
			<EmailButtons></EmailButtons>
		</article>
	);
}

const EmailTitle = (props) => (
	<div className="title">
		<h1>{props.children}</h1>
	</div>
);

const actions = [
	{ icon: backArrow, alt: "reply button" },
	{
		icon: rateStarButton,
		alt: "star button",
	},
	{ icon: rubbishButton, alt: "delete button" },
];

const EmailHeader = (
	{ sender, cc, timestamp } = {
		sender: { name: "Freepik Company", email: "no-reply@freepik.com" },
		cc: "nicolas@boolean.co.uk",
		timestamp: "17 March 2021, 09:33",
	}
) => {
	return (
		<header className="email-content--header">
			<div className="avatar"></div>
			<div className="email-info">
				<div className="sender-info">
					<h2>{sender.name}</h2>
					<em>&lt;{sender.email}&gt;</em>
				</div>
				<div className="user-info">
					<p>
						to me <em>&lt;{cc}&gt;</em>
					</p>
				</div>
			</div>
			<div className="date-info">
				<p>{timestamp}</p>
			</div>
			<div className="email-action-icons">
				<EmailActions
					items={actions}
					uid="email-view-secondary-actions"></EmailActions>
			</div>
		</header>
	);
};

const EmailBody = ({ data }) => (
	<section className="email-body">
		<div className="content">
			{/* Hardcoded data */}
			<img
				src={flaticonWelcomeImage}
				alt="Flaticon welcome message"
			/>
		</div>
	</section>
);
const EmailButtons = () => (
	<section className="email-actions">
		<button>Reply</button>
		<button>Forward</button>
	</section>
);
