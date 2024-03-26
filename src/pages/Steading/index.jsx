import React, { useState } from 'react';
import {
  Image, 
  Carousel
} from 'react-bootstrap';
import Img4 from '../../assets/images/carousel/4.png';
import { Link } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemText
} from '@mui/material';

export default function index() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5'>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/SteadingList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full h-fit text-center text-white'>Goat</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/SteadingList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full h-fit text-center text-white'>Ram</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/SteadingList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full h-fit text-center text-white'>Chicken</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/SteadingList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full h-fit text-center text-white'>Roosters</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/SteadingList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full h-fit text-center text-white'>Snails</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/SteadingList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full h-fit text-center text-white'>Catfish</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
