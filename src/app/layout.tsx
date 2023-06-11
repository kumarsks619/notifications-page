import "./globals.css"
import { Work_Sans } from "next/font/google"

const workSans = Work_Sans({ subsets: ["latin"] })

export const metadata = {
	title: "Notifications | 0xppl",
	description: "Assignment for 0xppl",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={workSans.className}>{children}</body>
		</html>
	)
}
