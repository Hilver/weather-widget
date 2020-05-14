import React from 'react'

import {RangeContainer, Label, Point } from '../../styled/'

const RangeBox = ({height, children, value, cssClass, range}) => {
	const rangeValue = range.max - range.min
	const calculatedPosition = (value - range.min) * Math.floor((height - 20) / rangeValue)
	console.log({calculatedPosition, value, rangeMin: range.min})
	return (
		<RangeContainer height={height}>
			<Label position={calculatedPosition}>
				{children}
			</Label>
			<Point position={calculatedPosition} className={cssClass}/>
		</RangeContainer>
	)
}

export default RangeBox