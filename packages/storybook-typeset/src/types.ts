import { CSSProperties } from "react";

type VariantsType =
	| number
	| {
			className?: string;
			styles?: CSSProperties;
	  };

export type TypesetProps = {
	variants: {
		[key: string]: VariantsType;
	};
	whitelist?: Array<string>;
	previewText: string;
};
