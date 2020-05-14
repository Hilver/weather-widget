import React from 'react'

import { widgetItems } from '../settings'
import {LegendContainer, LegendItem} from '../styled'

const WidgetLegend = () => {
	return (
		<LegendContainer>
			{widgetItems.map((menuItem, index) => {
				return (
					<LegendItem key={index} height={menuItem.height}>
						{menuItem.name}
					</LegendItem>
				)
			})}
		</LegendContainer>
	)
}

export default WidgetLegend