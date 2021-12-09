import React from 'react';
import './home.css'
import headshot from "../assets/headshot.png"

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='home'>
                this is home
                <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
            </div>
        )
    }
}



    function Welcome(props) {
        return <div class="particle" style={{top: props.x, left: props.y, height: props.r, width: props.r, animationName: props.animation, animationDelay: `${props.delay}s`}}></div>;
      }


class Landing extends React.Component{
    constructor(props){
        super(props)
    }
    randNum(size){
        return Math.random() * (size);
    }
    render(){


        const particles = []
       for (let index = 0; index < 250; index++) {
           let animate = 'animate' + Math.floor(this.randNum(5) + 1)
           particles.push(<Welcome x={this.randNum(window.innerHeight)} y={this.randNum(window.innerWidth)} r={this.randNum(5)} animation={animate} delay={this.randNum(-3)}/>)
           
       }
        return (
            <div className='landing'>
     
            {particles}

            
                <div className="title"><h1>Kevin Balboa</h1>
                <h2>A gentleman and a scholar </h2>
                </div>
                <img src={headshot} />
                
            </div>
        )
    }
}

export  {Home, Landing}