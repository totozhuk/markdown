import React from 'https://esm.sh/react@18.2.0'
import 'marked'

class Previewer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    
    const markdown = marked.parse(this.props.input, {breaks:true})
    
    return(
      <div className="preview form-control" id = "preview" dangerouslySetInnerHTML = {{__html: markdown}}>   
      </div>
      
    )
  }
}

export default Previewer;
