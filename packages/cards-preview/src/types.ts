import { CSSProperties } from "react";

type VariantsType =
	| {
			className: string;
			styles?: CSSProperties;
	  }
	| {
			className?: string;
			styles: CSSProperties;
	  };

export type CardPreviewProps =
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
	  };
