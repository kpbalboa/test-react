import './App.css';
import React from 'react';
import Nav from './components/navbar'
import About from './components/about';
import {Home, Landing} from './components/home';

class App extends React.Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
    this.state={
      page: ''
    }
  }
    navigate(page){
this.setState({
  
  page: page.target.id
})
    }

  
  render(){
  return (
    <div className="App">
      {this.state.page =='home' ? <Landing /> : null}
     <Nav navigate={this.navigate}/>
     {(() => {
        switch (this.state.page) {
          case 'home':
            return <Home />
            case 'about':
              return <About />
         
          default:
            return <Home />
        }
      })()}
    </div>
  );
}
}




export default App;
