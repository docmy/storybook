import React from "react";
import { ComponentMeta } from "@storybook/react";
import SquarePaperContainer from "@docmy/storybook-squared-paper";

import boxShadow from "./boxShadow.mock";
import CardsPreview from "..";

export default {
	title: "components/CardsPreview",
	component: CardsPreview
} as ComponentMeta<typeof CardsPreview>;

export const Default = () => (
	<SquarePaperContainer>
		<CardsPreview
			variants={boxShadow}
			keyPrefix="shadow-"
			styleKey="boxShadow"
		/>
	</SquarePaperContainer>
);

export const Multiple = () => (
	<SquarePaperContainer>
		<CardsPreview
			variants={{
				red: {
					styles: {
						background: "rgba(255, 0, 0, 0.2)",
						border: "2px solid red"
					}
				},
				green: {
					styles: {
						background: "rgba(0, 255, 0, 0.2)",
						border: "2px solid green"
					}
				},
				blue: {
					styles: {
						background: "rgba(0, 0, 255, 0.2)",
						border: "2px solid blue"
					}
				}
			}}
		/>
	</SquarePaperContainer>
);
