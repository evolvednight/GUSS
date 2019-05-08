import React from 'react';
import { Table } from 'react-bootstrap';
import "./WordSearch.css";

class wordsearch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // The state check is used to store a found word. Not all of them, only one at a time
      checked : [],
      // The state done is used only to check if a player has found all the 15 words
      done: 0,
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

  // Everything depends on the onClick function. All the updates are done through that
  createTable = () => {
    let table = []
    // Used the variable x to use as ID and Key on each of the td components
    let x = 0
    let check = ""
    // The variable check stores each of the pressed letters
    let id = []
    // The variable id stores the components that were pressed. By storing them here, I can access them later on when I want to change their styles
    // Outer loop to create parent
    for (let i = 0; i < 15; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 15; j++) {
        // eslint-disable-next-line no-loop-func
        children.push(<td className={this.state.words[i][j]} id={x} ref={x} key={x} onClick={(e) => {
          // this makes all the letters in the table along with the click functions
          // the updateAnswer function checks on every click if any answer was found
          let ex = e.target.className
          check = check+ ex
          console.log(check)
          e.target.style="background-color:green"
          // The pressed letter is turned into green
          id.push(e.target)
          // The actual component is stored into id
          for(let k = 0; k<15; k++){
            if(check===this.state.answer[k] || check.length===10 || check.length===5){
              // Checks whether a user found the correct answer or is on the wrong path
              if(check.length===10 && check!=="EXPERIMENT" && check!=="HYPOTHESIS"){
                // Checks if the user is on the wrong path after getting 5 correct letters
                console.log("not")
                check=""
                for(let l =0; l<id.length; l++){
                  id[l].style ="background-color:white"
                  // Changes the components color to white if a wwrong sequence of letters were pressed
                }
                id=[]
                continue
              }
              if(check.length===5 && check!=="EXPER" && check!=="TREAT" && check!=="KNOWL" && check!=="LEARN" && check!=="SURVE" && check!=="MEDIC" && check!=="QUEST" && check!=="SCIEN" && check!=="RESEA" && check!=="HYPOT" && check!=="STUDY" && check!=="DOCTO" && check!="IMPRO"){
                // Checks whether a user is on the wrong path before getting 5 correct letters
                check=""
                for(let l =0; l<id.length; l++){
                  id[l].style ="background-color:white"
                }
                id=[]
                continue
              }
              if(check.length===5){
                if(check==="STUDY" || check==="LEARN"){
                  // Checks only for these two words since they are 5 letters in length and I am checking for a sequence of 5 correct presses in order to refresh colors
                  this.state.checked.push(check)
                  this.updateAnswer(check)
                  check = ""
                  id=[]
                }
                else{
                  continue
                }
              }
              // If everything above was correct, checked is updated and the updateAnswer function is called
              this.state.checked.push(check)
              this.updateAnswer(check)
              check = ""
              id=[]
              console.log(this.state.checked)
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
    for (let i = 0; i < 8; i++) {
      let children = []
      for (let j = 0; j < 2; j++) {
        children.push(<td className={this.state.answer[x]} id={this.state.answer[x]} ref={this.state.answer[x]}>{this.state.answer[x]}</td>)
        x++
      }
      table.push(<tr style={{marginBottom:"10rem"}}>{children}</tr>)
    }
    return table
  }

  updateAnswer = (str) => {
    console.log(str)
    let temp = this.state.done
    temp++
    let check = this.state.checked[0]
    if(typeof this.refs[check]!=="undefined"){
      this.refs[check].style="background-color:Green"
      this.setState({
        checked:[],
        done: temp
      })
    }
    if(this.state.done===14){
      this.refs.final.style="color:red"
    }
    console.log(this.refs.final)
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
        <p>Directions: Click on the letters that spell the words</p>
        <div ref="final" style={{color:"white"}}>YOU DID IT!! CONGRATULATIONS!! </div>
      </div>
    )
  }

}

export default wordsearch;
