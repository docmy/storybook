import React from "react";
import { ComponentMeta } from "@storybook/react";

import colors from "./colors.mock";
import ColorPalette from "..";

export default {
	title: "components/ColorPalette",
	component: ColorPalette
} as ComponentMeta<typeof ColorPalette>;

export const Default = () => (
	<ColorPalette>
		<ColorPalette.ColorItem
			title="Neutral"
			subtitle="Essas cores são usadas como cores secundárias de suporte em planos de fundo, cores de texto, separadores, modelos, etc."
			colors={colors.neutral}
		/>

		<ColorPalette.ColorItem
			title="Primary"
			subtitle="A paleta de cores primárias é usada em todos os elementos interativos, como CTAs, links, entradas, estados ativos, etc."
			colors={colors.primary}
		/>

		<ColorPalette.ColorItem
			title="Success"
			subtitle="Essas cores transmitem uma emoção de positividade. Geralmente usado em estados completos e bem-sucedidos."
			colors={colors.success}
		/>

		<ColorPalette.ColorItem
			title="Warning"
			subtitle="Essas cores transmitem a sensação de cautela. Geralmente usado em estados de aviso."
			colors={colors.warning}
		/>

		<ColorPalette.ColorItem
			title="Destructive"
			subtitle="Essas cores transmitem uma emoção de negatividade. Geralmente usado em estados de erro."
			colors={colors.destructive}
		/>
	</ColorPalette>
);
