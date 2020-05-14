import React from 'react'

import RangeBox from './RangeBox'

const TemperatureBox = ({
	value, 
	height,
	range
}) => {

	return (
		<RangeBox
			value={value} 
			height={height}
			range={range}
			cssClass='temperaturePoint'
		>
			{value} &deg;
		</RangeBox>
	)
}

export default TemperatureBox