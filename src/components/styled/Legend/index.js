import styled from 'styled-components'

export const LegendContainer = styled.div`
	min-width: 100px;
	height: auto;
`
export const LegendItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: ${props => props.theme.legend.width}px;
	height: ${props => props.height || 20}px;
	border-bottom: ${props => 
		`${props.theme.legend.bottomBorderWidth}px solid #dedede`};
	color: ${props => props.theme.legend.fontColor};
`