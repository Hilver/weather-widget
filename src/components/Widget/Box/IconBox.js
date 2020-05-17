import React from 'react'

import Box from './PlainBox'
import { getImagePath } from '../../../assets'
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
				src={getImagePath(icon)} 
			/>
		</Box>
	)
}

export default IconBox