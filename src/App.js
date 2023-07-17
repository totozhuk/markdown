import React from 'https://esm.sh/react@18.2.0';
import Editor from './Editor';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Editor />
    )
  }
};

export default App;
