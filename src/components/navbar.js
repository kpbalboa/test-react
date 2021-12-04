import './navbar.css';
import React from 'react';

class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <ul className='nav'>
                     <NavButton navigate={this.props.navigate} id='home' />
                    <NavButton navigate={this.props.navigate}  id='about' />
                </ul>
            </div>
        )
    }
}


class NavButton extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
             <li id={this.props.id} onClick={this.props.navigate}>{this.props.id}</li>
            
        )
    }
}

export default Nav