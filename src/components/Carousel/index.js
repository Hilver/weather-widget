import React, { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from '../styled'
import styled from 'styled-components'
import { 
	BoxesContainer,
	HandPointer,
	WhiteLeftArrow,
	WhiteRightArrow
} from '../styled/'
import { getImagePath } from '../../assets/'
import { mainTheme } from '../settings'

const MainView = styled.div`
	position: relative;
	display: flex;
	width: ${props => props.theme.viewportWidth}px;
	height: auto;
	overflow-x: hidden;
	scroll-behavior: ${props => props.mouseOnArrow ? 'smooth' : 'auto'};
	cursor: ${props => props.showCursor ? 'none' : 'grab'};

	&:hover {
		overflow-x: scroll;
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
		
		carousel.scrollLeft = (accumulatorOffsetLeft.current + walk) * mainTheme.carousel.scrollSpeed
		carousel.firstChild.style.transform = `translateX(${-((transOffsetLeft) * mainTheme.carousel.scrollSpeed)}px)`
		
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
		  
		if (transOffsetLeft < 0 || transOffsetLeft * mainTheme.carousel.scrollSpeed > end) {
			setIsMouseDown(false)
			const transOffsetLeftPosition = transOffsetLeft < 0 ? 0 : end

			const adjustToScrollSpeed = 1 / mainTheme.carousel.scrollSpeed
			setTransOffsetLeft(() => transOffsetLeftPosition * adjustToScrollSpeed)
			accumulatorOffsetLeft.current = transOffsetLeftPosition * adjustToScrollSpeed
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
		carousel.scrollLeft = (accumulatorOffsetLeft.current + value) * mainTheme.carousel.scrollSpeed
		accumulatorOffsetLeft.current = accumulatorOffsetLeft.current + value
		carousel.firstChild.style.transform = `translateX(${-((transOffsetLeft + value) * mainTheme.carousel.scrollSpeed)}px)`
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
			showCursor={isMouseDown}
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