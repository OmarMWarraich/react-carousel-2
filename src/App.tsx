import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bellyfloat from './assets/bellyfloat.png';
import starlinkdish from './assets/starlinkdish.png';
import starship1 from './assets/starship1.png';


class App extends Component {
  render() {
      return (
        <div className="demo-container">
          <Carousel className="demo-carousel">
              <div>
                  <img src={bellyfloat} alt='1' />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src={starlinkdish} alt='2'/>
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <img src={starship1} alt='3'/>
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
          </div>
      );
  }
};
export default App;
