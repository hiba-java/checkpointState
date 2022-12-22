
import './App.css';
import React from 'react';
import Profile from './Profile';

class App extends React.Component {
 
  constructor(){
    super();

    this.state ={ 
         mesInfo :{
      fullname: 'YAHMED Hiba',
      bio: 'Mon bio : Je suis Hiba yahmed ...' ,
      profession:'Ingénieur Informatique',
      src : "https://img.freepik.com/photos-gratuite/portrait-femme-pin-up-etonne-appareil-photo-charmant-photographe-aux-levres-rouges-prenant-photos_197531-15200.jpg?w=2000"
    },
     show :false
    };
  }
 
 render(){
  return (
  <div>
      <button onClick={()=>this.setState({show:true})} > Show my profile </button>  
      {this.state.show ? (<Profile props = {this.state.mesInfo}/>)  : (<p></p>)}  
  </div>
  );
 }
}

export default App;
