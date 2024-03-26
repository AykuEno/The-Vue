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
      <div className='w-full sm:w-[80%]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5'>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/AromaticList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full text-center text-white'>Original Jars Candles</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/AromaticList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full text-center text-white'>Aromatic Mold Candles</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/AromaticList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full text-center text-white'>Aromatic Candle Surprise</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/AromaticList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full text-center text-white'>Aromatic Season</p>
            </Link>
          </div>
          <div className='align-center text-center rounded hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 relative'>
            <Link to='/AromaticList'>
              <img className='w-full h-full rounded' src={Img4}/>
              <p className='absolute bottom-2 w-full text-center text-white'>Aromatic Refills</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-[20%] hidden sm:block bg-gray-400 text-white'>
        <List>
          <ListItem>
            <ListItemText primary="Original Jars Candles" />
          </ListItem>
          <List component="div">
            <ListItem button selected>
              <ListItemText className='pl-2' primary="Serenity" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Exhale" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Suave" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Coolheaded" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Poised" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Ease" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Unruffled" />
            </ListItem>
          </List>
          <ListItem button>
            <ListItemText primary="Aromatic Mold Candles" />
          </ListItem>
          <List component="div">
            <ListItem button selected>
              <ListItemText className='pl-2' primary="Bubble Yum" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="NU-NU’s" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="Peachy VUE" />
            </ListItem>
            <ListItem button>
              <ListItemText className='pl-2' primary="TLé Shells" />
            </ListItem>
          </List>
          <ListItem button>
            <ListItemText primary="Aromatic Candle Surprise" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Aromatic Season" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Aromatic Refills" />
          </ListItem>
        </List>  
      </div>  
    </div>
  );
}
