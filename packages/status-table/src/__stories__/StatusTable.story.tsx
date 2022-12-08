import React from "react";
import { ComponentMeta } from "@storybook/react";

import { rows } from "./status.mock";
import StatusTable from "..";

export default {
	title: "components/StatusTable",
	component: StatusTable
} as ComponentMeta<typeof StatusTable>;

export const Default = () => <StatusTable rows={rows} />;
