import React from "react";

export type IconsPreviewProps = {
	searchInput?: {
		icon?: React.ReactNode;
		placeholder?: string;
	};
	icons: {
		[variant: string]: any;
	};
};
