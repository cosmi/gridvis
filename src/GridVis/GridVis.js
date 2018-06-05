import React, { Component } from 'react';
import Cube from "../elements/Cube.js";

import "./GridVis.css";


function GridElement2D({element, onClick}) {
  return (
    <div className="GridElement2D"
      style={{
        top: `${100*element.p1[1]}%`,
        left: `${100*element.p1[0]}%`,
        right: `${100-100*element.p2[0]}%`,
        bottom: `${100-100*element.p2[1]}%`,
      }}
      onClick={onClick}
    />
  );

}


function GridElement3D({element, onClick}) {
  const { p1, p2 } = element;
  return (
    <div className="GridElement3D"
      style={{
        transform: `scale3d(${p2[0]-p1[0]}, ${p2[1]-p1[1]}, ${p2[2]-p1[2]})`,  
        
      }}
      onClick={() => {console.log("DUPA")}}
    > 
      <div className="GridElement3D-scaler"
        style={{
          transform: `translate3d(${p1[0]/(p2[0]-p1[0])}em, ${p1[1]/(p2[1]-p1[1])}em, ${-p1[2]/(p2[2]-p1[2])}em)`, 
        }}>
        <div className="cube">
          <div className="side front" />
          <div className="side back" />
          <div className="side top" />
          <div className="side bottom" />
          <div className="side left" />
          <div className="side right" />
        </div>
      </div>
    </div>
  );

}



class GridVis extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.els = [new Cube([0,0,0], [0.5, 0.5, 0.5]), new Cube([0.5, 0.5, 0.5], [1, 1, 1]),
      new Cube([0.5, 0.5, 0], [1, 1, 0.5])];
  }
  
  handleClickElementByIdx(idx) {
    return () => {
      this.els

    }
  }

  render() {
    // const { width, height } = this.props;
    // const { rotation } = this.state;
    const GridElement = this.els[0].dims===2 ? GridElement2D : GridElement3D;
    return (
      <div className="GridVis">
        <div className="GridVis-plane">
        {this.els.map((it, idx) => (
          <GridElement element={it} key={idx} onClick={this.handleClickElementByIdx(idx)}/>
        ))}
        </div>
      </div>
    );
  }
}

export default GridVis;
