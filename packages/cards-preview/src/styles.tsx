import styled from "styled-components";

export const List = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 64px);
	grid-gap: 8px;
	justify-content: space-around;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> span {
		font-size: 16px;
		font-weight: 500;
		color: #8593a5;
		white-space: nowrap;
		margin-bottom: 8px;
	}
`;

export const Card = styled.div`
	width: 100%;
	min-width: 64px;
	aspect-ratio: 1/1;
	background: #ffffff;
	border-radius: 8px;
`;
