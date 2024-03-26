import React, { useState } from 'react';
import {
  Image, 
  Carousel
} from 'react-bootstrap';
import Img4 from '../../assets/images/carousel/4.png';

import {
  List,
  ListItem,
  ListItemText
} from '@mui/material';

export default function SteadingList() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='flex'>
      <div className='w-full'>
        <div className='flex flex-wrap p-5 justify-around'>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div><div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Goat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
