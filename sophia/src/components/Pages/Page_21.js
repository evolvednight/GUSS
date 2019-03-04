import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page21 extends Component {
  render() {
    return (
      <div className="Page21">
       

        <div className="text">
          Across 3. Watching and taking notes about how a treatment is working
          in a person 4. A pretend medicine with nothing in it that is used to
          help find out if a new medicine works 6. A guess about how something
          might work or how two things may be related to each other 7. A study
          where researchers compare different treatments or medicines to figure
          out which ones work best (2 words with a space in between) 9. Like a
          science experiment, it's what scientists and researchers do to try to
          answer a question 10. A person's agreement to be part of a study 11. A
          paper or online set of questions that you answer to help with a study
          Down 1. A person that is in a study 2. The information collected in a
          study. This can be numbers like age and height or words, like about
          how you feel. 5. A child's or teenager's agreement to be part of a
          study 8. A person that is gathering information in the study
        </div>

        <div className="text">Game</div>
        <Link to="/page20" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page22" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page21;
