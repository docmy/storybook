import React from "react";
import { ComponentMeta } from "@storybook/react";
import SquarePaperContainer from "@docmy/storybook-squared-paper";

import fontSizes from "./fontSizes.mock";
import Typeset from "..";

export default {
	title: "components/Typeset",
	component: Typeset
} as ComponentMeta<typeof Typeset>;

export const Default = () => (
	<SquarePaperContainer>
		<Typeset variants={fontSizes} previewText="Luke, eu sou seu pai" />
	</SquarePaperContainer>
);
