import React from "react";
import { ComponentMeta } from "@storybook/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import icons from "../icons.mock";

import IconsPreview from "..";

export default {
	title: "components/IconsPreview",
	component: IconsPreview
} as ComponentMeta<typeof IconsPreview>;

//

export const Default = () => (
	<IconsPreview
		searchInput={{
			icon: <MagnifyingGlassIcon />,
			placeholder: "Procurar ícone..."
		}}
		icons={icons}
	/>
);
