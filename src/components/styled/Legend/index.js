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
	width: 100px;
	height: ${props => props.height || 20}px;
	border-bottom: 1px solid #dedede;
	color: #dedede;
`