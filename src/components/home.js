import React from "react";
import "./home.css";
import headshot from "../assets/kevinAvitarblackShirtv.svg";
import angular from "../assets/Angular.svg";
import css from "../assets/CSS3.svg";
import html from "../assets/HTML5.svg";
import javascript from "../assets/Javascript.svg";
import node from "../assets/Node.svg";
import postgress from "../assets/Postgresql.svg";
import react from "../assets/React.svg";
import Typescript from "../assets/Typescript.svg";

import code from "../assets/code.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <div className="tech">
          <div className='techTitle'>
            <h1>Technical Knowledge</h1>
          </div>
          <div className="techGroup">
            <div className="techItem">
              <img src={angular} />

              <span>ANGULAR</span>
            </div>
            <div className="techItem">
              <img src={css} />
              <span>CSS</span>
            </div>
            <div className="techItem">
              <img src={html} />
              <span>HTML</span>
            </div>
            <div className="techItem">
              <img src={javascript} />
              <span>JAVASCRIPT</span>
            </div>
            <div className="techItem">
              <img src={node} />
              <span>NODE.JS</span>
            </div>
            <div className="techItem">
              <img src={postgress} />
              <span>POSTGRESS</span>
            </div>
            <div className="techItem">
              <img src={react} />
              <span>REACT</span>
            </div>
            <div className="techItem">
              <img src={Typescript} />
              <span>TYPESCRIPT</span>
            </div>
          </div>
        </div>
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
    this.state = {
      mousex: 0,
      mousey: 0,
    };
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
