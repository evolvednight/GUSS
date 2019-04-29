import React from 'react';
import { Table } from 'react-bootstrap';
import "./WordSearch.css";

class wordsearch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      checked : [],
      live:"",
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
      ],
      words: [
        "IPWYSCIENTISTWF",
        "HJKNOWLEDGEWUNE",
        "YNLKHELPORINARX",
        "PVQUESTIONTAYNP",
        "OSTUDYAGFCGHYGE",
        "TOHMQSRLEKOBTRR",
        "HLJAARCBEUZHREI",
        "ELKUMEDIJAVXESM",
        "SKXICEINEWRHAEE",
        "IDYMEEDSYNNNTAN",
        "SOZPGNRIUOCXMRT",
        "LCLREHWWCRNEECP",
        "RTBOTEUYUIVPNHB",
        "NOEVFJEUEDNETEB",
        "ERHELEHZORXEYOS"
      ]
    }
  }

  createTable = () => {
    let table = []
    let x = 0
    let check = ""
    let id = []
    // Outer loop to create parent
    for (let i = 0; i < 15; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 15; j++) {
        // eslint-disable-next-line no-loop-func
        children.push(<td className={this.state.words[i][j]} id={x} key={x} onClick={(e) => {
          let ex = e.target.className
          check += ex
          // console.log(check)
          e.target.style="background-color:green"
          id.push(e.target)
          for(let k = 0; k<15; k++){
            if(check===this.state.answer[k] || check.length===10){
              if(check.length===10 && check!=="EXPERIMENT" && check!=="HYPOTHESIS"){
                // console.log("not")
                check=""
                for(let l =0; l<id.length; l++){
                  id[l].style ="background-color:white"
                }
                id=[]
                continue
              }
              this.state.checked.push(check)
              check = ""
              id=[]
              // console.log(this.state.checked)
            }
          }
        }}>{this.state.words[i][j]}</td>)
        x = x+1
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
      x=x+1
    }
    return table
  }

  createAnswerList = () =>{
    let table = []
    let x = 0;
    // Outer loop to create parent
    for (let i = 0; i < 8; i++) {
      let children = []
      for (let j = 0; j < 2; j++) {
        children.push(<td className={this.state.answer[x]} id={this.state.answer[x]} key={this.state.answer[x]}>{this.state.answer[x]}</td>)
        x++
      }
      table.push(<tr style={{marginBottom:"10rem"}}>{children}</tr>)
    }
    return table
  }

  render() {
    return(
      <div>
        <div className="wordSearch">
          <Table size="sm" style={{marginLeft:"10rem", marginRight:"5rem"}}>
            <tbody>
              {this.createTable()}
            </tbody>
          </Table>
          <div style={{marginRight:"10rem"}}>
            <div style={{backgroundColor:"green",fontWeight:"bold",padding:"1rem"}}>WORDS</div>
            {this.createAnswerList()}
          </div>
        </div>
        <p>Entered: </p>
      </div>
    )
  }

}

export default wordsearch;
