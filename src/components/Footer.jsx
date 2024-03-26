import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Footer() {
  const { currentUser } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='bg-gray-200'>
      <div className='py-[5px] sm:py-[50px] px-[20px] sm:px-[200px] flex sm:grid sm:grid-cols-2 gap-4 text-gray-400 justify-around'>
        <div>
          <Link to='/Faq'>
            <p className='text-gray-500'>FAQ</p>
          </Link>
          <div className='hidden sm:block'>
            <p>OUR PRODUCTS</p>
            <p>ONLINE OR PHONE PURCHASE</p>
            <p>Join US</p>
            <p>REMAIN UP TO DATE</p>
            <p>DELIVERY AND RETURNS</p>
            <p>PRODUCT CARE AND REPAIRS</p>
          </div>
        </div>
        <div>
          <Link to='/ContactUs'>
            <p className='text-gray-500'>CONTACT US</p>
          </Link>
        </div>
      </div>
      <div className='bg-gray-500 text-center text-white'>
        Copyright © 2024 TLé VUE
      </div>
    </div>
  );
}
