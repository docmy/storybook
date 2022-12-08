import styled from "styled-components";

export const WidthIndicator = styled.div`
	display: flex;
	align-items: center;
	background: #f5f5f5;
	padding: 16px 18px;
	border-radius: 12px;
	border: 1px solid #c6c6c6;
`;

export const DetailsContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	margin-left: 8px;

	> span {
		font-weight: 600;
		font-size: 14px;
		line-height: 20px;
		color: #737373;
	}
`;
