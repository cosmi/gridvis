import React, { Component } from 'react';
import Cube from "../elements/Cube.js";
import React3 from 'react-three-renderer';
import * as THREE from 'three';

const cube = (<boxGeometry
  width={1}
  height={1}
  depth={1}
/>)

function GridElement({ element, rotation }) {
  return (
    <mesh rotation={rotation}>
      {cube}    
      <meshBasicMaterial
        color={0x007700}
      />
    </mesh>
  )
}

class GridVis extends Component {
  
  constructor(props, context) {
    super(props, context);
    this._elements = [new Cube([0,0,0], [0.5,0.5,0.5]), new Cube([0.5,0.5,0.5], [1,1,1])];

    this.state = {
      cameraPosition: new THREE.Vector3(0, 0, 1000),
      cameraRotation: new THREE.Euler(),
      mouseInput: null,
      hovering: false,
      dragging: false,
    };

    this._cursor = {
      hovering: false,
      dragging: false,
    };

    this.lightPosition = new THREE.Vector3(0, 500, 2000);
    this.lightTarget = new THREE.Vector3(0, 0, 0);
  }
  

  _onAnimate = () => {
    this._onAnimateInternal();
  };


  componentDidMount() {

    const {
      container,
      camera,
    } = this.refs;

    // const controls = new TrackballControls(camera);

    // controls.rotateSpeed = 1.0;
    // controls.zoomSpeed = 1.2;
    // controls.panSpeed = 0.8;
    // controls.noZoom = false;
    // controls.noPan = false;
    // controls.staticMoving = true;
    // controls.dynamicDampingFactor = 0.3;

    // this.controls = controls;

    // this.controls.addEventListener('change', this._onTrackballChange);
  }

  render() {
    const { width, height } = this.props;
    const { rotation } = this.state;

    console.log("R");
    return (
      <React3 
        mainCamera="camera"
        width={width}
        height={height}
        onAnimate={this._onAnimate}
        >
        <scene>
          <perspectiveCamera
            name="camera"
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          />
          <GridElement element={this._elements[0]} rotation={rotation}/>
        </scene>
      </React3>
    );
  }
}

export default GridVis;
