import React from "react";

import * as T from "./types";
import * as S from "./styles";

const Subscription: React.FC<T.SubscriptionProps> = ({ details }) => (
	<S.SubscriptionList>
		{Object.values(details).map((detail, idx) => (
			<S.SubscriptionItem key={idx}>
				<strong>{detail.title}</strong>
				<p>{detail.description}</p>
			</S.SubscriptionItem>
		))}
	</S.SubscriptionList>
);

export default Subscription;
