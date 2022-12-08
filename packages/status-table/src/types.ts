export enum EnumStatusStatus {
	NA = "NA",
	IN_QUEUE = "IN_QUEUE",
	IN_PROGRESS = "IN_PROGRESS",
	READY = "READY"
}

export type TComponentStatus = {
	component: {
		name: string;
		status?: EnumStatusStatus;
		group?: string;
	};
	figma: EnumStatusStatus;
	storybook: EnumStatusStatus;
	tests: EnumStatusStatus;
	react: EnumStatusStatus;
	i18n: EnumStatusStatus;
};

type TDataGridColumnComponent = {
	key: "component.name";
	label?: string;
};

export type TDataGridColumns = [
	TDataGridColumnComponent,
	...Array<{
		key: keyof TComponentStatus;
		label?: string;
	}>
];

export type TDataGridRows = Array<TComponentStatus>;

export interface IDataGridProps
	extends React.TableHTMLAttributes<HTMLTableElement> {
	rows: TDataGridRows;
}
