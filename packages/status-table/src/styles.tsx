import styled, { css } from "styled-components";
import { EnumStatusStatus } from "./types";

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 13px;
`;

export const Th = styled.th`
	background: #f5f5f5;
	color: #323e48;
	font-weight: 600;
	font-size: 11px;
	padding: 8px 16px;
	text-align: left;
`;

export const TdGroup = styled.td.attrs({
	colSpan: "100%"
})`
	background: #f9f9f9;
	border: 1px solid #f2f2f2;
	color: #323e48;
	font-weight: 600;
	font-size: 11px;
	padding: 8px 16px;
	text-align: left;
`;

export const Td = styled.td`
	padding: 8px 4px;
	border: 1px solid #f2f2f2;
	text-align: left;

	> span {
		margin-left: 8px;
	}
`;

type BadgeAttrs = {
	status: EnumStatusStatus;
};

export const Badge = styled.span<BadgeAttrs>`
	padding: 2px 4px;
	font-size: 13px;
	border-radius: 4px;

	${({ status }) =>
		status === "NA" &&
		css`
			background: #cccccc;
			color: #666565;
		`}

	${({ status }) =>
		status === "IN_QUEUE" &&
		css`
			background: #fff0ce;
			color: #ffb100;
		`}

	${({ status }) =>
		status === "IN_PROGRESS" &&
		css`
			background: #ffebeb;
			color: #ac5bc4;
		`}

	${({ status }) =>
		status === "READY" &&
		css`
			background: #ddf2d9;
			color: #658937;
		`}
`;
