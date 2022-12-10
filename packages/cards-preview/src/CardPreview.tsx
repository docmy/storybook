import React, { CSSProperties } from "react";

import * as T from "./types";
import * as S from "./styles";

const CardPreview: React.FC<T.CardPreviewProps> = ({
	variants,
	keyPrefix = "",
	children,
	...rest
}) => (
	<S.List>
		{Object.keys(variants).map((key, idx) => {
			const variant = variants[key];
			let styles: CSSProperties;
			let classNames;

			if ("styleKey" in rest) styles = { [rest.styleKey]: variant };

			if (typeof variant !== "string") {
				if ("styles" in variant) styles = variant.styles;

				if ("className" in variant) classNames = variant.className;
			}

			return (
				<S.CardContainer>
					<span>{`${keyPrefix}${key}`}</span>
					<S.Card key={idx} style={styles} className={classNames}>
						{children}
					</S.Card>
				</S.CardContainer>
			);
		})}
	</S.List>
);

export default CardPreview;
