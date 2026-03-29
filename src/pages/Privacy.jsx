import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { siteName } from "../constants/constant";

const Privacy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="min-h-screen bg-background">
			<PageHeader title="Privacy" />
			<article className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto py-12 md:py-16 px-2 max-w-3xl">
				<p className="text-secondary leading-relaxed mb-4">
					This static demo site for {siteName} describes how we treat information you share when you use our contact form or browse these pages. We do not run accounts or payments on this
					deployment—anything you submit in the demo form is only logged to the browser console for illustration.
				</p>
				<p className="text-secondary leading-relaxed mb-4">
					If you connect this project to a real backend later, replace this text with your full privacy policy, data retention rules, and contact details for privacy requests.
				</p>
				<p className="text-secondary leading-relaxed">
					Last updated: {new Date().getFullYear()}.
				</p>
			</article>
		</main>
	);
};

export default Privacy;
