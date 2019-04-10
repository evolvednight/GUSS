import React, { Component } from "react";

class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [
        "LEARN",
        "TREATMENT",
        "SURVEY",
        "KNOWLEDGE",
        "HELP",
        "IMPROVE",
        "MEDICINE",
        "QUESTION",
        "SCIENCE",
        "RESEARCH",
        "HYPOTHESIS",
        "EXPERIMENT",
        "SCIENTIST",
        "STUDY",
        "DOCTOR"
      ]
    };
  }

  check = e => {
    console.log("hello");
  };

  render() {
    return (
      <div className="WordSearch">
        <table className="puzzle" class="center">
          <tr className="row0">
            <td onMouseEnter={this.check()} className="cell cell0">
              I
            </td>
            <td className="cell cell1">P</td>
            <td className="cell cell2">W</td>
            <td className="cell cell3">Y</td>
            <td className="cell cell4">S</td>
            <td className="cell cell5">C</td>
            <td className="cell cell6">I</td>
            <td className="cell cell7">E</td>
            <td className="cell cell8">N</td>
            <td className="cell cell9">T</td>
            <td className="cell cell10">I</td>
            <td className="cell cell11">S</td>
            <td className="cell cell12">T</td>
            <td className="cell cell13">W</td>
            <td className="cell cell14">F</td>
          </tr>
          <tr className="row1">
            <td className="cell cell0">H</td>
            <td className="cell cell1">J</td>
            <td className="cell cell2">K</td>
            <td className="cell cell3">N</td>
            <td className="cell cell4">O</td>
            <td className="cell cell5">W</td>
            <td className="cell cell6">L</td>
            <td className="cell cell7">E</td>
            <td className="cell cell8">D</td>
            <td className="cell cell9">G</td>
            <td className="cell cell10">E</td>
            <td className="cell cell11">W</td>
            <td className="cell cell12">U</td>
            <td className="cell cell13">N</td>
            <td className="cell cell14">E</td>
          </tr>
          <tr className="row2">
            <td className="cell cell0">Y</td>
            <td className="cell cell1">N</td>
            <td className="cell cell2">L</td>
            <td className="cell cell3">K</td>
            <td className="cell cell4">H</td>
            <td className="cell cell5">E</td>
            <td className="cell cell6">L</td>
            <td className="cell cell7">P</td>
            <td className="cell cell8">O</td>
            <td className="cell cell9">R</td>
            <td className="cell cell10">I</td>
            <td className="cell cell11">N</td>
            <td className="cell cell12">A</td>
            <td className="cell cell13">R</td>
            <td className="cell cell14">X</td>
          </tr>
          <tr className="row3">
            <td className="cell cell0">P</td>
            <td className="cell cell1">V</td>
            <td className="cell cell2">Q</td>
            <td className="cell cell3">U</td>
            <td className="cell cell4">E</td>
            <td className="cell cell5">S</td>
            <td className="cell cell6">T</td>
            <td className="cell cell7">I</td>
            <td className="cell cell8">O</td>
            <td className="cell cell9">N</td>
            <td className="cell cell10">T</td>
            <td className="cell cell11">A</td>
            <td className="cell cell12">Y</td>
            <td className="cell cell13">N</td>
            <td className="cell cell14">P</td>
          </tr>
          <tr className="row4">
            <td className="cell cell0">O</td>
            <td className="cell cell1">S</td>
            <td className="cell cell2">T</td>
            <td className="cell cell3">U</td>
            <td className="cell cell4">D</td>
            <td className="cell cell5">Y</td>
            <td className="cell cell6">A</td>
            <td className="cell cell7">G</td>
            <td className="cell cell8">F</td>
            <td className="cell cell9">C</td>
            <td className="cell cell10">F</td>
            <td className="cell cell11">H</td>
            <td className="cell cell12">Y</td>
            <td className="cell cell13">G</td>
            <td className="cell cell14">E</td>
          </tr>
          <tr className="row5">
            <td className="cell cell0"> T</td>
            <td className="cell cell1"> O</td>
            <td className="cell cell2"> H</td>
            <td className="cell cell3"> M</td>
            <td className="cell cell4"> Q</td>
            <td className="cell cell5"> S</td>
            <td className="cell cell6"> R</td>
            <td className="cell cell7"> L</td>
            <td className="cell cell8"> E</td>
            <td className="cell cell9"> K</td>
            <td className="cell cell10">O </td>
            <td className="cell cell11"> B</td>
            <td className="cell cell12"> T</td>
            <td className="cell cell13"> R</td>
            <td className="cell cell14"> R</td>
          </tr>
          <tr className="row6">
            <td className="cell cell0">H </td>
            <td className="cell cell1">L </td>
            <td className="cell cell2">J </td>
            <td className="cell cell3">A </td>
            <td className="cell cell4">A </td>
            <td className="cell cell5">R </td>
            <td className="cell cell6">C </td>
            <td className="cell cell7">B </td>
            <td className="cell cell8">E </td>
            <td className="cell cell9">U </td>
            <td className="cell cell10">Z </td>
            <td className="cell cell11"> H</td>
            <td className="cell cell12"> R</td>
            <td className="cell cell13"> E</td>
            <td className="cell cell14"> I</td>
          </tr>
          <tr className="row7">
            <td className="cell cell0"> E</td>
            <td className="cell cell1"> L</td>
            <td className="cell cell2"> K</td>
            <td className="cell cell3"> U</td>
            <td className="cell cell4"> M</td>
            <td className="cell cell5"> E</td>
            <td className="cell cell6"> D</td>
            <td className="cell cell7"> I</td>
            <td className="cell cell8"> J</td>
            <td className="cell cell9"> A</td>
            <td className="cell cell10">V </td>
            <td className="cell cell11">X </td>
            <td className="cell cell12">E </td>
            <td className="cell cell13">S </td>
            <td className="cell cell14">M </td>
          </tr>
          <tr className="row8">
            <td className="cell cell0"> S</td>
            <td className="cell cell1"> K</td>
            <td className="cell cell2"> X</td>
            <td className="cell cell3"> I</td>
            <td className="cell cell4"> C</td>
            <td className="cell cell5"> E</td>
            <td className="cell cell6"> I</td>
            <td className="cell cell7"> N</td>
            <td className="cell cell8"> E</td>
            <td className="cell cell9"> W</td>
            <td className="cell cell10">R </td>
            <td className="cell cell11">H </td>
            <td className="cell cell12">A </td>
            <td className="cell cell13">E </td>
            <td className="cell cell14">E </td>
          </tr>
          <tr className="row9">
            <td className="cell cell0"> I</td>
            <td className="cell cell1"> D</td>
            <td className="cell cell2"> Y</td>
            <td className="cell cell3"> M</td>
            <td className="cell cell4"> E</td>
            <td className="cell cell5"> E</td>
            <td className="cell cell6"> D</td>
            <td className="cell cell7"> S</td>
            <td className="cell cell8"> Y</td>
            <td className="cell cell9"> N</td>
            <td className="cell cell10">N </td>
            <td className="cell cell11">N </td>
            <td className="cell cell12">T </td>
            <td className="cell cell13">A </td>
            <td className="cell cell14">N </td>
          </tr>
          <tr className="row10">
            <td className="cell cell0"> S</td>
            <td className="cell cell1"> O</td>
            <td className="cell cell2"> Z</td>
            <td className="cell cell3"> P</td>
            <td className="cell cell4"> G</td>
            <td className="cell cell5"> n</td>
            <td className="cell cell6"> R</td>
            <td className="cell cell7"> I</td>
            <td className="cell cell8"> U</td>
            <td className="cell cell9"> O</td>
            <td className="cell cell10"> C</td>
            <td className="cell cell11">X </td>
            <td className="cell cell12">M </td>
            <td className="cell cell13">R </td>
            <td className="cell cell14">T </td>
          </tr>
          <tr className="row11">
            <td className="cell cell0"> L</td>
            <td className="cell cell1"> C</td>
            <td className="cell cell2"> L</td>
            <td className="cell cell3"> R</td>
            <td className="cell cell4"> E</td>
            <td className="cell cell5"> H</td>
            <td className="cell cell6"> W</td>
            <td className="cell cell7"> W</td>
            <td className="cell cell8"> C</td>
            <td className="cell cell9"> R</td>
            <td className="cell cell10">N </td>
            <td className="cell cell11">E </td>
            <td className="cell cell12">E </td>
            <td className="cell cell13">C </td>
            <td className="cell cell14">P </td>
          </tr>
          <tr className="row12">
            <td className="cell cell0"> R</td>
            <td className="cell cell1"> T</td>
            <td className="cell cell2"> B</td>
            <td className="cell cell3"> O</td>
            <td className="cell cell4"> T</td>
            <td className="cell cell5"> E</td>
            <td className="cell cell6"> U</td>
            <td className="cell cell7"> Y</td>
            <td className="cell cell8"> U</td>
            <td className="cell cell9"> I</td>
            <td className="cell cell10">V </td>
            <td className="cell cell11">P </td>
            <td className="cell cell12">N </td>
            <td className="cell cell13">H </td>
            <td className="cell cell14">B </td>
          </tr>
          <tr className="row13">
            <td className="cell cell0"> N</td>
            <td className="cell cell1"> O</td>
            <td className="cell cell2"> E</td>
            <td className="cell cell3"> V</td>
            <td className="cell cell4"> F</td>
            <td className="cell cell5"> J</td>
            <td className="cell cell6"> E</td>
            <td className="cell cell7"> U</td>
            <td className="cell cell8"> E</td>
            <td className="cell cell9"> D</td>
            <td className="cell cell10">N </td>
            <td className="cell cell11">E </td>
            <td className="cell cell12">T </td>
            <td className="cell cell13">E </td>
            <td className="cell cell14">B </td>
          </tr>
          <tr className="row14">
            <td className="cell cell0"> E</td>
            <td className="cell cell1"> R</td>
            <td className="cell cell2"> H</td>
            <td className="cell cell3"> E</td>
            <td className="cell cell4"> L</td>
            <td className="cell cell5"> E</td>
            <td className="cell cell6"> H</td>
            <td className="cell cell7"> Z</td>
            <td className="cell cell8"> O</td>
            <td className="cell cell9"> R</td>
            <td className="cell cell10">X </td>
            <td className="cell cell11">E </td>
            <td className="cell cell12">Y </td>
            <td className="cell cell13">O </td>
            <td className="cell cell14">S </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default WordSearch;
