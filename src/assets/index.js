import closed_hand from './closedhand.svg'
import rain from './rain.png'
import wind_arrow from './wind_arrow.png'

const weatherIcons = {
	closed_hand,
	rain,
	wind_arrow
}

export const getImagePath = name => weatherIcons[name]