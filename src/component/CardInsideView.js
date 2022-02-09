import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageClicker from './ImageClicker';

export default function CardInsideView() {

  return (
    <>
      <Box sx={{ margin: 5 }}>
        <Grid container spacing={2}>
          <Grid item xl={1}>
            </Grid>
          <Grid item xl={3}>
            <div className='rightView'>
              <ImageClicker />
            </div>
          </Grid>
          <Grid item xl={5}>
            <div className='leftView'>
              <div className='leftViewFirst'>
                Nayab Abaya Collection Vol 6 D-Qasr e Noor
              </div>
              <div className='leftViewSecond'>
                Fabric: Korean Nidha
              </div>
              <div className='leftViewThird'>
                <b> Details:</b> <br />
                This abaya features front closed with belt on bodice can be used for daily and casual wear navy blue is
                inn these days with black hijab constructed on pure Korean nidha fabric comes along with pure Korean chiffon Sheila.
              </div>
              <div className='leftViewFourth'>
                <strike>PKR5,200</strike>
              </div>
              <div className='leftViewFifth'>
                As low as
              </div>
              <div className='leftViewSixth'>
                <div className='leftViewSixthFirst'>PKR3,350</div>
                <div className='leftViewSixthSecond'>Availability: In stock</div>
              </div>
              <div className='leftViewSeven'>
                <Button className='leftViewSevenBtn' variant="contained">Add to Cart</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
