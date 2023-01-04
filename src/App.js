import React from "react";
import './App.css'

class App extends React.Component {
    constructor(){
        super();
        this.state={
            input:'',
            showParagraph: false,
        }
    }
    render() {
        return (
           <>
           <div class="textarea">
            <textarea
            value={this.state.input}
            onChange={(e)=> this.setState({input:e.target.value})}
            />
            </div>
            <br />
            <div className="button">
          <button
          onClick={() =>{
            this.setState({
                showParagraph: !this.state.showParagraph,
            });
          }}
          >
                Display in UpperCase 
                </button>
                {this.state.showParagraph && <p>{this.state.input.toUpperCase()}</p>}
                </div>
     </>
     
        )
    }
  
}
export default App;



