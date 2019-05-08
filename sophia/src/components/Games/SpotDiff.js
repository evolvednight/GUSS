import React, { Component } from "react";
import ReactDOM from "react-dom";
import Image from "../Pages/Sofia_Images/Page_17.JPG";
import Image_changer from "./Image_changer";
import "./SpotDiff.css";

class SpotDiff extends Component {

    render() {
        return (
            <div className="Spot_the_difference_game">
                    <img src={Image} alt="image" />

                    <div className = "sofia_head">
                    <Image_changer />
                    </div>

                    <div className = "bird">
                    <Image_changer />
                    </div>

                    <div className = "bottle">
                    <Image_changer />
                    </div>

                    <div className = "ball">
                    <Image_changer />
                    </div>

                    <div className = "michael">
                    <Image_changer />
                    </div>

                    <div className = "flower">
                    <Image_changer />
                    </div>

                    <div className = "butterfly">
                    <Image_changer />
                    </div>

                    <div className = "no_bug">
                    <Image_changer />
                    </div>

                    <div className = "slide">
                    <Image_changer />
                    </div>

                    
      </div>
        );
    }
}

export default SpotDiff;