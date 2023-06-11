import cx from "classnames"

import styles from "@/app/components/button.module.css"
import { ButtonType } from "@/app/types"

const Button = ({
	children,
	type = ButtonType.Primary,
}: {
	children: React.ReactNode
	type?: ButtonType
}) => {
	return (
		<button
			type='button'
			className={cx(styles.root, {
				[styles.primary]: type === ButtonType.Primary,
				[styles.secondary]: type === ButtonType.Secondary,
			})}
		>
			{children}
		</button>
	)
}

export default Button
