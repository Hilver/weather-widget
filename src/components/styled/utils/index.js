import styled from 'styled-components'

export const Box = styled.div`
	display: flex;
	justify-content: ${props => props.justifyContent || 'center'};
	flex-direction: ${props => props.flexDirection || 'row'};
	align-items: ${props => props.alignItems || 'center'};
	width: 100px;
	height: ${props => `${props.height}px` || 'auto'};
	border-right: ${props => `1px solid ${props.borderColor || 'grey'}`};
	background-color: ${props => props.backgroundColor || 'none'};
`

export const IconImg = styled.img`
	width: auto;
	height: ${props => props.height || 'auto'}px;
	transform: ${props => `rotate(${props.rotate || 0}deg)`};
`
