import React, { useEffect, useState } from "react"
import { Fade } from "@mui/material"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Div = styled.div`
  width: 25vw;
  height: 100vh;
  background-size: cover;
  transition-delay: 0.2s !important;
  transition-property: filter;
  transition: filter 500ms !important;
  transition-timing-function: ease-in-out !important;
`

const GrayPanel = ({ img }: any) => {
	const [curImageIndex, setIndex] = useState(0)
  const [filter, setFilter] = useState("grayscale(100%)")
	const timeInterval = 10000

	let timer: any = null
	const handleMouseEnter = () => {
		clearTimeout(timer)
		timer = null;

    setFilter(prevState => {
      return prevState == "none" ? "grayscale(100%)" : "none"
    });

    (curImageIndex & 1) === 0 && setIndex((curImageIndex + 1) % img.length)
	}

	const handleMouseLeave = () => {
		clearTimeout(timer)
		timer = null
		timer = setTimeout(() => {
			const newIdx = (curImageIndex + 2) % img.length
			;(curImageIndex & 1) === 0 &&
				newIdx !== curImageIndex &&
				setIndex(newIdx)
		}, timeInterval)

    setFilter(prevState => {
      return prevState == "none" ? "grayscale(100%)" : "none"
    });


		curImageIndex & 1 && setIndex((curImageIndex - 1) % img.length)
	}

	useEffect(() => {
		clearTimeout(timer)
		timer = null
		timer = setTimeout(() => {
			const newIdx = (curImageIndex + 2) % img.length
			;(curImageIndex & 1) === 0 &&
				newIdx !== curImageIndex &&
				setIndex(newIdx)
		}, timeInterval)
	}, [curImageIndex])

	return (
		<>
			<Fade in={true} timeout={2000}>
				<Div
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					style={{ backgroundImage: `url(${img})`, filter: filter }}
          // style={{ opacity: `${opacity}` }}
				/>
			</Fade>
		</>
	)
}

export default GrayPanel
