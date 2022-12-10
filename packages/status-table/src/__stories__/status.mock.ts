import { TDataGridRows, EnumStatusStatus } from "../types";
import { TSubscriptionDetails } from "../components/Subscription/types";

export const subscriptionDetails: TSubscriptionDetails = {
	figma: {
		title: "Figma",
		description:
			"Todos os casos de uso foram prototipados no Figma e podem ser usados como referência"
	},
	storybook: {
		title: "Storybook",
		description: "O componente está devidamente documentado no Storybook"
	},
	unityTests: {
		title: "Testes Unitário",
		description: "Os testes unitários para o componente foram escritos"
	},
	react: {
		title: "React",
		description: "O componente está pronto para ser usado pelo desenvolvedor"
	},
	i18n: {
		title: "i18n",
		description: "O texto foi verificado e traduzido em cada idioma suportado"
	}
};

export const rows: TDataGridRows = [
	{
		component: {
			name: "Button",
			status: EnumStatusStatus.READY,
			group: "Inputs"
		},
		figma: EnumStatusStatus.READY,
		storybook: EnumStatusStatus.READY,
		tests: EnumStatusStatus.READY,
		react: EnumStatusStatus.READY,
		i18n: EnumStatusStatus.READY
	},
	{
		component: {
			name: "Autocomplete",
			status: EnumStatusStatus.IN_PROGRESS,
			group: "Inputs"
		},
		figma: EnumStatusStatus.READY,
		storybook: EnumStatusStatus.IN_PROGRESS,
		tests: EnumStatusStatus.IN_PROGRESS,
		react: EnumStatusStatus.IN_PROGRESS,
		i18n: EnumStatusStatus.NA
	},
	{
		component: {
			name: "TextField",
			status: EnumStatusStatus.IN_QUEUE,
			group: "Inputs"
		},
		figma: EnumStatusStatus.IN_QUEUE,
		storybook: EnumStatusStatus.IN_QUEUE,
		tests: EnumStatusStatus.IN_QUEUE,
		react: EnumStatusStatus.IN_QUEUE,
		i18n: EnumStatusStatus.IN_QUEUE
	},
	{
		component: {
			name: "Avatar",
			status: EnumStatusStatus.READY,
			group: "DataDisplay"
		},
		figma: EnumStatusStatus.READY,
		storybook: EnumStatusStatus.READY,
		tests: EnumStatusStatus.READY,
		react: EnumStatusStatus.READY,
		i18n: EnumStatusStatus.READY
	},
	{
		component: {
			name: "Badge",
			status: EnumStatusStatus.NA,
			group: "DataDisplay"
		},
		figma: EnumStatusStatus.NA,
		storybook: EnumStatusStatus.NA,
		tests: EnumStatusStatus.NA,
		react: EnumStatusStatus.NA,
		i18n: EnumStatusStatus.NA
	},
	{
		component: {
			name: "Alert",
			status: EnumStatusStatus.READY,
			group: "Feedback"
		},
		figma: EnumStatusStatus.READY,
		storybook: EnumStatusStatus.READY,
		tests: EnumStatusStatus.READY,
		react: EnumStatusStatus.READY,
		i18n: EnumStatusStatus.READY
	},
	{
		component: {
			name: "Dialog",
			status: EnumStatusStatus.READY,
			group: "Feedback"
		},
		figma: EnumStatusStatus.READY,
		storybook: EnumStatusStatus.READY,
		tests: EnumStatusStatus.READY,
		react: EnumStatusStatus.READY,
		i18n: EnumStatusStatus.READY
	},
	{
		component: {
			name: "Skeleton",
			status: EnumStatusStatus.NA,
			group: "Feedback"
		},
		figma: EnumStatusStatus.NA,
		storybook: EnumStatusStatus.NA,
		tests: EnumStatusStatus.NA,
		react: EnumStatusStatus.NA,
		i18n: EnumStatusStatus.NA
	}
];
