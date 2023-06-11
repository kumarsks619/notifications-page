export enum IconType {
	Heart = "heart",
	Message = "message",
	Person = "person",
	Stars = "stars",
	ThreeDots = "three-dots",
}

export type NotificationType = {
	id: string
	icon: IconType
	authors: string[]
	title: string
	description: string
	showCta: boolean
}

export enum ButtonType {
	Primary = "primary",
	Secondary = "secondary",
}
