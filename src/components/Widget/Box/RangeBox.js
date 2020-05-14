import React, { useMemo } from 'react'

import {RangeContainer, Label, Point } from '../../styled/'

const RangeBox = ({height, children, value, cssClass, range}) => {
	const rangeValue = range.max - range.min
	const memoizedCalculatedPosition = useMemo(() => (value - range.min) * Math.floor((height - 20) / rangeValue), [])
	
	return (
		<RangeContainer height={height}>
			<Label position={memoizedCalculatedPosition}>
				{children}
			</Label>
			<Point position={memoizedCalculatedPosition} className={cssClass}/>
		</RangeContainer>
	)
}

export default RangeBox