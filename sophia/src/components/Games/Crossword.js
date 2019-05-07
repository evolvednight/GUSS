import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import tdStyles from './tdStyles';
import tableStyle from './tableStyle';
import './Crossword.css';

//var letters = /^[A-Za-z]+$/;
class Crossword extends Component {
    constructor(props) {
      super(props);

      this.state = {
        answer11: '',
        answer12: '',
        answer13: '',
        answer14: '',
        answer15: '',
        answer16: '',
        answer17: '',
        answer18: '',
        answer19: '',
        answer110: '',
        answer111: '',
        answer21: '',
        answer22: '',
        answer23: '',
        answer24: '',
        answer31: '',
        answer32: '',
        answer33: '',
        answer34: '',
        answer35: '',
        answer36: '',
        answer37: '',
        answer38: '',
        answer39: '',
        answer310: '',
        answer311: '',
        answer41: '',
        answer42: '',
        answer43: '',
        answer44: '',
        answer45: '',
        answer46: '',
        answer47: '',
        answer51: '',
        answer52: '',
        answer53: '',
        answer54: '',
        answer55: '',
        answer56: '',
        answer61: '',
        answer62: '',
        answer63: '',
        answer64: '',
        answer65: '',
        answer66: '',
        answer67: '',
        answer68: '',
        answer69: '',
        answer610: '',
        answer71: '',
        answer72: '',
        answer73: '',
        answer74: '',
        answer75: '',
        answer76: '',
        answer77: '',
        answer78: '',
        answer79: '',
        answer710: '',
        answer711: '',
        answer712: '',
        answer713: '',
        answer714: '',
        answer81: '',
        answer82: '',
        answer83: '',
        answer84: '',
        answer85: '',
        answer86: '',
        answer87: '',
        answer88: '',
        answer89: '',
        answer810: '',
        answer91: '',
        answer92: '',
        answer93: '',
        answer94: '',
        answer95: '',
        answer101: '',
        answer102: '',
        answer103: '',
        answer104: '',
        answer105: '',
        answer106: '',
        answer107: '',
        answer111: '',
        answer112: '',
        answer113: '',
        answer114: '',
        answer115: '',
        answer116: '',
      };
      this.handle_value_1_input = this.handle_value_1_input.bind(this);
      this.handle_value_2_input = this.handle_value_2_input.bind(this);
    }
    handle_value_1_input(new_value) {
      var changeValue = (this.state.answer11).toString() + new_value.target.value;
      changeValue = changeValue.toString();
      var three = 11;
      this.setState({
        ["answer" + three]: changeValue
      });
    }
    
    handle_value_2_input(new_value) {
      this.setState({
        answer2: new_value.target.value
      });
    }

    render() {
        return (
          <div className="crossword">
            <Table className="puzzle" style={tableStyle}>
            <tr className="row0">
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
              <td className="cell cell10"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_1_input(event)} /></td>
              <td className="cell cell11" style={tdStyles}></td>
              <td className="cell cell12" style={tdStyles}></td>
              <td className="cell cell13" style={tdStyles}></td>
              <td className="cell cell14" style={tdStyles}></td>
              <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            </tr>
            <tr className="row1">
              <td className="cell cell0" style={tdStyles}></td>
              <td className="cell cell1" style={tdStyles}></td>
              <td className="cell cell2" style={tdStyles}></td>
              <td className="cell cell3" style={tdStyles}></td>
              <td className="cell cell4">
              <input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_1_input(event)}
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
              <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
            </tr>
            <tr className="row2">
              <td className="cell cell0" style={tdStyles}></td>
              <td className="cell cell1" style={tdStyles}></td>
              <td className="cell cell2" style={tdStyles}></td>
              <td className="cell cell3" style={tdStyles}></td>
              <td className="cell cell4"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_1_input(event)} /></td>
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
            </tr>
            <tr className="row3">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_1_input(event)} /></td>
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
            </tr>
            <tr className="row4">
          <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_1_input(event)} /></td>
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
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
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
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
            </tr>
            <tr className="row7">
            <td className="cell cell0" style={tdStyles}></td>
          <td className="cell cell1" style={tdStyles}></td>
          <td className="cell cell2" style={tdStyles}></td>
          <td className="cell cell3" style={tdStyles}></td>
          <td className="cell cell4" style={tdStyles}></td>
          <td className="cell cell5" style={tdStyles}></td>
          <td className="cell cell6" style={tdStyles}></td>
          <td className="cell cell7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="cell cell8"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="cell cell9"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="cell cell10"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="cell cell11"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="cell cell12"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="cell cell13" style={tdStyles}></td>
          <td className="cell cell14" style={tdStyles}></td>
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
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
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
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
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
            </tr>
            <tr className="row10">
          
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          
          <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
            <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          
          <td className="7"><input type="text" ref="answer1807" maxLength="1" onChange={(event) => this.handle_value_2_input(event)} /></td>
          <td className="cell cell14" style={tdStyles}></td>
          <td className="cell cell15" style={tdStyles}></td>
          <td className="cell cell16" style={tdStyles}></td>
          <td className="cell cell17" style={tdStyles}></td>
          <td className="cell cell18" style={tdStyles}></td>
          <td className="cell cell19" style={tdStyles}></td>
          <td className="cell cell20" style={tdStyles}></td>
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
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
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
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
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
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
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
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
          <td className="cell cell15" style={tdStyles}></td>
              <td className="cell cell16" style={tdStyles}></td>
              <td className="cell cell17" style={tdStyles}></td>
              <td className="cell cell18" style={tdStyles}></td>
              <td className="cell cell19" style={tdStyles}></td>
            </tr>
            <tr className="row15">
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
            </tr>
            <tr className="row16">
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
            </tr>
            <tr className="row17">
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
            </tr>
            <tr className="row18">
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
            </tr>
            <tr className="row19">
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
            </tr>
          
          </Table>
          <div className="text">
          <h2>{this.state.answer1}</h2>
          <h2>{this.state.answer2}</h2>
          <h2>{this.state.answer3}</h2>
          <h2>{this.state.answer4}</h2>
          <h2>{this.state.answer5}</h2>
          <h2>{this.state.answer6}</h2>
          <h2>{this.state.answer7}</h2>
          <h2>{this.state.answer8}</h2>
          <h2>{this.state.answer9}</h2>
          <h2>{this.state.answer10}</h2>
          <h2>{this.state.answer11}</h2>

          </div>
          </div>
        )
    }

}

export default Crossword;