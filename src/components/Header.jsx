import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {
  signOut,
} from '../redux/user/userSlice';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-gray-200'>
      <div className='flex justify-between items-center mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-2xl'>TLé VUE</h1>
        </Link>
        <ul className='flex gap-4 items-center'>
          <IconButton onClick={handleClick} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><Link to='/Deluxe'>TLé VUE Deluxe</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/Aromatic'>TLé VUE Aromatic</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/Steading'>TLé VUE Steading</Link></MenuItem>
          </Menu>
          {currentUser ? (
            <li onClick={handleSignOut}>Sign out</li>
          ) : (
            <Link to="/sign-in">
              <li>Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
