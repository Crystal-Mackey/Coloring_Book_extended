import React, { useState } from "react";
import Hippo from "./hippo";
import Colors from "../../colorPalette/Colors";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";



function HippoPage() {
  const [fillColors, setFillColors] = useState(Array(18).fill("white"));
  const [currentColor, setCurrentColor] = useState("blue");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };


  

  
  return (
    <div>
      <div className="hippo">
        
       <Hippo fillColors={fillColors} onFill={onFillColor} /> 
      </div>
      <div>
        <Colors currentColor={currentColor} changeColor={setCurrentColor} />
        <div className="sharebuttons">
        <FacebookShareButton
        url={"https://coloringpagemintbean.herokuapp.com/hippo"}
        quote={"Look at what I made!"}
        hashtag={"#coloring"}
        description={"Hippo coloring page"}
        className="Hippofacebookbutton"
      >
      <FacebookIcon size={32} round /> Share
    </FacebookShareButton>
    <TwitterShareButton
        title={"Hippo"}
        url={"https://coloringpagemintbean.herokuapp.com/hippo"}
        hashtags={["Hippo", "color"]}
      >
        <TwitterIcon size={32} round />
        Share
      </TwitterShareButton>
      <LinkedinShareButton
      title={"Hippo"}
      url={"https://coloringpagemintbean.herokuapp.com/hippo"}
      summary={"A coloring page of a simple hippo"}>
        <LinkedinIcon size={32} round /> Share
      </LinkedinShareButton>
      
    
    
    
    
    </div>
      </div>
    </div>
  );
}

export default HippoPage;