export type DeviceTypes = "desktop" | "tablet" | "mobile";

export type BreakpointIndicatorProps = {
	device: DeviceTypes;
	label?: string;
	width: number | string;
};
