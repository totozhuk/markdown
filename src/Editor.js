import React from 'https://esm.sh/react@18.2.0'
import Previewer from './Previewer';


const defaultText = `

 # Header
 ## sub header 
 
 [Website](https://freecodecamp.org)
 
 inline code \`Array.prototype.map()\` 
 
 a block of code: 
 \`\`\`
function(){
if(a >= b){
return c
}
};
\`\`\` 
 
- list item1
- list item2

The quote
 > Be yourself everyone else is already taken
 
Oscar Wilde
 
 ![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png)
 
 **Bold text**
 `


class Editor extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        input: defaultText
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
      this.setState({
        input: event.target.value
      });
    }
    render(){
      return(
      <div>
          <h1 className ="text-center">Convert Your Markdown</h1>
          
          <h4 className ="text-center">Enter your markdown:</h4>
          <textarea id = "editor" className ="form-control" onChange={this.handleChange}>{this.state.input}</textarea><br />
          <h4 className ="text-center">Result:</h4>
        <Previewer input = {this.state.input}/> 
      </div>
  )}
  }

  export default Editor;