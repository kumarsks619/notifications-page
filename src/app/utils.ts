import { NOTIFICATION_TYPES } from "@/app/data"

import { NotificationType } from "@/app/types"

export const generateUUID = (): string => {
	var dt = new Date().getTime()
	var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (dt + Math.random() * 16) % 16 | 0
		dt = Math.floor(dt / 16)
		return (c == "x" ? r : (r & 0x3) | 0x8).toString(16)
	})
	return uuid
}

export const getNotifications = (): NotificationType[] => {
	return new Array(15).fill(1).map((_, i) => {
		return {
			...NOTIFICATION_TYPES[i % 5],
			id: generateUUID(),
		}
	})
}
