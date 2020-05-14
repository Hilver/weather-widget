import React from 'react'

import Box from './PlainBox'
import IconBox from './IconBox'

const WindDirectionBox = ({height, direction, rotate}) => {

	return (
		<Box 
			height={height} 
			borderColor='#ffffff'
			flexDirection='column' 
			alignItems='center' 
			backgroundColor='#F0F0F0'
		>
			<IconBox 
				icon='wind_arrow'
				rotate={rotate}
				borderColor='#ffffff'
			/>
			<div>
				{direction}
			</div>
		</Box>
	)
}

export default WindDirectionBox