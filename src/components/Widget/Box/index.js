import React from 'react'
import Box from './PlainBox'
import TemperatureBox from './TemperatureBox'
import RangeBox from './RangeBox'
import IconBox from './IconBox'
import RainBox from './RainBox'
import WindDirectionBox from './WindDirectionBox'
import WindSpeedBox from './WindSpeedBox'
import { getItemHeight } from '../../settings'

const WidgetBox = ({data, temperatureRange, pressureRange}) => {

	return (
		<div>
			<Box height={getItemHeight('day')}></Box>
			<Box height={getItemHeight('hour')}>
				<strong>{data.time}</strong>
			</Box>
			<IconBox
				height={getItemHeight('forecast')}
				icon={data.weather}
			/>
			<TemperatureBox
				height={getItemHeight('temperature')}
				value={data.temp}
				range={temperatureRange}
				fontSize={16}
			/>
			<RainBox 
				height={getItemHeight('rain')}
				rainfall={data.rain}
			/>
			<WindDirectionBox 
				height={getItemHeight('wind-direction')}
				direction={data.wind.direction}
				rotate={data.wind.degree}
			/>
			<WindSpeedBox 
				height={getItemHeight('wind-speed')}
				power={data.wind.power}
				speed={data.wind.speed}
			/>
			<RangeBox
				height={getItemHeight('pressure')} 
				value={data.pressure}
				range={pressureRange}
				fontSize={12}
				cssClass='pressurePoint'
			>
				<strong>{data.pressure} hPa</strong>
			</RangeBox>
		</div>
	)
}

export default WidgetBox