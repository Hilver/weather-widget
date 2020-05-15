import React, { useMemo } from 'react'

import {RangeContainer, Label, Point } from '../../styled/'

const RangeBox = ({
	height, 
	children, 
	value,
	fontSize, 
	cssClass, 
	range
}) => {
	const rangeValue = range.max - range.min
	const memoizedCalculatedPosition = useMemo(() => (value - range.min) * Math.floor((height/2) / rangeValue) + 10, [])
	
	return (
		<RangeContainer height={height}>
			<Label fontSize={fontSize} position={memoizedCalculatedPosition}>
				{children}
			</Label>
			<Point position={memoizedCalculatedPosition} className={cssClass}/>
		</RangeContainer>
	)
}

export default RangeBox