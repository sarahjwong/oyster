import React from 'react'
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import render from 'react-dom';
import './ConnectEvent.css';

class ConnectEvent2 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    //alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel class="carousel"
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item class="carouselItem">
          <div class="info">
            <h3>Brenda Song</h3>
            <h5>Age 29, Washington DC</h5>
            <img className="connectImg" alt="500x500" src={require('../../images/brenda.jpg')} />
          </div>
          <div class="icons">
            <a href=""><img class="yes" src={require('../../images/yes-grey.png')} /></a>
            <a href=""><img class="no" src={require('../../images/no-grey.png')} /></a>
          </div>
        </Carousel.Item>
        <Carousel.Item class="carouselItem">
          <div class="info">
            <h3>Camila Cabello</h3>
            <h5>Age 21, Washington DC</h5>
            <img className="connectImg" alt="500x500" src={require('../../images/camila.png')} />
          </div>
          <div class="icons">
            <a href=""><img class="yes" src={require('../../images/yes-grey.png')} /></a>
            <a href=""><img class="no" src={require('../../images/no-grey.png')} /></a>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ConnectEvent2;
