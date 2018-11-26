import React, { Component } from 'react';
import ToDo from './ToDo';
// import Header from './Header';

// const menu = [
//   {
//     link: '#Home',
//     label: 'Home'
//   },
//   {
//     link: '#About',
//     label: 'About'
//   },
//   {
//     link: '#Contacts',
//     label: 'Contacts'
//   }
// ];

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToDo />
      </React.Fragment>
        
      
      
    );
  }
}

export default App;