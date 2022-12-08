import React, { CSSProperties, useState } from "react";

import * as T from "./types";
import * as S from "./styles";

const Typeset: React.FC<T.TypesetProps> = ({
	variants,
	whitelist,
	previewText
}) => {
	const [showLimits, setShowLimits] = useState(true);
	const currWhitelist = whitelist || Object.keys(variants);

	return (
		<S.List showLimits={showLimits} onClick={() => setShowLimits(!showLimits)}>
			{currWhitelist.map((key, idx) => {
				const variant = variants[key];
				const fontSize =
					typeof variant === "number"
						? String(variant)
						: String(variant.styles.fontSize);
				let styles: CSSProperties;
				let className;

				if (typeof variant === "number") styles = { fontSize: variant };
				else {
					styles = variant.styles;
					className = variant.className;
				}

				return (
					<S.Preview key={idx}>
						<span>
							<span>{key}</span>
							<span>{`${fontSize.replace("px", "")}px`}</span>
						</span>

						<label style={styles} className={className}>
							{previewText}
						</label>
					</S.Preview>
				);
			})}
		</S.List>
	);
};

export default Typeset;
