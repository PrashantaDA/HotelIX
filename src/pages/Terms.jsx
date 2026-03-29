import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { siteName } from "../constants/constant";

const Terms = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="min-h-screen bg-background">
			<PageHeader title="Terms" />
			<article className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto py-12 md:py-16 px-2 max-w-3xl">
				<p className="text-secondary leading-relaxed mb-4">
					These terms apply to your use of this {siteName} marketing site. Room rates, availability, and policies shown here are placeholders until you connect a real booking engine.
				</p>
				<p className="text-secondary leading-relaxed mb-4">
					For production use, replace this section with governing law, cancellation rules, liability limits, and any local hospitality regulations that apply in your jurisdiction.
				</p>
				<p className="text-secondary leading-relaxed">
					Last updated: {new Date().getFullYear()}.
				</p>
			</article>
		</main>
	);
};

export default Terms;
