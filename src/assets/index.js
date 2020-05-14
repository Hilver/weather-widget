import rain from './rain.png'
import wind_arrow from './wind_arrow.png'

const weatherIcons = {
	rain,
	wind_arrow
}

export const getWeatherIcon = name => weatherIcons[name]