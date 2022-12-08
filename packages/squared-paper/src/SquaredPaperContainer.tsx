import styled from "styled-components";

const GridContainer = styled.div`
	background-image: linear-gradient(0deg, transparent 31px, #ebedef 32px),
		linear-gradient(90deg, transparent 31px, #ebedef 32px);
	background-size: 32px 32px;
	background-color: #f8fafc;
	border: 1px solid #ebedef;
	border-radius: 8px;
	padding: 24px 16px;
	margin-bottom: 24px;
	overflow: hidden;

	> :not(:first-child) {
		margin-top: 64px;
	}
`;

export default GridContainer;
