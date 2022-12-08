import styled from "styled-components";

export const SubscriptionList = styled.ul`
	font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 13px;
	background: #f7f7f7;
	color: #616161;
	list-style: none;
	padding: 16px 24px;
	border-radius: 4px;
`;

export const SubscriptionItem = styled.li`
	display: flex;

	> strong {
		width: 150px;
	}

	> p {
		flex: 1;
		margin: 0px;
	}

	&:not(:last-child) {
		margin-bottom: 16px;
	}
`;
