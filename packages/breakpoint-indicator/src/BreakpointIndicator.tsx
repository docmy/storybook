import React from "react";

import DesktopIcon from "./components/DesktopIcon";
import TabletIcon from "./components/TabletIcon";
import MobileIcon from "./components/MobileIcon";

import * as T from "./types";
import * as S from "./styles";

const Icons: { [key in T.DeviceTypes]: React.FC } = {
	desktop: DesktopIcon,
	tablet: TabletIcon,
	mobile: MobileIcon
};

const fallbackLabel: { [key in T.DeviceTypes]: string } = {
	desktop: "Desktop",
	tablet: "Tablet",
	mobile: "Mobile"
};

const BreakpointIndicator: React.FC<T.BreakpointIndicatorProps> = ({
	device,
	label,
	width
}) => {
	const Icon = Icons[device];

	return (
		<S.WidthIndicator style={{ width }}>
			<Icon />

			<S.DetailsContainer>
				<span>{label || fallbackLabel[device]}</span>
				<span>{String(width).replace("px", "")}px</span>
			</S.DetailsContainer>
		</S.WidthIndicator>
	);
};

export default BreakpointIndicator;
