import styled from "styled-components";

export const Root = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 1280px;
	margin: 40px 24px;

	& > :not(:first-child) {
		margin-top: 64px;
	}
`;
