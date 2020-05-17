import React, { useMemo } from 'react'

import Box from './PlainBox'

const RainBox = ({height, rainfall}) => {
	const memoizedRainfallValue = useMemo(() => rainfall.toString().replace('.', ','), [rainfall])
	const memoizedRainfallHeight = useMemo(() => rainfall * 10, [rainfall])

	return (
		<Box 
			flexDirection='column'			
			height={height} 
			justifyContent='flex-end' 
			alignItems='center'
		>
			<div>{rainfall !== 0 && `${memoizedRainfallValue} mm`}</div>
			<div style={{ 
				width: '100%', 
				borderTop: `${memoizedRainfallHeight}px solid #03f4fc`}}
			>
			</div>
		</Box>
	)
}

export default RainBox