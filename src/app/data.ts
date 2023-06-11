import { NotificationType, IconType } from "@/app/types"

export const NOTIFICATION_TYPES: NotificationType[] = [
	{
		id: "1",
		icon: IconType.Heart,
		authors: ["ellie", "kassadin"],
		title: "+4 others liked your post",
		description:
			"Received DAI worth $105 at Bscscan and swapped it for sUSD at 1inch Network. Transferred the sUSD to Safock. Cast at Safock.",
		showCta: false,
	},
	{
		id: "2",
		icon: IconType.Person,
		authors: ["ellie", "kassadin"],
		title: "+32 others followed you",
		description: "",
		showCta: false,
	},
	{
		id: "3",
		icon: IconType.Message,
		authors: ["ellie", "kassadin"],
		title: "+4 others commented on your activity",
		description:
			"Received DAI worth $105 at Bscscan and swapped it for sUSD at 1inch Network. Transferred the sUSD to Safock. Cast at Safock",
		showCta: false,
	},
	{
		id: "4",
		icon: IconType.ThreeDots,
		authors: ["ellie"],
		title: "Community suggested changes to bundle",
		description:
			"Name: Ellie Rose (previously Ellias RT) Wallets: Added 0xA87J, 0x89NH to bundle",
		showCta: false,
	},
	{
		id: "5",
		icon: IconType.ThreeDots,
		authors: ["ellie"],
		title: "Community suggested changes to bundle",
		description:
			"Name: Ellie Rose (previously Ellias RT) Wallets: Added 0xA87J, 0x89NH to bundle",
		showCta: true,
	},
]
