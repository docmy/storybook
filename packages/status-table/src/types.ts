export enum Status {
	NA = "NA",
	IN_QUEUE = "IN_QUEUE",
	IN_PROGRESS = "IN_PROGRESS",
	READY = "READY"
}

type SubscriptionType = {
	title: string;
	description: string;
};

export type SubscriptionsType = Array<SubscriptionType>;

export type ComponentStatus = {
	component: {
		name: string;
		status?: Status;
		group?: string;
	};
	figma: Status;
	storybook: Status;
	tests: Status;
	react: Status;
	i18n: Status;
};

type TDataGridColumnComponent = {
	key: "component.name";
	label?: string;
};

export type TDataGridColumns = [
	TDataGridColumnComponent,
	...Array<{
		key: keyof ComponentStatus;
		label?: string;
	}>
];

export type TDataGridRows = Array<ComponentStatus>;

export interface IDataGridProps
	extends React.TableHTMLAttributes<HTMLTableElement> {
	rows: TDataGridRows;
}
