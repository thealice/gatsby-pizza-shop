import React from 'react';
import { Link, navigate } from 'gatsby';

function goToSlicemasters() {
    setTimeout(() => {
        navigate('/slicemasters', { replace: true });
    }, 2000)
}
export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/beers">Beers</Link>
                </li>
                <li>
                    <Link to="/pizzas">Pizzas</Link>
                </li>
                <li>
                    <Link to="/orders">Order Pizza!</Link>
                </li>
                <li>
                <button type="button" onClick={goToSlicemasters}>Slice Masters</button>
                </li>
            </ul>
        </nav>
    )
}