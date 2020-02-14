import React from 'react';
import './styles.css';
import SectionOne from '../section1';
import SectionTwo from '../section2';
import SectionThree from '../section3';
import SectionFour from '../section4';
import SectionFive from '../section5';
import SectionSix from '../section6';
import SectionSeven from '../section7';
import SectionEight from '../section8';
import SectionNine from '../section9';
import Comp2 from '../componentesSection/comp2';
import ImageFuncion from '../functionimage';
import images from '../componentesSection/images';

class App extends React.Component {
  state = { isOpen: false };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("click");
  };


  render(){
  return (
    <div className="contenedor">
      <div  onClick={this.handleClick} >
      <SectionOne/>
      {this.state.isOpen && (<div><ImageFuncion className="div" src={images.src} open/></div>)}
      </div>
      <div onClick={this.handleClick}>
      <SectionTwo/>
      {this.state.isOpen && (<div><Comp2 open/></div>)}
      </div>
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
      <SectionThree/>
      </div>
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
      <SectionFour/>
      </div>
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
      <SectionFive/>
      </div>
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
      <SectionSix/>
      </div>
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
      <SectionSeven/>
      </div>
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
      <SectionEight/>
      </div>
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
      <SectionNine/>
      </div>
    </div>
  );
}
}

export default App;
