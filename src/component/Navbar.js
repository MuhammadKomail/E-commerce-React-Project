import React from 'react';
import logo from '../images/bacola-logo.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Navbar() {
  // ==========Grid==================
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  // =================================
  return(
  <>
    <div className='navMain'>
      <div className='subMain'>
          
      </div>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <div className='logoDiv'>
                <img src={logo} className='logoimg' alt='logo'/>
                <p className='underLogoText'>Online Grocery Shopping Center</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  </>
  )
}













