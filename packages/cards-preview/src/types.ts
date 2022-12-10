import React, { CSSProperties } from "react";

type VariantsType =
	| {
			className: string;
			styles?: CSSProperties;
	  }
	| {
			className?: string;
			styles: CSSProperties;
	  };

export type CardPreviewProps = {
	children?: React.ReactNode;
} & (
	| {
			variants: {
				[key: string]: VariantsType;
			};
			keyPrefix?: string;
	  }
	| {
			variants: {
				[key: string]: string;
			};
			keyPrefix?: string;
			styleKey: keyof CSSProperties;
	  }
);
