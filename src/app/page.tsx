"use client"

import { useRef, useState, useEffect } from "react"

import styles from "./page.module.css"
import Notification from "@/app/components/Notification"
import Loader from "@/app/components/Loader"
import { getNotifications } from "@/app/utils"
import { NotificationType } from "@/app/types"

export default function Home() {
	const listRef = useRef<HTMLDivElement>(null)
	const [notifications, setNotifications] = useState<NotificationType[]>(
		getNotifications()
	)
	const [isLoading, setLoading] = useState<boolean>(false)

	const handleOnScroll = () => {
		if (listRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = listRef.current
			if (scrollTop + clientHeight === scrollHeight) {
				setLoading(true)
				setTimeout(() => {
					setNotifications([...notifications, ...getNotifications()])
				}, 2000)
			}
		}
	}

	useEffect(() => {
		setLoading(false)
	}, [notifications.length])

	return (
		<main className={styles.main} ref={listRef} onScroll={handleOnScroll}>
			<div className={styles.container}>
				<h1 className={styles.sectionTitle}>Your Notifications</h1>
				{notifications.map((notification) => (
					<Notification key={notification.id} {...notification} />
				))}
				{isLoading && (
					<div className={styles.loaderWrapper}>
						<Loader />
					</div>
				)}
			</div>
		</main>
	)
}
