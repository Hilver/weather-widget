export const widgetItems = [
	{
		item: 'day',
		name: 'Dzień',
		height: 25
	},
	{
		item: 'hour',
		name: 'Godzina',
		height: 35
	},
	{
		item: 'forecast',
		name: 'Prognoza',
		height: 40
	},
	{
		item: 'temperature',
		name: 'Temperatura',
		height: 120
	},
	{
		item: 'rain',
		name: 'Opady',
		height: 50
	},
	{
		item: 'wind-direction',
		name: 'Kierunek wiatru',
		height: 70
	},
	{
		item: 'wind-speed',
		name: 'Prędkość wiatru',
		height: 50
	},
	{
		item: 'pressure',
		name: 'Ciśnienie',
		height: 100
	},
]

export const getItemHeight = item => widgetItems.filter(el => el.item === item)[0].height + 1

export const globalStyles = {
	borderColor: '#dedede',
	widgetItem: {
		width: 100
	},
	fontColor: {
		main: '#000000'
	}
}