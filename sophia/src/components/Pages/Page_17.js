import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_17.JPG";
import { Link } from "react-router-dom";
class Page17 extends Component {
  render() {
    return (
      <div className="Page17">
        <div className="text">Sofia</div>

        <div className="text">Learns</div>

        <div className="text">Research</div>

        <div className="text">
          There are 12 differences. Did you find them all? Differences on the
          playground: 1. No flying bugs 2. Long sleeves and pants on Sofia 3. No
          bug bites on Sofia 4. Long sleeves and pants on Michael 5. No bug
          bites on Michael 6. Hat on Sofia 7. Bottle of bug spray 8. Kid playing
          with ball instead of truck 9. No kid on slide 10. Flower near Michael
          11. Butterfly 12. Bird on Sofia's bench
        </div>
        <img src={Image} alt="" />
        <Link to="/page16">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page18">
          <Button>Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page17;
