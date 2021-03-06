import './navbar.css';
import React from 'react';

class Nav extends React.Component{
    
    render(){
        return (
            <div className='navdiv'>
                <ul  className='nav'>
                     <NavButton navigate={this.props.navigate} id='home' key='home'/>
                    <NavButton navigate={this.props.navigate}  id='about' key='about'/>
                </ul>
            </div>
        )
    }
}


class NavButton extends React.Component{
    
    render(){
        return (
             <li id={this.props.id} onClick={this.props.navigate}>{this.props.id}</li>
            
        )
    }
}

export default Nav