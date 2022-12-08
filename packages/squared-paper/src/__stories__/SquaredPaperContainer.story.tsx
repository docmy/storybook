import React from "react";
import { ComponentMeta } from "@storybook/react";
import SquarePaperContainer from "@docmy/storybook-squared-paper";

import SquaredPaperContainer from "..";

export default {
	title: "components/SquaredPaperContainer",
	component: SquaredPaperContainer
} as ComponentMeta<typeof SquaredPaperContainer>;

export const Default = () => (
	<SquarePaperContainer>Hello Squared Paper Container</SquarePaperContainer>
);
