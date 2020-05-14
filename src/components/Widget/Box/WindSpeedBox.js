import React from 'react'

import Box from './PlainBox'

const WindSpeedBox = ({height, power, speed}) => {

	return (
		<Box 
			height={height} 
			borderColor='#ffffff' 
			flexDirection='column' 
			backgroundColor='#F0F0F0'
		>
			<div>
				{power}
			</div>
			<div>
				{speed}
			</div>			
		</Box>
	)
}

export default WindSpeedBox
