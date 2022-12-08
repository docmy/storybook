import styled, { css } from "styled-components";

type ListAttrs = {
	showLimits: boolean;
};

export const Preview = styled.li`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	color: #8593a5;
	width: fit-content;

	> span {
		display: flex;
		justify-content: space-between;
		font-weight: 500;
		margin-bottom: 4px;
	}
`;

export const List = styled.ul<ListAttrs>`
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0px;
	margin: 0px;
	cursor: pointer;

	> :not(:first-child) {
		margin-top: 16px;
	}

	${({ showLimits }) =>
		showLimits &&
		css`
			${Preview} {
				> label {
					width: fit-content;
					background: rgba(252, 255, 128, 0.2);
					outline: 1px solid #dcde62;
					user-select: none;
				}
			}
		`}
`;
