import {
	SubscriptionsType,
	TDataGridColumns,
	TDataGridRows,
	Status
} from "../types";

export const superscription: SubscriptionsType = [
	{
		title: "Figma",
		description:
			"Todos os casos de uso foram prototipados no Figma e podem ser usados como referência"
	},
	{
		title: "Storybook",
		description: "O componente está devidamente documentado no Storybook"
	},
	{
		title: "Testes Unitário",
		description: "Os testes unitários para o componente foram escritos"
	},
	{
		title: "React",
		description: "O componente está pronto para ser usado pelo desenvolvedor"
	},
	{
		title: "i18n",
		description: "O texto foi verificado e traduzido em cada idioma suportado"
	}
];

export const rows: TDataGridRows = [
	{
		component: {
			name: "Button",
			status: Status.READY,
			group: "Inputs"
		},
		figma: Status.READY,
		storybook: Status.READY,
		tests: Status.READY,
		react: Status.READY,
		i18n: Status.READY
	},
	{
		component: {
			name: "Autocomplete",
			status: Status.IN_PROGRESS,
			group: "Inputs"
		},
		figma: Status.READY,
		storybook: Status.IN_PROGRESS,
		tests: Status.IN_PROGRESS,
		react: Status.IN_PROGRESS,
		i18n: Status.NA
	},
	{
		component: {
			name: "TextField",
			status: Status.IN_QUEUE,
			group: "Inputs"
		},
		figma: Status.IN_QUEUE,
		storybook: Status.IN_QUEUE,
		tests: Status.IN_QUEUE,
		react: Status.IN_QUEUE,
		i18n: Status.IN_QUEUE
	},
	{
		component: {
			name: "Avatar",
			status: Status.READY,
			group: "DataDisplay"
		},
		figma: Status.READY,
		storybook: Status.READY,
		tests: Status.READY,
		react: Status.READY,
		i18n: Status.READY
	},
	{
		component: {
			name: "Badge",
			status: Status.NA,
			group: "DataDisplay"
		},
		figma: Status.NA,
		storybook: Status.NA,
		tests: Status.NA,
		react: Status.NA,
		i18n: Status.NA
	},
	{
		component: {
			name: "Alert",
			status: Status.READY,
			group: "Feedback"
		},
		figma: Status.READY,
		storybook: Status.READY,
		tests: Status.READY,
		react: Status.READY,
		i18n: Status.READY
	},
	{
		component: {
			name: "Dialog",
			status: Status.READY,
			group: "Feedback"
		},
		figma: Status.READY,
		storybook: Status.READY,
		tests: Status.READY,
		react: Status.READY,
		i18n: Status.READY
	},
	{
		component: {
			name: "Skeleton",
			status: Status.NA,
			group: "Feedback"
		},
		figma: Status.NA,
		storybook: Status.NA,
		tests: Status.NA,
		react: Status.NA,
		i18n: Status.NA
	}
];
