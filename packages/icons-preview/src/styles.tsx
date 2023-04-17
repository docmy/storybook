import styled, { css } from "styled-components";

export const Root = styled.div`
	overflow: hidden;

	&,
	& * {
		font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
			BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
			sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
			Noto Color Emoji;
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	height: 72px;
	padding: 8px 24px;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const SearchIconContainer = styled.div`
	height: 24px;
	width: 24px;
	margin-right: 16px;
	color: #64748b;
`;

export const SearchInput = styled.input`
	flex: 1;
	height: 100%;
	border: none;
	outline: none;

	::placeholder {
		color: #64748b;
	}
`;

export const VariantButtonsList = styled.ul`
	display: flex;
	list-style: none;

	> li {
		overflow: hidden;
		border: 1px solid rgb(229, 231, 235);
	}

	> li:first-child {
		border-radius: 4px 0px 0px 4px;
	}

	> li:last-child {
		border-radius: 0px 4px 4px 0px;
	}
`;

type VariantButtonAttrs = {
	active?: boolean;
};

export const VariantButton = styled.button<VariantButtonAttrs>`
	padding: 8px 24px;
	background: transparent;
	border: none;
	cursor: pointer;
	text-transform: capitalize;
	font-weight: 600;

	&:hover {
		background: rgb(248, 250, 252);
	}

	${({ active }) =>
		active &&
		css`
			background: rgb(248, 250, 252);
			color: rgb(139, 92, 246);
		`}
`;

export const IconsTable = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	row-gap: 24px;
	column-gap: 32px;
	padding-top: 40px;
	padding-bottom: 64px;
`;

export const IconItemActions = styled.div`
	position: absolute;
	inset: 0px;
	min-width: 100%;
	min-height: 100%;
	display: none;
	flex-direction: column;

	> button {
		flex: 1;
		margin: 4px;
		color: rgb(100, 116, 139);
		background: rgba(248, 250, 252, 0.94);
		font-weight: 600;
		border: none;
		cursor: pointer;
		border-radius: 8px;

		:hover {
			background: rgba(226, 232, 240, 0.8);
		}
	}

	> :not(:first-child) {
		margin-top: 0px;
	}
`;

export const IconItem = styled.div`
	display: flex;
	flex-direction: column;

	&:hover {
		${IconItemActions} {
			display: flex;
		}
	}
`;

export const IconContainer = styled.div`
	position: relative;
	flex: 1;
	aspect-ratio: 1/1.0625;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgb(229, 231, 235);
	border-radius: 12px;
	color: rgb(15, 23, 42);

	> div {
		height: 24px;
		width: 24px;
	}
`;

export const LabelContainer = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	margin-top: 12px;
	text-align: center;

	&:hover {
		display: flex;
		justify-content: center;
		overflow: visible;

		> label {
			position: relative;
			background-color: #fff;
			border-radius: 8px;
			padding: 0 12px;
		}
	}

	> label {
		font-size: 14px;
		color: rgb(100, 116, 139);
	}
`;
