import React from "react";
import "./home.css";
import headshot from "../assets/kevinAvitarblackShirtv.svg";
import code from '../assets/code.jpg'


class Home extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="home">
        this is home
        <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
        <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
        <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
      </div>
    );
  }
}

// function Welcome(props) {
//   return (
//     <div
//       class="particle"
//       style={{
//         top: props.x,
//         left: props.y,
//         height: props.r,
//         width: props.r,
//         animationName: props.animation,
//         animationDelay: `${props.delay}s`,
//       }}
//     ></div>
//   );
// }

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        mousex : 0,
        mousey: 0,
    }
  }

  
  // randNum(size){
  //     return Math.random() * (size);
  // }
  render() {
    //     const particles = []
    //    for (let index = 0; index < 250; index++) {
    //        let animate = 'animate' + Math.floor(this.randNum(5) + 1)
    //        particles.push(<Welcome x={this.randNum(window.innerHeight)} y={this.randNum(window.innerWidth)} r={this.randNum(5)} animation={animate} delay={this.randNum(-3)}/>)

    //    }
    return (
      <div className="landing" id="landing">
        {/* {particles} */}

        <div className="title">
            <div>
          <h1>Kevin Balboa</h1>
          
          <h2>Front-End Developer</h2>
          </div>
         
        </div>
        <div className="headshot">
            <img src={headshot} />
        </div>
        <div className="code"></div>
        
      </div>
    );
  }
}

export { Home, Landing };
