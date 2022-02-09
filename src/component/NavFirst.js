import React from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from '@mui/material';
import logo from '../images/logo.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';


export default function NavFirst() {
    return (
        <>
            <form>
                <div className='firstNavMain'>
                    <div className='firstNavMainFirst'>
                        <div className='border'>
                            <div className='firstNavMainFirst1'>
                                <input className='search' placeholder='SEARCH..' type="text" name="name" />
                            </div>
                            <div className='firstNavMainFirst2'>
                                <select className='firstNavSearchBar'>
                                    <option value="apples">ALL CATEGORIES</option>
                                    <option value="oranges">PRINTED SHIRT</option>
                                    <option value="oranges">EMBROIDERED</option>
                                    <option value="oranges">SHIRT</option>
                                    <option value="oranges">DUPATTA</option>
                                    <option value="oranges">2 PIECE</option>
                                    <option value="oranges">3 PIECE</option>
                                    <option value="oranges">TROUSERS</option>
                                    <option value="oranges">PASHA</option>
                                    <option value="oranges">MELANGE</option>
                                    <option value="oranges">GRACE</option>
                                    <option value="tomatoes">AHMAD FABRICS</option>
                                    <option value="tomatoes">BIN YAMEEN</option>
                                </select>
                            </div>
                            <div className='firstNavMainFirst3'>
                                <input type="submit" value="Search" className='firstNavbtn' />
                            </div>
                        </div>
                    </div>
                    <div className='firstNavMain'>
                        <div>
                            <img src={logo} width="150rem" />
                        </div>
                    </div>
                    <div className='firstNavMainLast'>
                        <div>
                            <select className='firstNavSearchBar'>
                                <option value="apples">PKR</option>
                                <option value="oranges">USD</option>
                            </select>
                        </div>
                        <div className='firstNavIcon'>
                            <Link className='personIcon' href="#" ><PersonOutlinedIcon /></Link>
                        </div>
                        <div className='firstNavIcon'>
                            <Link className='personIcon' sx={{ paddingLeft: 4 }} href="#" ><LocalMallIcon /></Link>10 items
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
