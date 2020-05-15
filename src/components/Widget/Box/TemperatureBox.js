import React from 'react'

import RangeBox from './RangeBox'

const TemperatureBox = ({
	value, 
	height,
	fontSize,
	range
}) => {

	return (
		<RangeBox
			value={value} 
			height={height}
			range={range}
			fontSize={fontSize}
			cssClass='temperaturePoint'
		>
			<strong>{value} &deg;</strong>
		</RangeBox>
	)
}

export default TemperatureBox