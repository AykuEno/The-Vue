import React, { useState } from 'react';
import {
  Image, 
  Carousel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemText
} from '@mui/material';

import Img4 from '../../assets/images/carousel/4.png';

export default function index() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='flex'>
      <div className='w-full sm:w-[80%]'>
        <div className='grid grid-cols-2 gap-5 p-5'>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/DeluxeList'>
              <img className='w-full h-full rounded' src={Img4}/>
            </Link>
            <p className='absolute bottom-2 w-full h-fit text-center text-white'>Closure & Frontal</p>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/DeluxeList'>
              <img className='w-full h-full rounded' src={Img4}/>
            </Link>
            <p className='absolute bottom-2 w-full h-fit text-center text-white'>Hair bundles</p>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/DeluxeList'>
              <img className='w-full h-full rounded' src={Img4}/>
            </Link>
            <p className='absolute bottom-2 w-full h-fit text-center text-white'>Frontal Lace Wig</p>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/DeluxeList'>
              <img className='w-full h-full rounded' src={Img4}/>
            </Link>
            <p className='absolute bottom-2 w-full h-fit text-center text-white'>Custom Unit</p>
          </div>
        </div>
      </div>
      <div className='w-[20%] bg-gray-400 text-white text-sm hidden sm:block'>
        <List>
          <ListItem>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Closure & Frontal" />
          </ListItem>
          <List component="div">
            <ListItem button>
              <ListItemText className='pl-2' primary="Burmese Hair" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Brazilian Hair" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Peruvian Hair" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Virgin Hair" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Mink Hair" />
            </ListItem>
          </List>
          <ListItem button>
            <ListItemText primary="Hair bundles" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Frontal Lace Wig" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Custom Unit" />
          </ListItem>
        </List>  
      </div>  
    </div>
  );
}
