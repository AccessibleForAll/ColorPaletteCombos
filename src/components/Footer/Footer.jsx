import React from "react"
import { AiOutlineGithub } from "react-icons/ai"

import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerDiv}>
				<a
					href="https://github.com/AccessibleForAll/ColorPaletteCombos"
					className="github-link">
					GitHub
				</a>
				<AiOutlineGithub />
			</div>
			<div className={styles.footerDiv}>
				<p>Having issues?</p>
				<a
					href="https://github.com/AccessibleForAll/ColorPaletteCombos/issues/new?assignees=&labels=&template=bug_report.md&title="
					className="new-issue-link">
					Report a bug
				</a>
			</div>
		</footer>
	)
}

export default Footer
