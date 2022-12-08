import React, { Fragment } from "react";

import { IDataGridProps, Status, TDataGridRows } from "./types";
import * as S from "./styles";

const Badge = ({ status }) => {
	if (!status) return <Fragment />;

	if (status === "IN_QUEUE")
		return (
			<S.Badge status="READY" className="badge badge-in-queue">
				Na fila
			</S.Badge>
		);

	if (status === "IN_PROGRESS")
		return <S.Badge className="badge badge-in-progress">Em andamento</S.Badge>;

	if (status === "READY")
		return <S.Badge className="badge badge-ready">Pronto</S.Badge>;

	return <S.Badge className="badge badge-nd">N/A</S.Badge>;
};

const StatusTable: React.FC<IDataGridProps> = (props) => {
	const { rows, ...restProps } = props;

	const badgeLabels: { [key in Status]: string } = {
		NA: "N/A",
		IN_QUEUE: "Na fila",
		IN_PROGRESS: "Em andamento",
		READY: "Pronto"
	};

	const groupedRows = rows.reduce((arr: TDataGridRows[], x) => {
		if (
			!x.component.group ||
			arr.find((o) => o.find((y) => y.component.group === x.component.group))
		)
			return arr;

		return [
			...arr,
			rows.filter((o) => o.component.group === x.component.group)
		];
	}, []);

	return (
		<S.Table {...restProps}>
			<thead>
				<tr>
					<S.Th style={{ width: "50%" }}>Componente</S.Th>
					<S.Th style={{ width: "10%" }}>Figma</S.Th>
					<S.Th style={{ width: "10%" }}>Storybook</S.Th>
					<S.Th style={{ width: "10%" }}>Testes Unitário</S.Th>
					<S.Th style={{ width: "10%" }}>React</S.Th>
					<S.Th style={{ width: "10%" }}>i18n</S.Th>
				</tr>
			</thead>

			{groupedRows.length <= 0 && (
				<tbody>
					{rows.map((x, i) => (
						<tr key={i}>
							<S.Td>
								{x.component.status && (
									<S.Badge status={x.component.status}>
										{badgeLabels[x.component.status]}
									</S.Badge>
								)}
								<span>{x.component.name}</span>
							</S.Td>

							<S.Td>
								<S.Badge status={x.figma}>{badgeLabels[x.figma]}</S.Badge>
							</S.Td>
							<S.Td>
								<S.Badge status={x.storybook}>
									{badgeLabels[x.storybook]}
								</S.Badge>
							</S.Td>
							<S.Td>
								<S.Badge status={x.tests}>{badgeLabels[x.tests]}</S.Badge>
							</S.Td>
							<S.Td>
								<S.Badge status={x.react}>{badgeLabels[x.react]}</S.Badge>
							</S.Td>
							<S.Td>
								<S.Badge status={x.i18n}>{badgeLabels[x.i18n]}</S.Badge>
							</S.Td>
						</tr>
					))}
				</tbody>
			)}

			{groupedRows.length > 0 && (
				<tbody>
					{groupedRows.map((r, idx) => (
						<Fragment>
							<tr key={idx}>
								<S.TdGroup>{r[0].component.group}</S.TdGroup>
							</tr>

							{groupedRows[idx].map((x, i) => (
								<tr key={i}>
									<S.Td style={{ paddingLeft: "24px" }}>
										{x.component.status && (
											<S.Badge status={x.component.status}>
												{badgeLabels[x.component.status]}
											</S.Badge>
										)}
										<span>{x.component.name}</span>
									</S.Td>

									<S.Td>
										<S.Badge status={x.figma}>{badgeLabels[x.figma]}</S.Badge>
									</S.Td>
									<S.Td>
										<S.Badge status={x.storybook}>
											{badgeLabels[x.storybook]}
										</S.Badge>
									</S.Td>
									<S.Td>
										<S.Badge status={x.tests}>{badgeLabels[x.tests]}</S.Badge>
									</S.Td>
									<S.Td>
										<S.Badge status={x.react}>{badgeLabels[x.react]}</S.Badge>
									</S.Td>
									<S.Td>
										<S.Badge status={x.i18n}>{badgeLabels[x.i18n]}</S.Badge>
									</S.Td>
								</tr>
							))}
						</Fragment>
					))}
				</tbody>
			)}
		</S.Table>
	);
};

export default StatusTable;
