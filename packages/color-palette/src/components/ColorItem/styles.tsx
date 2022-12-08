import styled from "styled-components";

export const Root = styled.div`
	display: flex;
`;

export const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 300px;

	> label {
		color: #171717;
		font-weight: 500;
	}

	> p {
		color: #737373;
	}
`;

export const PalleteList = styled.ul`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-row-gap: 24px;
	grid-column-gap: 16px;
	padding: 0px;
	margin: 0px 0px 0px 32px;
`;

export const PalleteItem = styled.li`
	flex-direction: column;
	align-items: center;
	list-style: none;
	padding: 0px;
	width: 100%;
`;

export const PalletePreview = styled.div`
	height: 62px;
	width: 100%;
	max-width: 147px;
	border-radius: 4px;
	margin-bottom: 4px;
`;

export const PalletePreviewDetails = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	color: #737373;
`;
