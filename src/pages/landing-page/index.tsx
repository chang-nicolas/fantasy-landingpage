import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

import GrayPanel from "../../components/GrayPanel"


const Div = styled.div`
   width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

const mintImg: HTMLImageElement = require("../../assets/image/mint/mint.jpg")


const whitelistImg:HTMLImageElement = require("../../assets/image/whitelist/whitelist.jpg")


const merchImg:HTMLImageElement = require("../../assets/image/merch/model.jpg")


const battleImg:HTMLImageElement = require("../../assets/image/battle/versus.jpg")


const LandingPage = () => {

  // const ImageArray:HTMLImageElement [] = [mintImg, whitelistImg, merchImg, battleImg]
  const ImageArray: { 
    name: string,
    background: HTMLImageElement,
    path: string
   } [] = [
     { name: "Mint", background: mintImg, path: "/mint" },
     { name: "Whitelist", background: whitelistImg, path: "/whitelistImg" },
     { name: "MerchImg", background: battleImg, path: "/merchImg" },
     { name: "BattleImg", background: merchImg, path: "/battleImg" },
   ];
  
	return (
		<Div>
          { ImageArray.map(array => {
            return (
              <Link to={array.path}>
                <GrayPanel img={array.background} />
                
              </Link>
            )
          }) }
        
		</Div>
	)
}

export default LandingPage
