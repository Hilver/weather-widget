import React, { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from '../styled'
import { LeftArrow, RightArrow } from '@styled-icons/boxicons-solid'
import styled from 'styled-components'
import { getImagePath } from '../../assets/'

const HandPointer = styled.img`
	position: fixed;
	top: ${props => props.top - 25}px;
	left: ${props => props.left - 25}px;
	margin: 0px;
	padding: 0px;
	width: 45px;
	display: ${props => props.show ? 'block' : 'none'};
`

const WhiteLeftArrow = styled(LeftArrow)`
	color: #ffffff;
	width: 25px;
	padding-right: 15px;
`

const WhiteRightArrow = styled(RightArrow)`
	color: #ffffff;
	width: 25px;
	padding-left: 15px;
`

const MainView = styled.div`
	position: relative;
	display: flex;
	width: 700px;
	height: auto;
	overflow-x: hidden;
	scroll-behavior: ${props => props.mouseOnArrow ? 'smooth' : 'auto'};

	&:hover {
		overflow-x: scroll;
		cursor: ${props => props.isMouseDown ? 'none' : 'grab'};
	}

	::-webkit-scrollbar {
		height: 4px;
		width: 5px; 
		border: 2px solid #dedede;
	}

	::-webkit-scrollbar-thumb {
		background: #4d4e4f;
		border-radius: 15px;
	}
`

const BoxesContainer = styled.div`
	display: flex;
	width: ${props => props.items * 101}px;
	height: auto;
	transition: ${props => props.isMouseDown ? 'transform: 0.1s ease-out' : 'transform 0.5s cubic-bezier(.25,.72,.51,.96)'};
`

const Carousel = ({children, data}) => {
	const [isMouseDown, setIsMouseDown] = useState(false)
	const [startDragPosition, setStartDragPosition] = useState(0)
	const [transOffsetLeft, setTransOffsetLeft] = useState(0)
	const [cursorPosition, setCursorPosition] = useState({
		x: 0,
		y: 0
	})
	const [showArrow, setShowArrow] = useState({
		left: false,
		right: false
	})
	const [mouseOnArrow, setMouseOnArrow] = useState(false)
	const carouselRef = useRef()
	const accumulatorOffsetLeft = useRef(transOffsetLeft)

	const handleMouseDown = e => {
		const carousel = carouselRef.current
		setIsMouseDown(true)
		e.preventDefault()

		const _startX = e.pageX - carousel.offsetLeft

		setStartDragPosition(_startX)
		setCursorPosition({
			x: e.pageX - carousel.getBoundingClientRect().left,
			y: e.pageY - carousel.getBoundingClientRect().top
		})
	}

	const handleMouseMove = e => {
		const carousel = carouselRef.current
		if(!isMouseDown) return

		const x = e.pageX - carousel.offsetLeft
		const walk = -(x - startDragPosition)
		
		setTransOffsetLeft(accumulatorOffsetLeft.current + walk)
		
		carousel.scrollLeft = (accumulatorOffsetLeft.current + walk) * 0.5
		carousel.firstChild.style.transform = `translateX(${-((transOffsetLeft) * 0.5)}px)`
		
		if (transOffsetLeft < 20) {
			setShowArrow(prev => ({
				...prev,
				left: transOffsetLeft > 0 ? true : false
			}))
		}
		const carouselOffsetLeft = carousel.getBoundingClientRect().left
		const maxScrollLeft = carousel.offsetWidth + carouselOffsetLeft
		if(carousel.scrollLeft > maxScrollLeft - 20) {
			setShowArrow(prev => ({
				...prev,
				right: carousel.scrollLeft < maxScrollLeft ? true : false
			}))
		}
	}

	const handleSnap = () => {
		const carousel = carouselRef.current

		setIsMouseDown(false)
		
		const end = carousel.offsetLeft + carousel.getBoundingClientRect().right
		accumulatorOffsetLeft.current = transOffsetLeft
		  
		if (transOffsetLeft < 0 || transOffsetLeft * 0.5 > end) {
			setIsMouseDown(false)
			const transOffsetLeftPosition = transOffsetLeft < 0 ? 0 : end

			setTransOffsetLeft(() => transOffsetLeftPosition * 2)
			accumulatorOffsetLeft.current = transOffsetLeftPosition * 2
			carousel.firstChild.style.transform = `translateX(${-transOffsetLeftPosition}px)`
		}
	  };

	const handleMouseUp = () => {
		handleSnap()
	}
	
	const handleMouseLeave = () => {
		handleSnap()
		setShowArrow({
			left: false,
			right: false
		})
	}

	const handleMouseEnter = () => {
		setShowArrow({
			left: true,
			right: true
		})
	}

	const handleArrowsAction = value => {
		const carousel = carouselRef.current

		setTransOffsetLeft(prev => prev + value)
		carousel.scrollLeft = (accumulatorOffsetLeft.current + value) * 0.5
		accumulatorOffsetLeft.current = accumulatorOffsetLeft.current + value
		carousel.firstChild.style.transform = `translateX(${-((transOffsetLeft + value) * 0.5)}px)`
	}

	const handleOnMouseOnArrow = () => setMouseOnArrow(true)
	const handleOnMouseOutArrow = () => setMouseOnArrow(false)

	return (
		<MainView
			onMouseMove={handleMouseMove} 
			onMouseDown={handleMouseDown} 
			onMouseUp={handleMouseUp}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			mouseOnArrow={mouseOnArrow}
			isMouseDown={isMouseDown}
			ref={carouselRef}
		>
			<BoxesContainer id='widget' positionX={transOffsetLeft} items={data.length}>
				{children}
			</BoxesContainer>
			<HandPointer 
			show={isMouseDown} 
			top={cursorPosition.y} 
			left={cursorPosition.x} 
			src={getImagePath('closed_hand')}
			/>
			<ArrowLeft
				onClick={() => handleArrowsAction(-100)} 
				onMouseEnter={handleOnMouseOnArrow}
				onMouseLeave={handleOnMouseOutArrow}
				show={showArrow.left}
			>
				<WhiteLeftArrow />	
			</ArrowLeft>
			<ArrowRight 
				onClick={() => handleArrowsAction(100)} 
				onMouseEnter={handleOnMouseOnArrow}
				onMouseLeave={handleOnMouseOutArrow}
				show={showArrow.right}
			>
				<WhiteRightArrow />
			</ArrowRight>
		</MainView>
	)
}

export default Carousel