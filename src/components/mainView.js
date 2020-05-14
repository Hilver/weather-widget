import React from 'react'
import styled from 'styled-components'

import WidgetLegend from './Legend'
import WidgetView from './Widget'

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