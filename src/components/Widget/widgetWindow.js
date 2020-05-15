import React, { useEffect } from 'react'

import weatherData from '../../data/weather.json'
import WidgetBox from './Box'
import Carousel from '../Carousel'
import Line from '../../helpers/createLine'
import getMinMaxRange from '../../helpers/getMinMaxRange'

const data = weatherData['today']

const minMaxTemperature = getMinMaxRange(data, 'temp')
const minMaxPressure = getMinMaxRange(data, 'pressure')

const WidgetWindow = () => {

	useEffect(() => {
		const widget = document.getElementById('widget')
		const tempPoints = document.getElementsByClassName('temperaturePoint')
		const pressurePoints = document.getElementsByClassName('pressurePoint')
		const temperatureLine = new Line('#f5dd42', 1)
		const pressureLine = new Line()
		const widgetOffsetLeft = widget.getBoundingClientRect().left
		
		for( let i = 0; i < tempPoints.length; i++) {
			if(tempPoints[i+1]) {
				const { x, y } = tempPoints[i].getBoundingClientRect()
				const bx = tempPoints[i+1].getBoundingClientRect().x
				const by = tempPoints[i+1].getBoundingClientRect().y		
				widget.appendChild(temperatureLine(x - widgetOffsetLeft, y - 4, bx - widgetOffsetLeft, by - 4))
			}
		}

		for(let i = 0; i < pressurePoints.length; i++) {
			if(pressurePoints[i+1]) {
				const { x, y } = pressurePoints[i].getBoundingClientRect()
				const bx = pressurePoints[i+1].getBoundingClientRect().x
				const by = pressurePoints[i+1].getBoundingClientRect().y		
				widget.appendChild(pressureLine(x - widgetOffsetLeft, y - 4, bx - widgetOffsetLeft, by - 4))
			}
		}
	},[])

	return (
		<Carousel data={data}>
			{data.map((hourData, index) => {
				return (
					<WidgetBox 
						key={index} 
						data={hourData}
						temperatureRange={minMaxTemperature}
						pressureRange={minMaxPressure}
					/>
				)
			})}
		</Carousel>
	)
}

export default WidgetWindow