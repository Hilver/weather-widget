import React from 'react'
import { ThemeProvider } from 'styled-components'

import MainView from './components/mainView'
import { mainTheme } from './components/settings'

const App = () => {

	return (
		<ThemeProvider theme={mainTheme}>
			<MainView />
		</ThemeProvider>
	)
}

export default App