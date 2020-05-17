import styled from 'styled-components'
import { LeftArrow, RightArrow } from '@styled-icons/boxicons-solid'

export const HandPointer = styled.img`
	position: fixed;
	top: ${props => props.top - 25}px;
	left: ${props => props.left - 25}px;
	margin: 0px;
	padding: 0px;
	width: 45px;
	display: ${props => props.show ? 'block' : 'none'};
`

export const WhiteLeftArrow = styled(LeftArrow)`
	color: #ffffff;
	width: 25px;
	padding-right: 15px;
`

export const WhiteRightArrow = styled(RightArrow)`
	color: #ffffff;
	width: 25px;
	padding-left: 15px;
`

export const BoxesContainer = styled.div`
	display: flex;
	width: ${props => props.items * 101}px;
	height: auto;
	transition: ${props => props.isMouseDown ? 'transform: 0.1s ease-out' : 'transform 0.5s cubic-bezier(.25,.72,.51,.96)'};
`