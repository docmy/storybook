export type TSubscription = {
	title: string;
	description: string;
};

type SubscriptionDetailsKeys =
	| "figma"
	| "storybook"
	| "unityTests"
	| "react"
	| "i18n";

export type TSubscriptionDetails = {
	[key in SubscriptionDetailsKeys]: TSubscription;
};

export type SubscriptionProps = {
	details: TSubscriptionDetails;
};
