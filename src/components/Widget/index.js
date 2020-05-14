import React, { useState } from 'react'
import styled from 'styled-components'

import WidgetWindow from './widgetWindow'

const WidgetView = styled.div`
	position: relative;
	width: 700px;
	height: auto;
	border-left: 1px solid grey;
	transform: translateZ(0);

	&:hover {
		cursor: grab;
	}

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

const NavigationArrow = styled.div`
	position: fixed;
	top: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 80px;
	background-color: #f0f0f0;
	opacity: ${props => props.show ? '0.6' : '0'};
	transition: all 0.5s ease;
`
const ArrowLeft = styled(NavigationArrow)`
	left: 0px;
	border-bottom-right-radius: 90px;
	border-top-right-radius: 90px;
	z-index: 11;
`

const ArrowRight = styled(NavigationArrow)`
	right: 0px;
	border-bottom-left-radius: 90px;
	border-top-left-radius: 90px;
	z-index: 11;
`

const widgetView = () => {
	const [show, setShow] = useState(false)

	const showNavigation = () => setShow(true)
	const hideNavigation = () => setShow(false)

	return (
		<WidgetView onMouseEnter={showNavigation} onMouseLeave={hideNavigation}>
			<ArrowLeft show={show}>left</ArrowLeft>
			<ArrowRight show={show}>right</ArrowRight>
			<WidgetWindow/>
		</WidgetView>
	)
}

export default widgetView