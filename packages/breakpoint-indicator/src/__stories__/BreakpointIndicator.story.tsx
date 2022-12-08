import React from "react";
import { ComponentMeta } from "@storybook/react";
import SquaredPaperContainer from "@docmy/storybook-squared-paper";

import BreakpointIndicator from "..";

export default {
	title: "components/BreakpointIndicator",
	component: BreakpointIndicator
} as ComponentMeta<typeof BreakpointIndicator>;

export const Default = () => (
	<SquaredPaperContainer
		style={{ backgroundColor: "#FCFCFC", width: "fit-content" }}
	>
		<BreakpointIndicator device="desktop" label="2xl" width={1536} />
		<BreakpointIndicator device="desktop" label="xl" width={1280} />
		<BreakpointIndicator device="desktop" label="lg" width={1024} />
		<BreakpointIndicator device="tablet" label="md" width={768} />
		<BreakpointIndicator device="tablet" label="sm" width={640} />
		<BreakpointIndicator device="mobile" label="xs" width={375} />
	</SquaredPaperContainer>
);
