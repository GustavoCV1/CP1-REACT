import React from 'react';
import './App.css';
import Headers from './header';
import Title from './title';
import Text from './Text';

class App extends React.Component{
  render(){
    return (
      <div>
          <Headers/>
          <Title/>
          <Text/>
      </div>
    );
  }
}

export default App;
