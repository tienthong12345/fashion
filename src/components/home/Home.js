import './Home.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons";

export default function Home() {
    const history = useNavigate();

    const handleClick = () => {
        history('/login')
    }

    const handleClickRegister = () => {
        history('/register')
    }

    return (
        <>
            <div className='wrapper'>
                <div className='navb'>
                    <div className='nav-header'>
                        <div className='logo'>
                            <img
                                src='https://vietabinhdinh.edu.vn/wp-content/uploads/1678152969_19_Tong-hop-Font-chu-thiet-ke-Logo-dep-nhat.jpg'
                                alt=''
                            ></img>
                        </div>
                        <div className='search'>
                            <input type='text' placeholder='Search'></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-body'>
                <div className='nav-lef'>
                    <Navigation
                        // you can use your own router's api to get pathname
                        activeItemId="/management/members"
                        onSelect={({ itemId }) => {
                            // maybe push to the route
                        }}
                        items={[
                            {
                                title: 'Dashboard',
                                itemId: '/dashboard',
                                // you can use your own custom Icon component as well
                                // icon is optional
                                elemBefore: () => <Icon name="inbox" />,
                            },
                            {
                                title: 'Management',
                                itemId: '/management',
                                elemBefore: () => <Icon name="users" />,
                                subNav: [
                                    {
                                        title: 'Projects',
                                        itemId: '/management/projects',
                                    },
                                    {
                                        title: 'Members',
                                        itemId: '/management/members',
                                    },
                                ],
                            },
                            {
                                title: 'Another Item',
                                itemId: '/another',
                                subNav: [
                                    {
                                        title: 'Teams',
                                        itemId: '/management/teams',
                                    },
                                ],
                            },
                        ]}
                    />
                </div>
                <div className='nav-right'>
                    <button onClick={handleClick}>Đăng nhập</button>
                    <button onClick={handleClickRegister}>Đăng ký</button>
                </div>
            </div>
        </>
    )
}
