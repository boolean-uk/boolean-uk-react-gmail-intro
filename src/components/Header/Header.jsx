import React from "react";
import HamburgerIcon from "../common/icons/HamburgerIcons";
import SearchBar from "../common/inputs/SearchBar";
export default function Header() {
	return (
		<header className="header">
			<div className="left-menu">
				<HamburgerIcon></HamburgerIcon>

				<img
					src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
					alt="gmail logo"
				/>
			</div>
			<SearchBar></SearchBar>
		</header>
	);
}
