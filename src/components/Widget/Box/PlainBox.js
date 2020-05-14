import React from 'react'
import { Box } from '../../styled'

const PlainBox = ({
	borderColor, 
	backgroundColor, 
	justifyContent, 
	children, 
	alignItems, 
	height, 
	borderBottom, 
	flexDirection
}) => {

	return (
		<Box 
			backgroundColor={backgroundColor} 
			borderColor={borderColor} 
			justifyContent={justifyContent} 
			flexDirection={flexDirection} 
			alignItems={alignItems} 
			height={height} 
			borderBottom={borderBottom}
		>
			{children}
		</Box>		
	)
}

export default PlainBox