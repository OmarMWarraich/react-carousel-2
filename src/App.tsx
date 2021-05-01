import React from 'react';
import styled from "styled-components";

import Carousel from "./components/Carousel";
import SlideOne from './components/carouselSlides/SlideOne';
import SlideTwo from './components/carouselSlides/SlideTwo';
import SlideThree from './components/carouselSlides/SlideThree';

const App: React.FC = () => {
  return (
    <div>
      <Carousel>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Carousel>
    </div>
  );
}

export default App;