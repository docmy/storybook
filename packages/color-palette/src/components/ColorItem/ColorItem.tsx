import React from "react";

import * as T from "./types";
import * as S from "./styles";

const ColorPallete: React.FC<T.ColorItemProps> = ({
	title,
	subtitle,
	colors
}) => (
	<S.Root>
		<S.DescriptionContainer>
			<label>{title}</label>
			<p>{subtitle}</p>
		</S.DescriptionContainer>

		<S.PalleteList>
			{Object.keys(colors).map((key, idx) => (
				<S.PalleteItem key={idx}>
					<S.PalletePreview style={{ background: colors[key] }} />

					<S.PalletePreviewDetails>
						<span>{key}</span>
						<span>{colors[key]}</span>
					</S.PalletePreviewDetails>
				</S.PalleteItem>
			))}
		</S.PalleteList>
	</S.Root>
);

export default ColorPallete;
