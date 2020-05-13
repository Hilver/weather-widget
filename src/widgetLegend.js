import React from 'react'

import styled from 'styled-components'
import { widgetItems } from './settings'

const Legend = styled.div`
	min-width: 100px;
	height: auto;
`
const LegendItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100px;
	height: ${props => props.height || 20}px;
	border-bottom: 1px solid #dedede;
	color: #dedede;
`

const WidgetLegend = () => {
	return (
		<Legend>
			{widgetItems.map((item, index) => {
				return (
					<LegendItem key={index} height={item.height}>
						{item.name}
					</LegendItem>
				)
			})}
		</Legend>
	)
}

export default WidgetLegend