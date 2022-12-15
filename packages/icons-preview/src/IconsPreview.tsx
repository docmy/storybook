import React, { useState } from "react";

import * as T from "./types";
import * as S from "./styles";

const IconsPreview: React.FC<T.IconsPreviewProps> = ({
	searchInput,
	icons
}) => {
	const [search, setSearch] = useState("");
	const [variant, setVariant] = useState(Object.keys(icons)[0]);

	const currentIcons = icons[variant];
	const filteredIcons = Object.keys(currentIcons)
		.filter((key) => key.includes(search))
		.reduce((obj, key) => {
			return Object.assign(obj, {
				[key]: currentIcons[key]
			});
		}, {});

	const copyToClipboard = (text: string) => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText)
			return navigator.clipboard.writeText(text);
		return Promise.reject("The Clipboard API is not available.");
	};

	return (
		<S.Root>
			<S.Nav>
				{searchInput.icon && (
					<S.SearchIconContainer>{searchInput.icon}</S.SearchIconContainer>
				)}

				<S.SearchInput
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder={searchInput.placeholder}
				/>

				<S.VariantButtonsList>
					{Object.keys(icons).map((iconVariant, key) => (
						<li key={key}>
							<S.VariantButton
								active={iconVariant === variant}
								onClick={() => setVariant(iconVariant)}
							>
								{iconVariant}
							</S.VariantButton>
						</li>
					))}
				</S.VariantButtonsList>
			</S.Nav>

			<S.IconsTable>
				{Object.keys(filteredIcons).map((icon, key) => (
					<S.IconItem key={key}>
						<S.IconContainer>
							<div>
								{(() => {
									const CurrentIcon = icons[variant][icon];

									return <CurrentIcon />;
								})()}
							</div>

							<S.IconItemActions>
								<button onClick={() => copyToClipboard(icon)}>Copiar</button>
							</S.IconItemActions>
						</S.IconContainer>

						<label>{icon}</label>
					</S.IconItem>
				))}
			</S.IconsTable>
		</S.Root>
	);
};

export default IconsPreview;
