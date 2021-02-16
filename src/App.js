import React from 'react';
import './App.css';
import Cardlist from './Cardlist';
import Form from './Form';
// const axios = require('axios');

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];




class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
    profiles: testData
    };
  };
  
  addNewProfile = (profileData) =>{
    console.log("APP", profileData)
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }))
  }
  render(){
    return (
      <div>
      <div className="header">{this.props.title}</div>
      <Form onSubmit={this.addNewProfile} />
      <Cardlist profiles={this.state.profiles} />
      
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
