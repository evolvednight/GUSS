import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import tdStyles from './tdStyles';
import './Crossword.css';

//var letters = /^[A-Za-z]+$/;
class Crossword extends Component {

    render() {
        return (
          <div className="crossword">
            <Table className="puzzle">
            <tr className="row0">
              <td className="cell cell0" style={tdStyles}></td>
              <td className="cell cell1" style={tdStyles}></td>
              <td className="cell cell2" style={tdStyles}></td>
              <td className="cell cell3" style={tdStyles}></td>
              <td className="cell cell4"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell5" style={tdStyles}></td>
              <td className="cell cell6" style={tdStyles}></td>
              <td className="cell cell7" style={tdStyles}></td>
              <td className="cell cell8" style={tdStyles}></td>
              <td className="cell cell9" style={tdStyles}></td>
              <td className="cell cell10" style={tdStyles}></td>
              <td className="cell cell11" style={tdStyles}></td>
              <td className="cell cell12" style={tdStyles}></td>
              <td className="cell cell13" style={tdStyles}></td>
              <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row1">
              <td className="cell cell0" style={tdStyles}></td>
              <td className="cell cell1" style={tdStyles}></td>
              <td className="cell cell2" style={tdStyles}></td>
              <td className="cell cell3" style={tdStyles}></td>
              <td className="cell cell4">
              <input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange}
              //function({
                //      if(!ref.value.match(letters))
                  //    {
                    //    alert('this is not a letter, please input alphabet only');
                   //   }}})
                    /></td>
              <td className="cell cell5" style={tdStyles}></td>
              <td className="cell cell6" style={tdStyles}></td>
              <td className="cell cell7" style={tdStyles}></td>
              <td className="cell cell8" style={tdStyles}></td>
              <td className="cell cell9" style={tdStyles}></td>
              <td className="cell cell10" style={tdStyles}></td>
              <td className="cell cell11" style={tdStyles}></td>
              <td className="cell cell12" style={tdStyles}></td>
              <td className="cell cell13" style={tdStyles}></td>
              <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row2">
              <td className="cell cell0" style={tdStyles}></td>
              <td className="cell cell1" style={tdStyles}></td>
              <td className="cell cell2" style={tdStyles}></td>
              <td className="cell cell3" style={tdStyles}></td>
              <td className="cell cell4"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
              <td className="cell cell5" style={tdStyles}></td>
              <td className="cell cell6" style={tdStyles}></td>
              <td className="cell cell7" style={tdStyles}></td>
              <td className="cell cell8" style={tdStyles}></td>
              <td className="cell cell9" style={tdStyles}></td>
              <td className="cell cell10" style={tdStyles}></td>
              <td className="cell cell11" style={tdStyles}></td>
              <td className="cell cell12" style={tdStyles}></td>
              <td className="cell cell13" style={tdStyles}></td>
              <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row3">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row4">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row5">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row6">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row7">
            <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
          <td className="cell cell8"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
          <td className="cell cell9"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
          <td className="cell cell10"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
          <td className="cell cell11"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
          <td className="cell cell12"><input type="text" ref="answer1807" maxLength="1" onChange={this.handleChange} /></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row8">
            <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row9">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
          <td className="cell cell15" style={tdStyles}></td>
          <td className="cell cell16" style={tdStyles}></td>
          <td className="cell cell17" style={tdStyles}></td>
          <td className="cell cell18" style={tdStyles}></td>
          <td className="cell cell19" style={tdStyles}></td>
          <td className="cell cell20" style={tdStyles}></td>
            </tr>
            <tr className="row10">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
          <td className="cell cell15" style={tdStyles}></td>
          <td className="cell cell16" style={tdStyles}></td>
          <td className="cell cell17" style={tdStyles}></td>
          <td className="cell cell18" style={tdStyles}></td>
          <td className="cell cell19" style={tdStyles}></td>
          <td className="cell cell20" style={tdStyles}></td>
            </tr>
            <tr className="row11">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
          <td className="cell cell15" style={tdStyles}></td>
          <td className="cell cell16" style={tdStyles}></td>
          <td className="cell cell17" style={tdStyles}></td>
          <td className="cell cell18" style={tdStyles}></td>
          <td className="cell cell19" style={tdStyles}></td>
          <td className="cell cell20" style={tdStyles}></td>
            </tr>
            <tr className="row12">
            <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row13">
            <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
            <tr className="row14">
            <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7" style={tdStyles}></td>
          <td className="cell cell8" style={tdStyles}></td>
          <td className="cell cell9" style={tdStyles}></td>
          <td className="cell cell10" style={tdStyles}></td>
          <td className="cell cell11" style={tdStyles}></td>
          <td className="cell cell12" style={tdStyles}></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
            </tr>
          
          </Table>
          <div className="text">
          </div>
          </div>
        )
    }

}

export default Crossword;