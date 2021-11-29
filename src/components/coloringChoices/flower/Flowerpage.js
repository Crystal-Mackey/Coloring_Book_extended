import React, { useState } from "react";
import Flower from "./Flower";
import Colors from "../../colorPalette/Colors";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";



function FlowerPage() {
  const [fillColors, setFillColors] = useState(Array(22).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };


  

  
  return (
    <div>
      <div className="flower">
        
       <Flower fillColors={fillColors} onFill={onFillColor} /> 
      </div>
      <div>
        <Colors currentColor={currentColor} changeColor={setCurrentColor} />
        <div className="sharebuttons">
        <FacebookShareButton
        url={"https://coloringpagemintbean.herokuapp.com/flower"}
        quote={"Look at what I made!"}
        hashtag={"#coloring"}
        description={"flower coloring page"}
        className="flowerfacebookbutton"
      >
      <FacebookIcon size={32} round /> Share
    </FacebookShareButton>
    <TwitterShareButton
        title={"Flower"}
        url={"https://coloringpagemintbean.herokuapp.com/flower"}
        hashtags={["flower", "color"]}
      >
        <TwitterIcon size={32} round />
        Share
      </TwitterShareButton>
      <LinkedinShareButton
      title={"Flower"}
      url={"https://coloringpagemintbean.herokuapp.com/flower"}
      summary={"A coloring page of a simple flower"}>
        <LinkedinIcon size={32} round /> Share
      </LinkedinShareButton>
      
    
    
    
    
    </div>
      </div>
    </div>
  );
}

export default FlowerPage;