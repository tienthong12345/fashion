import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';

export default function Home() {
    const history = useNavigate();

    const handleClick = () => {
        history('/header')
    }

    return (
        <div>
            <Header></Header>
            <button onClick={handleClick}>Click to header</button>
        </div>
    )
}
