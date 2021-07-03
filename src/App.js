import React,{Component } from 'react';
import { Card } from './components/text';
import './components/style.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
              <Card/>
            </div>
        );
    }
}
 
export default App ;