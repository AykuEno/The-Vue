import React, { useState } from 'react';
import {
  Image, 
  Carousel
} from 'react-bootstrap';
import Img1 from '../assets/images/carousel/1.png';
import Img2 from '../assets/images/carousel/2.png';
import Img3 from '../assets/images/carousel/3.png';
import Img4 from '../assets/images/carousel/4.png';
import Img5 from '../assets/images/carousel/5.png';
import Img6 from '../assets/images/carousel/6.png';

import Video1 from '../assets/videos/1.mp4';


export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
        <Carousel.Item>
          <video className='max-h-[200px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] h-full w-full' autoPlay loop controls>
            <source src={Video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <video className='max-h-[200px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] h-full w-full' autoPlay loop controls>
            <source src={Video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <video className='max-h-[200px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] h-full w-full' autoPlay loop controls>
            <source src={Video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <img className='max-h-[200px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] h-full w-full' src={Img4}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='max-h-[200px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] h-full w-full' src={Img2}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='max-h-[200px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[650px] h-full w-full' src={Img3}/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
