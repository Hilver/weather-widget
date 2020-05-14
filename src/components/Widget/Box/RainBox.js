import React from 'react'

import Box from './PlainBox'

const RainBox = ({height, rainfall}) => {

	return (
		<Box 
			flexDirection='column'			
			height={height} 
			justifyContent='flex-end' 
			alignItems='center'
		>
			<div>{rainfall !== 0 && `${rainfall} mm`}</div>
			<div style={{ 
				width: '100%', 
				borderTop: `${rainfall * 10}px solid #03f4fc`}}
			>
			</div>
		</Box>
	)
}

export default RainBox