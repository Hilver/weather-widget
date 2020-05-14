import React from 'react'
import styled from 'styled-components'

import WidgetLegend from './widgetLegend'
import WidgetView from './widgetView'

const MainView = styled.div`
	display: flex;
	width: auto;
	height: auto;
`

const mainView = () => {

	return (
		<MainView>
			<WidgetLegend />
			<WidgetView />
		</MainView>
	)
}

export default mainView