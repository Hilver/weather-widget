import React from 'react'

import Box from './PlainBox'
import { getWeatherIcon } from '../../../assets'
import {IconImg} from '../../styled/'

const IconBox = ({borderColor, height, icon, rotate}) => {

	return (
		<Box
			height={height}
			borderColor={borderColor}
		>
			<IconImg 
				rotate={rotate}
				height={height} 
				src={getWeatherIcon(icon)} 
			/>
		</Box>
	)
}

export default IconBox