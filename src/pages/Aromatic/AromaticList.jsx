import React, { useState } from 'react';
import {
  Image, 
  Carousel
} from 'react-bootstrap';
import Img4 from '../../assets/images/carousel/4.png';
import {useNavigate} from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemText
} from '@mui/material';

export default function AromaticList() {
  const [index, setIndex] = useState(0);
  const navigator = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='flex'>
      <div className='w-full sm:w-[80%]'>
        <div className='flex flex-wrap p-5 justify-around'>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Original Jars Candles</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Aromatic Mold Candles</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Aromatic Candle Surprise</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Aromatic Season</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Aromatic Refills</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Original Jars Candles</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Aromatic Mold Candles</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Aromatic Candle Surprise</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Aromatic Season</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300'>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Aromatic Refills</p>
          </div>
        </div>
      </div>
      <div className='w-[20%] hidden sm:block bg-gray-400 text-white'>
        <List>
          <ListItem button onClick={()=>{navigator('/Aromatic')}}>
            <ListItemText primary="Home" />
          </ListItem>
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
