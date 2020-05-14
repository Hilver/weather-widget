import styled from 'styled-components'

export const RangeContainer = styled.div`
	position: relative;
	width: 100px;
	height: ${props => props.height || 0}px;
	border-right: 1px solid grey;
`

export const Point = styled.div`
	position: absolute;
	bottom: ${props => `${props.position}px`};
	left: 50%;
	transform: translate(-50%, 0%);
	border: 1px solid black;
	border-radius: 50%;
	padding: 4px;
	background-color: #ffffff;
	z-index: 11;
`

export const Label = styled.div`
	position: absolute;
	bottom: ${props => `${props.position + 18}px`};
	left: 50%;
	transform: translate(-50%, 0%);
`