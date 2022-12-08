import React from "react";

import ColorItem from "./components/ColorItem";
import * as T from "./types";
import * as S from "./styles";

const ColorPallete: React.FC<T.ColorPalleteProps> = ({ children }) => {
	return (
		<S.Root>
			<S.Content>{children}</S.Content>
		</S.Root>
	);
};

export default Object.assign(ColorPallete, { ColorItem });
