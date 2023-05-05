import './Header.scss'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

function Header() {
    return (
        <div className='navbar'>
            <div className='nav-header'>
                <div className='logo'>
                    <img
                        src='https://vietabinhdinh.edu.vn/wp-content/uploads/1678152969_19_Tong-hop-Font-chu-thiet-ke-Logo-dep-nhat.jpg'
                        alt=''
                    ></img>
                </div>
                <div className='search'>
                    <input type='text' placeholder='Search'></input>
                    <BsSearch></BsSearch>
                </div>
            </div>
        </div>
    )
}

export default Header