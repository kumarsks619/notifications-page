import Image from "next/image"

import styles from "./notification.module.css"
import Button from "@/app/components/Button"
import { NotificationType, ButtonType } from "@/app/types"

const parseAuthors = (authors: string[]) => {
	return authors.length > 1 ? authors.join(", ") : `${authors[0]}:`
}

const Notification = (props: NotificationType) => {
	return (
		<div className={styles.root}>
			<Image
				src={`/assets/${props.icon}.svg`}
				alt='heart'
				width='18'
				height='18'
				className={styles.icon}
			/>
			<div className={styles.body}>
				<div className={styles.avatars}>
					{props.authors.map((author, i) => (
						<Image
							key={i}
							src={`/assets/avatars/${author}.svg`}
							alt={author}
							width='28'
							height='28'
							className={styles.avatar}
						/>
					))}
				</div>
				<h2 className={styles.title}>
					<span className={styles.highlight}>
						{parseAuthors(props.authors)}
					</span>{" "}
					{props.title}
				</h2>
				<p className={styles.description}>{props.description}</p>
				{props.showCta && (
					<div className={styles.ctas}>
						<Button>Accept</Button>
						<Button type={ButtonType.Secondary}>Discard</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Notification
