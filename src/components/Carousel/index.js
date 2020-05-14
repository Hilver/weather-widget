import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const MainView = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: auto;
	overflow-x: hidden;

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

const BoxesContainer = styled.div`
	display: flex;
	width: ${props => props.items * 101}px;
	height: auto;
	transition: ${props => props.isMouseDown ? 'transform: 0s ease-out' : 'transform 0.5s cubic-bezier(.25,.72,.51,.96)'};
`

const Carousel = ({children, data}) => {
	const [isMouseDown, setIsMouseDown] = useState(false)
	const [startDragPosition, setStartDragPosition] = useState(0)
	const [currentScrollLeft, setCurrentScrollLeft] = useState(0)
	const carouselRef = useRef()
	const scrollLeft = useRef(currentScrollLeft)

	const handleMouseDown = e => {
		const carousel = carouselRef.current
		setIsMouseDown(true)
		e.preventDefault()

		const _startX = e.pageX - carousel.offsetLeft

		setStartDragPosition(_startX)
	}	

	const handleMouseMove = e => {
		const carousel = carouselRef.current
		if(!isMouseDown) return
			const x = e.pageX - carousel.offsetLeft
			const walk = x - startDragPosition
			
			setCurrentScrollLeft(scrollLeft.current + walk)
			
			carousel.scrollLeft = (scrollLeft.current + walk) * 0.5
			carousel.firstChild.style.transform = `translateX(${-((currentScrollLeft) * 0.5)}px)`

	}

	const handleSnap = () => {
		const carousel = carouselRef.current

		setIsMouseDown(false)
	
		const end = carousel.offsetLeft + carousel.getBoundingClientRect().right
		scrollLeft.current = currentScrollLeft
		  
		if (currentScrollLeft < 0 || currentScrollLeft * 0.5 > end) {
			setIsMouseDown(false)
			const currentScrollLeftPosition = currentScrollLeft < 0 ? 0 : end
			setCurrentScrollLeft(() => currentScrollLeftPosition * 2)
			scrollLeft.current = currentScrollLeftPosition * 2
			carousel.firstChild.style.transform = `translateX(${-currentScrollLeftPosition}px)`
		}
	  };

	const handleMouseUp = () => {
		handleSnap()
	}
	
	const handleMouseLeave = () => {
		handleSnap()
	}

	return (
		<MainView
			onMouseMove={handleMouseMove} 
			onMouseDown={handleMouseDown} 
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseLeave} 
			ref={carouselRef}
		>
			<BoxesContainer id='widget' positionX={currentScrollLeft} items={data.length}>
				{children}
			</BoxesContainer>
		</MainView>
	)
}

export default Carousel