import React, { useState } from 'react'
import Link from '@mui/material/Link';
import Dropdown from './DropdownCat';
import Dropdown2 from './DropdownBrand';

export default function Navbar() {
  const [currentFruit, setCurrentFruit] = useState('oranges')

  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
  }
  return (
    <>
      <div className='SecondNavBarMain'>
        <div className='SecondNavBarMainSub'>
          <div className='SecondNavBarMainFirst'>
            <Dropdown />
          </div>
          <div className='SecondNavBarMainSecond'>
            <Link href="#" className='link'>NEW ARRIVAL</Link>
          </div>
          <div className='SecondNavBarMainThird'>
            <Link href="#" className='link'>WINTER COLLECTION</Link>
          </div>
          <div className='SecondNavBarMainFourth'>
            <Link href="#" className='link'>WEDDING WEAR</Link>
          </div>
          <div className='SecondNavBarMainFifth'>
            <Link href="#" className='link'>READY TO WEAR</Link>
          </div>
          <div className='SecondNavBarMainSixth'>
            <Link href="#" className='link'>WOMEN</Link>
          </div>
          <div className='SecondNavBarMainSeven'>
            <Link href="#" className='link'>KID</Link>
          </div>
          <div className='SecondNavBarMainEight'>
            <Link href="#" className='link'>SALE</Link>
          </div>

          <div className='SecondNavBarMainNine'>
            <Link href="#" className='link'> MEN</Link>
          </div>
          <div className=''>
            <Link href="#" className='link'> <Dropdown2 className="link" /></Link>
          </div>
        </div>
      </div>
    </>)
}
