import React, { useState } from 'react';
import {
  Image, 
  Carousel,
} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Modal,
  Button,
  Box,
  Link
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Img4 from '../../assets/images/carousel/4.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function DeluxeList() {
  const [index, setIndex] = useState(0);
  const navigator = useNavigate();
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  const [showDetail, setShowDetail] = useState(false);

  const closeDetailModal = () => setShowDetail(false);
  const showDetailModal = () => setShowDetail(true);


  return (
    <div className='flex'>
      <div className='w-full sm:w-[80%]'>
        <div className='flex flex-wrap p-5 justify-around'>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300' onClick={showDetailModal}>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Closure & Frontal</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300' onClick={showDetailModal}>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Closure & Frontal</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300' onClick={showDetailModal}>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Closure & Frontal</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300' onClick={showDetailModal}>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Closure & Frontal</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300' onClick={showDetailModal}>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Closure & Frontal</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300' onClick={showDetailModal}>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Closure & Frontal</p>
          </div>
          <div className='relative w-fit block h-full align-center m-2 text-center deluxe_container rounded-md hover:shadow-lg hover:shadow-gray-500/30 hover:opacity-70 border-solid border-gray-300' onClick={showDetailModal}>
            <img className='w-full sm:max-w-40 h-full sm:max-h-40 rounded-md' src={Img4}/>
            <p className='absolute bottom-3 text-center w-full text-white'>Closure & Frontal</p>
          </div>
        </div>
      </div>
      <Modal
        open={showDetail}
        onClose={closeDetailModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, maxWidth: 700 }}>
          <h1 className='text-center text-[25px] my-2'>Detail</h1>
          <div className='h-[50vh] overflow-auto block md:flex md:gap-2 text-[11px] sm:text-[15px]'>
            <div className='w-full'>
              <img className='' src={Img4}/>
            </div>
            <div className='border-2 p-3 flex flex-column gap-3 overflow-auto'>
              <div className='w-full flex'>
                <p className='mr-3 w-[30%]'>Hair Color:</p>
                <p className='w-[70%]'>Natural Color</p>
              </div>
              <div className='w-full flex'>
                <p className='mr-3 w-[30%]'>Hair Texture:</p>
                <p className='w-[70%]'>Body Wave</p>
              </div>
              <div className='w-full flex'>
                <p className='mr-3 w-[30%]'>Hair Type:</p>
                <p className='w-[70%]'>100% Virgin Human Hair</p>
              </div>
              <div className='w-full flex'>
                <p className='mr-3 w-[30%]'>Lace Type:</p>
                <p className='w-[70%]'>HD Lace</p>
              </div>
              <div className='w-full flex'>
                <p className='mr-3 w-[30%]'>Lace Size:</p>
                <p className='w-[70%]'>13x4</p>
              </div>
              <div className='w-full flex'>
                <p className='mr-3 w-[30%]'>Destiny:</p>
                <p className='w-[70%]'>150% & 180% & 200%</p>
              </div>
              <div className='w-full flex'>
                <p className='mr-3 w-[30%]'>Shipping:</p>
                <p className='w-[70%]'>Free Shipping to USA, Other Country Off 50% (USA 2-5 business days, others 5-7 business days)</p>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      
      <div className='hidden sm:block w-[20%] bg-gray-400 text-white'>
        <List>
          <ListItem button onClick={()=>{navigator('/Deluxe')}}>
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
