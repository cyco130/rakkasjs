import { ReactNode, useEffect } from "react";
import { useLocation } from "rakkasjs";

export default function MainLayout({ children }: { children: ReactNode }) {
	useEffect(() => {
		document.body.classList.add("hydrated");
	});

	const { pending } = useLocation();

	return (
		<>
			<header>This is a shared header.</header>
			<hr />
			{children}
			<hr />
			<footer>
				This is a shared footer.{pending && <p>Navigating to: {pending}</p>}
			</footer>
		</>
	);
}
