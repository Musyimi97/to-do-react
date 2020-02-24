import React, { Component } from 'react';
import Todos from './components/Todos'; 
import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'Take out the trash',
        completed:false
      },
      {
        id:2,
        title:'Dinner with girlfriend',
        completed:false
      },
      {
        id:3,
        title:'Meeting with boss',
        completed:true
      },
     
    ]
  }


  markComplete = (id) =>{
    
  }
render() {
  return (
    <div className="App">
      <header className="App-header">
      <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </header>
    </div>
  );
}

}

export default App;
