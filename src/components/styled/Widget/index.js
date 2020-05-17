import styled from 'styled-components'
export { RangeContainer, Point, Label } from './Box/RangeBox'

export const WidgetView = styled.div`
	position: relative;
	width: 700px;
	height: auto;
	border-left: 1px solid grey;
	transform: translateZ(0);

	&::before {
		content: '';
		position: absolute;
		width: 0px;
		height: 100%;
		left: 0px;
		top: 0px;
		box-shadow: 2px 0px 10px 3px #aaaaaa;
		z-index: 10;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0px;
		right: 0px;
		height: 100%;
		box-shadow: -5px 0px 60px 35px #ffffff;
		z-index: 10;
	}
`

export const NavigationArrow = styled.div`
	position: fixed;
	top: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 45px;
	height: 90px;
	background-color: #b9bdba;
	opacity: ${props => props.show ? '0.4' : '0'};
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.6;
	}
`
export const ArrowLeft = styled(NavigationArrow)`
	left: 0px;
	border-bottom-right-radius: 90px;
	border-top-right-radius: 90px;
	z-index: 11;
`

export const ArrowRight = styled(NavigationArrow)`
	right: 0px;
	border-bottom-left-radius: 90px;
	border-top-left-radius: 90px;
	z-index: 11;
`